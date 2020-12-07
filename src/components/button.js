import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  color: #6f6cde;
  &:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
      6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
  }
`;

export default Button;