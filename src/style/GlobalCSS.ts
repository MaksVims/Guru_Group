import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background: white;
}
* {
  fontFamily: Ubuntu;
  color: #2C2C2C;
  fontSize: 14px;
  margin: 0;
}
button {
  border: none;
  outline:none;
  background: transparent;
}
`