import React, { useState, useEffect } from "react";
import "../App.css";
import { FirebaseAuth } from "react-firebaseui";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
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

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
// function SignIn() {
//   const [isSignedIn, setIsSingedIn] = useState(false);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   const uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
//     callbacks: {
//       signInSuccessWithAuthResult: () => false,
//     },
//   };

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       setIsSingedIn({ isSignedIn: !!user });
//     });
//   }, []);

//   return (
//     <div>
//       {isSignedIn ? (
//         <Redirect to={{ pathname: "/" }} />
//       ) : (
//         <div className="section">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="section-title">
//                   <h2 className="title">Sign In</h2>
//                 </div>
//                 <StyledFirebaseAuth
//                   uiConfig={uiConfig}
//                   firebaseAuth={firebase.auth()}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default SignIn;
