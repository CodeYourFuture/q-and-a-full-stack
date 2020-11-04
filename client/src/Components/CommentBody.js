import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import UserContext from "./Context";

export const CommentBody = ({
  id,
  comment,
  comment_date,
  deleteComment,
  // refresh,
  // setRefresh,
}) => {
  const user = useContext(UserContext);
  function createMarkup(comment) {
    return { __html: comment };
  }
  const removeComment = (e) => {
    e.preventDefault();
    user
      ?.getIdToken()
      .then((token) => {
        return deleteComment({
          id: id,
          email: user.email,
          token: token,
        });
      })
      .then((result) => {
        // setRefresh(!refresh);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card bg="light" className="mb-2 text-left">
      <Card.Body className="bg-white">
        <Card.Text dangerouslySetInnerHTML={createMarkup(comment)} />
        <Moment
          fromNow
          className="moment-date text-muted d-block font-weight-lighter"
        >
          {comment_date}
        </Moment>
        {user && (
          <div className="float-right">
            <a href="#" className="pr-3 text-sm">
              edit
            </a>
            <a href="#" onClick={removeComment} className="">
              delete
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

CommentBody.propTypes = {
  id: PropTypes.number,
  // email: PropTypes.string,
  // question_id: PropTypes.number,
  comment: PropTypes.string,
  comment_date: PropTypes.string,
  deleteComment: PropTypes.func,
  // refresh: PropTypes.bool,
  // setRefresh: PropTypes.func,
};
