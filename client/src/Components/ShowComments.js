import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import UserContext from "./Context";

export default function ShowComments({ comments }) {
  function createMarkup(comment) {
    return { __html: comment };
  }

  const user = useContext(UserContext);

  return (
    <div>
      <p className="lead text-left font-weight-bold ml-1">
        {comments.length == 1
          ? `${comments.length} Reply`
          : `${comments.length} Replies:`}
      </p>
      {comments.length >= 1
        ? comments.map((comment, index) => (
            <Card bg="light" key={index} className="mb-2 text-left">
              <Card.Body>
                <Card.Text
                  dangerouslySetInnerHTML={createMarkup(comment.comment)}
                />
                <Moment
                  fromNow
                  className="moment-date text-muted d-block font-weight-lighter"
                >
                  {comment.comment_date}
                </Moment>
                {user && (
                  <div className="float-right">
                    <a href="" className="pr-3 text-sm">
                      edit
                    </a>
                    <a href="" className="">
                      delete
                    </a>
                  </div>
                )}
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
