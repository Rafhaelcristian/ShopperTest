import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body{
    margin: 0px 60px;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
`;
