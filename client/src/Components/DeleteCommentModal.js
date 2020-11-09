import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteCommentModal = ({ handleCloseModal, showModal, removeComment }) => {
  console.log("handleCloseModal", handleCloseModal);
  console.log("showModal", showModal);
  console.log("removeComment", removeComment);

  const [bgColor, setBgColor] = useState();

  const buttonFunction = () => {};

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Continue Deleting Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to continue?</Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          variant="none"
          onClick={removeComment}
          className="btn secondary-color button-a-secondary text-white"
        >
          Delete
        </Button>
        <Button
          variant="none"
          onClick={handleCloseModal}
          className="btn tertiary button-a-tertiary bg-white"
        >
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCommentModal;

DeleteCommentModal.propTypes = {
  showModal: PropTypes.bool,
  removeComment: PropTypes.func,
  handleCloseModal: PropTypes.func,
};
