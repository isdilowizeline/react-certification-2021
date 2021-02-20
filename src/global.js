import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    background: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.primaryHover};
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }
   
  hr {
  }
  
  .burgerDiv {
    text-align: center;
    box-sizing: border-box;
  }
  
  small {
    display: block;
  }
  
  a {
    color: ${({theme}) => theme.primaryHover};
    font-weight: bold;
    text-decoration: none;
  }
  
  a:active {
    color: blueviolet;
  }
  
.header {
    color: #fff;
    height:70px;
    background: ${({theme}) => theme.primaryDark};
}
.headerRow {
padding-top:10px;
}
`;
