import React, { useContext } from "react";
import { Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import UserContext from "./Context";

const Search = ({
  searchChange,
  questions,
  filteredQuestions,
  userQuestions,
  setUserQuestions,
}) => {
  const user = useContext(UserContext);
  const handleChange = (e) => {
    searchChange(e.target.value);
  };

  const handleUserQuestions = () => {
    setUserQuestions(!userQuestions);
  };

  return (
    <div className="container p-2 mb-3 bg-light d-flex justify-content-between rounded search-bar-container">
      <h2 className="ml-3 item">
        {filteredQuestions
          ? `${filteredQuestions.length} Questions`
          : `${questions.length} Questions`}
      </h2>
      <Form inline>
        <FormControl
          className="searchBar mr-1 item"
          type="text"
          aria-label="search bar"
          placeholder="Search questions"
          onChange={handleChange}
        />
        {user && (
          <Form.Check
            className="switch-key bg-dark text-white pr-2 font-weight-bold item show-mine"
            type="switch"
            id="default-checkout"
            label="Show only mine"
            onChange={handleUserQuestions}
            value={userQuestions}
          />
        )}
      </Form>
    </div>
  );
};

Search.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      email: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  searchChange: PropTypes.func,
  filteredQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      email: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  userQuestions: PropTypes.bool,
  setUserQuestions: PropTypes.func,
};

export default Search;
