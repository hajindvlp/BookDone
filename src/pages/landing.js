import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Landing = () => {
  const newBookThumbnails = [
    "http://image.yes24.com/goods/95906343/800x0",
    "http://image.yes24.com/goods/95327654/800x0",
    "http://image.yes24.com/goods/95375584/800x0",
    "http://image.yes24.com/goods/95311297/800x0",
    "http://image.yes24.com/goods/95906343/800x0",
    "http://image.yes24.com/goods/95327654/800x0",
    "http://image.yes24.com/goods/95375584/800x0",
    "http://image.yes24.com/goods/95311297/800x0",
  ];

  return (
    <Container>
      <Header>
        <h1> Book Done </h1>
        <p>
          당신만의 온라인 서제
        </p>
      </Header>
      
      <LinkContainer>
        <Link to="/signin"> Start! </Link>
      </LinkContainer>

      <SlidingContainer>
        <h1> 신작 {'>'} </h1>
        <SlidingList bookList={newBookThumbnails} />
      </SlidingContainer>

      <SlidingContainer>
        <h1> 신작 {'>'} </h1>
        <SlidingList bookList={newBookThumbnails} />
      </SlidingContainer>

      <SlidingContainer>
        <h1> 신작 {'>'} </h1>
        <SlidingList bookList={newBookThumbnails} />
      </SlidingContainer>

    </Container>
  )
}

export default Landing;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkContainer = styled.div`
  box-shadow: 0px 0px 40px #ccc;
  background-color: #0000CD;

  border-radius: 10px;
  padding: 20px;

  transition: 0.2s ease-in-out;

  & > a {
    color: white;
    text-decoration: none;
    width: 100%;
    font-size: 2rem;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
               0px -5px 16px rgba(255,255,255,0.3);
  }

  &:hover {
    opacity: 0.7;
    box-shadow: -10px -6px 10px rgba(255, 255, 255, 0.9),
      6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 10rem;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
               0px -5px 16px rgba(255,255,255,0.3);
    margin: 20px 20px 0 20px;
  }

  & > p {
    margin-left: 50px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
               0px -5px 16px rgba(255,255,255,0.3);
  }
`;

const SlidingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;

  & > h1 {
    font-size: 2rem;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
               0px -5px 16px rgba(255,255,255,0.3);
  }
`;

const SlidingList = (props) => {
  const bookThumbnails = props.bookList;
  
  return (
    <SlideShow>
      <ShadowLeft />
      <Books>
        {
          bookThumbnails.map(
            thumbnail => (
              <BookThumbnail src={thumbnail} alt="thumbnail" />
            )
          )
        }
      </Books>
      <ShadowRight />
    </SlideShow>
  )
}

const SlideShow = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  background-size: cover; 
`;

const Books = styled.div`
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  animation: slideshow 10s linear infinite;

  @keyframes slideshow {
    100% { 
      transform: translateX(-66.6666%);  
    }
  }
`;

const BookThumbnail = styled.img`
  width: 200px;
  border-radius: 5px;
  margin: 5px;
`;

const ShadowLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 20px 0 10px -10px rgba(0,0,0,0.8);
  top: 0;
  left: 0;
`;
const ShadowRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset -20px 0 10px -10px rgba(0,0,0,0.8);
  top: 0;
  left: 0;
`;