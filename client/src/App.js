/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List";
import AskQuestion from "./Components/AskQuestion";
import "./App.css";
import {
  getQuestions,
  postQuestion,
  postComment,
  getComments,
  postUser,
} from "./service";
import NavMenu from "./Components/NavMenu";
import SingleQuestion from "./Components/SingleQuestion";
import ScrollHandler from "./Components/ScrollHandler";
import * as firebase from "firebase";
import UserContext from "./Components/Context";

let firebaseConfig;
if (process.env.DATABASE_URL) {
  firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };
} else {
  firebaseConfig = require("./Components/FireConfig");
}

firebase.initializeApp(firebaseConfig);

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(false);
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((user) => setUser(user));

  useEffect(() => {
    user
      ? postUser({
          userId: user.uid,
          email: user.email,
        })
      : null;
  }, [user]);

  useEffect(() => {
    getQuestions().then((questions) => setData(questions));
  }, [formData]);

  const formMonitor = () => {
    setFormData(!formData);
  };
  return (
    <Router>
      <ScrollHandler>
        <UserContext.Provider value={user}>
          <div className="App">
            <div className="container">
              <NavMenu />
              <Switch>
                {user && (
                  <Route exact path="/ask">
                    <AskQuestion
                      formMonitor={formMonitor}
                      postQuestion={postQuestion}
                    />
                  </Route>
                )}
                <Route exact path="/">
                  <List
                    questions={data}
                    getComments={getComments}
                    postComment={postComment}
                  />
                </Route>
                {/* <Route
                  path="/question/:questionId"
                  render={({ match }) => {
                    let question = data.find(
                      (q) => q.id === parseInt(match.params.questionId)
                    );
                    return <SingleQuestion {...question} />;
                  }}
                /> */}
              </Switch>
            </div>
          </div>
        </UserContext.Provider>
      </ScrollHandler>
    </Router>
  );
}

export default App;
