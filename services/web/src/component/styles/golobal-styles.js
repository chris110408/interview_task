import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  * {
    margin: 0;
    padding: 0;
    
    
    }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
        
  }

  body {
  
    font-family: -apple-system, BlinkMacSystemFont,"Roboto", sans-serif;
    font-size: 16px; /* stylelint-disable unit-blacklist */
    margin: 0;
    min-height: 100vh;
    padding: 0;
    background: #d4d4d4;
  }

  
`;

export default () => <GlobalStyle />;
