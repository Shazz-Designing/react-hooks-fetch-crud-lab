import React from "react";
import PropTypes from 'prop-types';


function AdminNavBar({ onChangePage }) {

  AdminNavBar.propTypes = {
    onChangePage: PropTypes.func.isRequired,
  };

  
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
