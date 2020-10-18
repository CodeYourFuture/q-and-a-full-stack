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
        className="justify-content-center p-2"
      >
        <Navbar.Text href="#" className="text-white">
          <Link to="/home">The Gradutes Q&A</Link>
        </Navbar.Text>
        <Link to="/ask" type="button" className="btn btn-info m-3">
          Ask a question
        </Link>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
