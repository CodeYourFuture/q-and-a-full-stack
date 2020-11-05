import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import UserContext from "./Context";
import CYFLogo from "./../Assets/CYFLogo.png";

const NavMenu = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <Navbar className="nav-bar">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={CYFLogo}
              className="d-inline-block align-top logo"
              alt="CYF Logo"
              width="180"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <SignIn />
            {!user && (
              <p className="text-muted ml-2 sign-in-text">
                Sign-in to ask question and post reply
              </p>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <div className="WelcomeSection">
          <h1 className="mb-4">Welcome to the Q&A App</h1>
          <p>
            This product is in beta. That means that everything you post in here
            could be lost at some point.
          </p>
          <p>
            Please give us your feedback via{" "}
            <a href="https://forms.gle/drxvYH88GJFgo8R39"> this form </a>
          </p>
          {user && (
            <Link to="/ask">
              <button
                type="button"
                className="primary-color text-white btn mt-3 font-weight-bold"
              >
                Ask a question
              </button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
