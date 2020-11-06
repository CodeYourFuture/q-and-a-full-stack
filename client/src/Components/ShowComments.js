/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import { CommentBody } from "./CommentBody";

export default function ShowComments({
  comments,
  deleteComment,
  setCommentRefresher,
  commentRefresher,
}) {
  return (
    <div>
      <p className="lead text-left font-weight-bold ml-1">
        {comments.length == 1
          ? `${comments.length} Reply`
          : `${comments.length} Replies:`}
      </p>
      {comments.length >= 1
        ? comments.map((comment, index) => (
            <CommentBody
              {...comment}
              key={index}
              deleteComment={deleteComment}
              commentRefresher={commentRefresher}
              setCommentRefresher={setCommentRefresher}
            />
          ))
        : "No comments yet."}
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
  setCommentRefresher: PropTypes.func,
  commentRefresher: PropTypes.bool,
  deleteComment: PropTypes.func,
};
