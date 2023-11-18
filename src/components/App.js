import React, { useState, useEffect } from 'react';
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); 

  const handleDeleteQuestion = async (id) => {
    try {
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: 'DELETE',
      });
      setQuestions(questions.filter((question) => question.id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleAddQuestion = async (newQuestion) => {
    try {
      const response = await fetch('http://localhost:4000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });

      if (response.ok) {
        const createdQuestion = await response.json();
        setQuestions([...questions, createdQuestion]);
        setPage('List');
      } else {
        console.error('Failed to add question:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList 
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
        />
      )}
      
    </main>
  );
}


export default App;
