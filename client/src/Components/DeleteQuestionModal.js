import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteQuestionModal = ({ handleClose, show, removeQuestion }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Continue Deleting Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Decline
          </Button>
          <Button variant="primary" onClick={removeQuestion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteQuestionModal;

DeleteQuestionModal.propTypes = {
  show: PropTypes.bool,
  removeQuestion: PropTypes.func,
  handleClose: PropTypes.func,
};
