import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
//import AskQuestion from "./AskQuestion";

const NavMenu = () => {
  return (
    <div>
      <Container>
        <Navbar
          expand="lg"
          variant="dark"
          bg="secondary"
          className="justify-content-around p-2 my-2"
        >
          <Navbar.Text href="#" className="text-white">
            <h2 className="display-4">CYF Q&A Portal</h2>
          </Navbar.Text>
          <SignIn />
        </Navbar>
      </Container>
      <Container>
        <div className="WelcomeSection">
          <h1>Welcome</h1>
          <p>
            This product is in beta. That means that everything you post in here
            could be lost at some point.
          </p>

          <p>
            Please give us your feedback via{" "}
            <a href="https://forms.gle/drxvYH88GJFgo8R39"> this form </a>
          </p>
          <Link to="/">
            <button type="button" className="btn btn-success">
              All Questions
            </button>
          </Link>
          <Link to="/ask" type="button" className="btn btn-info m-3">
            Ask a question
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
