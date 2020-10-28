import React from "react";
import "../App.css";
import { FirebaseAuth } from "react-firebaseui";
import * as firebase from "firebase";

// ======================= with change state ===============
class SignIn extends React.Component {
  state = {
    isSignedIn: false, // Local signed-in state.
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <p>Sign in to post</p>
          <FirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    } else {
      return (
        <div>
          <a
            className="btn btn-danger"
            onClick={() => firebase.auth().signOut()}
          >
            Sign out
          </a>
        </div>
      );
    }
  }
}

// ======================= trying function based component =============
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
