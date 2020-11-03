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
  incrementLikes,
  incrementViews,
} from "./service";
import NavMenu from "./Components/NavMenu";
import SingleQuestion from "./Components/SingleQuestion";
import ScrollHandler from "./Components/ScrollHandler";
import * as firebase from "firebase";
import UserContext from "./Components/Context";
import Footer from "./Components/Footer";

let firebaseConfig = {
  apiKey: "AIzaSyDCnn6mfzVroh7VQcln9atjfaa8nIEZUlQ",
  authDomain: "q-and-a-342c1.firebaseapp.com",
  databaseURL: "https://q-and-a-342c1.firebaseio.com",
  projectId: "q-and-a-342c1",
  storageBucket: "q-and-a-342c1.appspot.com",
  messagingSenderId: "248622209912",
  appId: "1:248622209912:web:fbfcb6ec6e58e198f8c68d",
  measurementId: "G-8JVYMM2GNB",
};

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
                    incrementLikes={incrementLikes}
                    incrementViews={incrementViews}
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
              <Footer />
            </div>
          </div>
        </UserContext.Provider>
      </ScrollHandler>
    </Router>
  );
}

export default App;
