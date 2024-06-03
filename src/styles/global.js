import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
  }

  a, button{
    text-decoration: none;
    cursor: pointer;
  }

  li{
    list-style: none;
  }

  a:hover, button:hover{
    filter: brightness(0.9);
  }

`
export default GlobalStyle;
