import React from "react";

import { Form, FormControl } from "react-bootstrap";

const Search = ({ searchChange }) => {
  const handleChange = (e) => {
    searchChange(e.target.value);
  };

  return (
    <div className="container p-2 mb-3 bg-light d-flex justify-content-between">
      <h2 className="ml-3 ">Questions</h2>
      <Form inline>
        <FormControl
          className="searchBar"
          type="text"
          aria-label="search bar"
          placeholder="Search questions"
          className="mr-sm-2"
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default Search;
