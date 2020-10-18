import React from "react";
import { Container, Navbar } from "react-bootstrap";
//import AskQuestion from "./AskQuestion";

const NavMenu = () => {
  return (
    <Container>
      <Navbar
        expand="lg"
        variant="dark"
        bg="secondary"
        className="justify-content-center display-4 p-2"
      >
        <Navbar.Text href="#" className="text-white">
          The Gradutes Q&A
        </Navbar.Text>
        {/* <AskQuestion /> */}
      </Navbar>
    </Container>
  );
};

export default NavMenu;
