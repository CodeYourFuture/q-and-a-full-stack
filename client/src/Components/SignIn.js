import React, { useState, useEffect } from "react";
import "../App.css";
import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

function SignIn() {
  const [isSignedIn, setIsSingedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSingedIn({ isSignedIn: !!user });
    });
  }, []);

  return (
    <div>
      {isSignedIn ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2 className="title">Sign In</h2>
                </div>
                <FirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
