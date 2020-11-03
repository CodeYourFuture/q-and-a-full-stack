import React from "react";
import { Container } from "react-bootstrap";
import CYFLogo from "./../Assets/CYFLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Container className="my-4 p-4 bg-dark text-center text-light rounded">
      <h5>
        Created by <b>The Graduates</b> &copy; 2020
      </h5>
      <p>Osman, Laetitia and Halit </p>
      <ul className="d-flex justify-content-around">
        <li>
          <FaGithub size={56} />
        </li>
        <li>
          <HiOutlineMail size={56} />
        </li>
        <li>
          <FaRegQuestionCircle size={56} />
        </li>
      </ul>
      <p>
        Do you want to change your career or your life, but face difficulties
        getting the skills you need?
      </p>
      <p>
        <a href="https://codeyourfuture.io/">CodeYourFuture’s</a> free coding
        and employability courses were made for you.
      </p>
    </Container>
  );
};

export default Footer;
