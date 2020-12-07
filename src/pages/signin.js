import React, { useImperativeHandle, useState } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { withFirebase } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, useHistory } from 'react-router-dom';
import { newUser } from '../api/user';

import { FacebookLogo } from '../components/logo';
import Button from '../components/button';

const SignIn = (props) => {
  let history = useHistory();
  const [user] = useAuthState(props.firebase.auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.firebase.auth.signInWithPopup(provider)
      .then(result => {
        newUser(props.firebase, result.user);
        history.push('/');
      }); 
  }

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    props.firebase.auth.signInWithPopup(provider)
      .then(result => {
        newUser(props.firebase, result.user);
        history.push('/');
      })
  }

  if(user) {
    return <Redirect to={{ pathname: "/home" }}/>
  }
  
  return (
    <Container>
      <Title>Sign In</Title>
      <LogoContainer>
        <LoginButton onClick={signInWithGoogle}>
          <LoginLogo 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png" 
            alt="LoginLogo" />
        </LoginButton>
        <LoginButton onClick={signInWithFacebook}>
          <LoginLogo 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" 
            alt="LoginLogo" />
        </LoginButton>
      </LogoContainer>
    </Container>
  )
}

export default withFirebase(SignIn);

const Container = styled.div`
  margin: 10rem auto auto auto;
  width: 24rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  opacity: 95%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: #00296B;
  margin-bottom: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  line-height: 1;
  font-size: 2rem;
  margin: 0 10px;
  text-align: center;
  color: #FDC500;
  padding: 10px
  &:active {
    opacity: 0.3;
    color: #FFD500;
  }
`;

const LoginLogo = styled.img`
  height: 2rem;
  width: 2rem;
  text-align: center;
  height: 2rem;
  margin: auto;
`;