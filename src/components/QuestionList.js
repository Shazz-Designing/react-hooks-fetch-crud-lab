import React from "react";
import PropTypes from "prop-types"; 
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateCorrectIndex }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateCorrectIndex={onUpdateCorrectIndex} />
        ))}
      </ul>
    </section>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prompt: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctIndex: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onUpdateCorrectIndex: PropTypes.func.isRequired,
};



export default QuestionList;
