import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import UserContext from "./Context";

const NavMenu = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src="client/src/Assets/CYFLogo.png"
            className="d-inline-block align-top"
            alt="CYF Logo"
            width="180"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <SignIn />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

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
          {user && (
            <Link
              to="/ask"
              type="button"
              className="btn btn-info m-3 p-3 font-weight-bold"
            >
              Ask a question
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
