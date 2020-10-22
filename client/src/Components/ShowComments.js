import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export default function ShowComments({ comments }) {
  function createMarkup(comment) {
    return { __html: comment };
  }

  return (
    <div>
      <p className="lead text-left">Answers:</p>
      {comments.length >= 1
        ? comments.map((comment, index) => (
            <Card bg="light" key={index} className="mb-2 text-left">
              <Card.Body>
                <Card.Text
                  dangerouslySetInnerHTML={createMarkup(comment.comment)}
                />
              </Card.Body>
            </Card>
          ))
        : "No answer yet."}
    </div>
  );
}

ShowComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question_id: PropTypes.number,
      comment: PropTypes.string,
      comment_date: PropTypes.string,
    })
  ),
};
