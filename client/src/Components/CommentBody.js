/* eslint-disable linebreak-style */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import UserContext from "./Context";
import DeleteCommentModal from "./DeleteCommentModal";

export const CommentBody = ({
  id,
  comment,
  email,
  comment_date,
  deleteComment,
  setCommentRefresher,
  commentRefresher,
}) => {
  const user = useContext(UserContext);
  function createMarkup(comment) {
    return { __html: comment };
  }
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

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
        setCommentRefresher(!commentRefresher);
        setShowModal(false);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card bg="light" className="mb-4 text-left">
      <Card.Body className="bg-white rounded pt-1 pb-0">
        <Card.Text dangerouslySetInnerHTML={createMarkup(comment)} />
        <Moment
          fromNow
          className="moment-date text-muted d-block font-weight-lighter"
        >
          {comment_date}
        </Moment>
        {user?.email === email && (
          <div className="float-right">
            <a href="" onClick={handleShowModal} className="">
              delete
            </a>
          </div>
        )}
      </Card.Body>
      {showModal && (
        <DeleteCommentModal
          handleCloseModal={handleCloseModal}
          showModal={showModal}
          removeComment={removeComment}
        />
      )}
    </Card>
  );
};

CommentBody.propTypes = {
  id: PropTypes.number,
  comment: PropTypes.string,
  email: PropTypes.string,
  comment_date: PropTypes.string,
  deleteComment: PropTypes.func,
  commentRefresher: PropTypes.bool,
  setCommentRefresher: PropTypes.func,
};
