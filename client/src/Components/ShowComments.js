import React from "react";
import PropTypes from "prop-types";

export default function ShowComments({ comments }) {
  return (
    <div>
      {comments.length > 1
        ? comments.map((comment) => (
            <span key={comment.id}>{comment.comment}</span>
          ))
        : null}
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
