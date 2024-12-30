import styled from "styled-components";

const Button = styled.button`
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 5px;
  background-color: #003Cd7;
  padding: 0px 30px;
  border-radius: 10px;
  border: 1px solid #003Cd7;
  cursor: pointer;
  transition: ease background-color 500ms;
  box-shadow: none;
  &:hover {
    color: #003Cd7;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export default Button