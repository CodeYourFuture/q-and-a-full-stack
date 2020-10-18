/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import List from "./Components/List";
import AskQuestion from "./Components/AskQuestion";
import "./App.css";
import { getQuestions, postQuestion, postComment } from "./service";
import NavMenu from "./Components/NavMenu";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(false);

  useEffect(() => {
    getQuestions().then((questions) => setData(questions));
  }, [formData]);

  const formMonitor = () => {
    setFormData(!formData);
  };
  return (
    <div className="App">
      <div className="container">
        <NavMenu />
        <AskQuestion formMonitor={formMonitor} postQuestion={postQuestion} />
        <List data={data} postComment={postComment} />
      </div>
    </div>
  );
}

export default App;
