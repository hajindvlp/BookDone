import React, { useState } from 'react';
import firebase from 'firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { withFirebase, withAuth } from '../firebase';

import Row from '../components/row';
import Book from '../components/book';
import Clickable from '../components/clickable';
import Button from '../components/button';
import InputText, { InputContainer } from '../components/input';
import SignOut from './signout';
import styled from 'styled-components';

const Home = (props) => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('users').doc(props.user.uid)
  );
  const [openAddBook, setOpenAddBook] = useState(false);

  return (
    <Container>
      <Left>
        <SignOut />
      </Left>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection loading</span>}
      {value && (
        <MainContainer>
          <h1>{value.data().name}의 서제</h1>
          <Row>
            { 
              value.data().books.map(
                book => <Book key={book.title} title={book.title} thumbnail={book.thumbnail} /> 
              ) 
            }
          </Row>
          <Button onClick={() => setOpenAddBook(!openAddBook)}> + </Button>
        </MainContainer>
      )}
      { openAddBook && <AddBook firebase={props.firebase} user={props.user} /> }
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  float: right;
  width: 10%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 5rem;
    margin: 20px;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
               0px -5px 16px rgba(255,255,255,0.3);
  }
`;

const AddBook = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [recommends, setRecommends] = useState([]);

  const addNewBook = () => {
    let userid = props.user.uid;
    firebase.firestore().collection('users').doc(userid).update({
      books: firebase.firestore.FieldValue.arrayUnion({
        title, thumbnail
      })
    });
    // catch error
    
    setTitle('');
    setThumbnail('');
  } 

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);  

    fetch(`https://dapi.kakao.com/v3/search/book?query=${evt.target.value}`, {
      method: 'get',
      headers: {
        'Authorization': 'KakaoAK d3d3b497f34ba4d537f3f178a3decdc1'
      }
    }).then(res => res.json()).then(data => {
      if(Array.isArray(data.documents)) setRecommends(data.documents.slice(0, 3));
      else setRecommends([]);
    });
  }

  const BookSelect = (props) => {
    setTitle(props.children.props.title);
    setThumbnail(props.children.props.thumbnail);
  }

  return (
    <div>
      <InputContainer>
        <label> Search </label>
        <InputText 
          type="text" 
          id="searchTerm" 
          value={searchTerm} 
          onChange={handleSearch} />
      </InputContainer>
      <Row>
        { 
          recommends && recommends.map(
            recommend => (
              <Clickable onClick={BookSelect}>
                <Book thumbnail={recommend.thumbnail} title={recommend.title} />
              </Clickable>
            )
          )
        }
      </Row>
      <InputContainer>
        <label> Title </label>
        <InputText 
          type="text" 
          id="title" 
          value={title} 
          onChange={(evt) => setTitle(evt.target.value)} />
      </InputContainer>
      <InputContainer>
        <label> Thumbnail </label>
        <InputText 
          type="text" 
          id="thumbnail" 
          value={thumbnail} 
          onChange={(evt) => setThumbnail(evt.target.value)} />
      </InputContainer>
      <div><img alt="thumbnailPreview" src={thumbnail} /></div>
      <Button onClick={addNewBook}>추가하기</Button>
    </div>
  )
}


export default withFirebase(withAuth(Home));