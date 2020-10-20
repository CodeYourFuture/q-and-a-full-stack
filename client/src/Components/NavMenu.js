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
          variant="dark"
          bg="secondary"
          className="justify-content-around p-2 my-2"
        >
          {/* <Link to="/">
            <button type="button" className="btn btn-success">
              All Questions
            </button>
          </Link> */}
          <Navbar.Text href="#" className="text-white">
            <h2 className="display-4">The Graduates</h2>
          </Navbar.Text>
          {/* <Link to="/ask" type="button" className="btn btn-info m-3">
            Ask a question
          </Link> */}
        </Navbar>
      </Container>
      <Container>
        <div class="WelcomeSection">
          <h1>Welcome to the Q&A app</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
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
