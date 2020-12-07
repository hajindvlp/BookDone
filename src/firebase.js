import React from 'react';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';

class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyATtR8WqQcwA7XxYf5h25IeuK0t4YSjHlw",
      authDomain: "bookdone-27ad1.firebaseapp.com",
      databaseURL: "https://bookdone-27ad1.firebaseio.com",
      projectId: "bookdone-27ad1",
      storageBucket: "bookdone-27ad1.appspot.com",
      messagingSenderId: "397831457247",
      appId: "1:397831457247:web:5e714bb4a29f559cbd9c6a",
      measurementId: "G-3EHN82VWTL"
    });

    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
    this.analytics = firebase.analytics();
  }
}

const FirebaseContext = React.createContext(null);

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

const withAuth = Component => props => {
  const user = props.firebase.auth.currentUser;

  if(!user) return <Redirect to='/signin' />
  else {
    return <Component {...props} user={user} />
  }
}

export default Firebase;
export { FirebaseContext, withFirebase, withAuth };