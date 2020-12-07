import React from 'react';
import styled from 'styled-components';

const BookBox = styled.div`
  margin: 20px;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px #ccc;
  background-color: #fff;
`;

const Book = (props) => {
  return (
    <BookBox>
      <img alt="book_thumbnail" src={props.thumbnail} width={200} />
      <p>{props.title}</p>
    </BookBox>
  )
}

export default Book;