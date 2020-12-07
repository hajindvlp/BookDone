import React from 'react';
import styled from 'styled-components';

const ClickableContainer = styled.div`
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

const Clickable = (props) => {
  return (
    <ClickableContainer onClick={props.onClick ? () => props.onClick(props) : null}>
      { props.children }
    </ClickableContainer>
  )
}

export default Clickable;