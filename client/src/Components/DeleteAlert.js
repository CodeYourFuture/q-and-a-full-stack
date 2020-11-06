import React, { useState } from "react";
// import { Alert, Button } from "react-bootstrap";
import {
  Button,
  Modal,
  //   ModalDialog,
  //   ModalHeader,
  //   ModalTitle,
  //   ModalBody,
  //   ModalFooter,
} from "react-bootstrap";

const DeleteAlert = ({ setAlertShow, removeQuestion }) => {
  //   const [alertShow, setAlertShow] = useState(false);

  //   return (
  //     <>
  //       <Alert variant="success">
  //         {/* <Alert.Heading>How's it going?!</Alert.Heading> */}
  //         <p>
  //           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
  //           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
  //           fermentum.
  //         </p>
  //         <hr />
  //         <div className="d-flex justify-content-end">
  //           <Button onClick={() => setAlertShow(false)} variant="outline-success">
  //             Close me y'all!
  //           </Button>
  //         </div>
  //       </Alert>

  //       {/* {!alertShow && (
  //         <Button onClick={() => setAlertShow(true)}>Show Alert</Button>
  //       )} */}
  //     </>
  //   );
  // };
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      {/* add onClick to Buttons */}
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setAlertShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={removeQuestion()}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default DeleteAlert;
