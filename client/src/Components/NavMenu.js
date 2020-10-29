import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import AskQuestion from "./AskQuestion";

const NavMenu = () => {
  return (
    <div>
      <Container>
        <Navbar
          expand="lg"
          className="justify-content-around p-2 my-2 bg-light"
        >
          <div className="float-left">
            <img
              src="client/src/Assets/CYFLogo.png"
              alt="CYF Logo"
              width="15%"
            />
          </div>
        </Navbar>
      </Container>
      <Container>
        <div className="WelcomeSection">
          <h1>Welcome to the Q&A App</h1>
          <p>
            This product is in beta. That means that everything you post in here
            could be lost at some point.
          </p>

          <p>
            Please give us your feedback via{" "}
            <a href="https://forms.gle/drxvYH88GJFgo8R39"> this form </a>
          </p>
          <Link to="/">
            <button
              type="button"
              className="btn btn-success p-3 font-weight-bold"
            >
              View all Questions
            </button>
          </Link>
          <Link
            to="/ask"
            type="button"
            className="btn btn-info m-3 p-3 font-weight-bold"
          >
            Ask a question
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
