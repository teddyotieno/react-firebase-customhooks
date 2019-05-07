import React, { useState, useEffect } from "react";
import { firebase } from "../utils/firebase";
import Nav from "./Nav";
import Channel from "./Channel";

function App() {
  const user = useAuth();

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Channel />
    </div>
  ) : (
    <Login />
  );
}

function Login() {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className="Login">
      <h1>Chat</h1>
      <button onClick={handleSignIn}>Sign in with google</button>
    </div>
  );
}

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          uid: user.uid
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
}
export default App;
