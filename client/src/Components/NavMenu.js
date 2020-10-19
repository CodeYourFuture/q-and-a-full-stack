import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import AskQuestion from "./AskQuestion";

const NavMenu = () => {
  return (
    <Container>
      <Navbar
        expand="lg"
        variant="dark"
        bg="secondary"
        className="justify-content-around p-2 my-2"
      >
        <Link to="/">
          <button type="button" className="btn btn-success">
            All Questions
          </button>
        </Link>
        <Navbar.Text href="#" className="text-white">
          <h2 className="display-4">The Gradutes Q&A</h2>
        </Navbar.Text>
        <Link to="/ask" type="button" className="btn btn-info m-3">
          Ask a question
        </Link>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
