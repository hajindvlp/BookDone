import React from 'react';
import { withFirebase } from '../firebase';

import Button from '../components/button';

const SignOut = (props) => {
  return props.firebase.auth.currentUser && (
    <Button onClick={() => props.firebase.auth.signOut()}>Sign Out</Button>
  )
}

export default withFirebase(SignOut);