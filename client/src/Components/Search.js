import React from "react";
import { Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({
  searchChange,
  questions,
  userOnlyQuestions,
  filteredQuestions,
}) => {
  const handleChange = (e) => {
    searchChange(e.target.value);
  };

  return (
    <div className="container p-2 mb-3 bg-light d-flex justify-content-between">
      <h2 className="ml-3 ">
        {filteredQuestions
          ? `${filteredQuestions.length} Questions`
          : userOnlyQuestions
          ? `${userOnlyQuestions.length} Questions`
          : `${questions.length} Questions`}
      </h2>
      <Form inline>
        <FormControl
          className="searchBar mr-sm-2"
          type="text"
          aria-label="search bar"
          placeholder="Search questions"
          onChange={handleChange}
        />
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
  userOnlyQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      question_date: PropTypes.string,
      email: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  searchChange: PropTypes.func,
};

export default Search;
