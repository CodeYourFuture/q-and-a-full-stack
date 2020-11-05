/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";

export default function SingleQuestion({ context, title, question_date }) {
  return (
    <div>
      <h4>Would you like to see a single question on a page when you click?</h4>
      <div className="container text-left bg-secondary p-3 mb-3">
        <div className="card my-2 p-2">
          <span>Title:</span>
          {title}
        </div>
        <div className="card my-2 p-2">
          <span>Context:</span>
          {context}
        </div>
        <div className="card mb-4 p-2">
          <span>Question Date:</span>
          {question_date}
        </div>
      </div>
    </div>
  );
}

SingleQuestion.propTypes = {
  context: PropTypes.string,
  title: PropTypes.string,
  question_date: PropTypes.string,
};
