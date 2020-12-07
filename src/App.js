import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import './reset.css';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './pages/signin';
import Landing from './pages/landing';
import Home from './pages/home';
import NotFound from './pages/notfound';

import Firebase, { FirebaseContext } from './firebase';

const firebaseApp = new Firebase();

function App() {
  
  const [user] = useAuthState(firebaseApp.auth);

  return (
    <FirebaseContext.Provider value={firebaseApp} >
      <div className="App">
        { user ? <Authed /> : <UnAuthed /> }
      </div>
    </FirebaseContext.Provider>
  );
}

const Authed = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const UnAuthed = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
