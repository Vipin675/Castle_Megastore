import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  //   sans-serif;
  font-family: "Josefin Sans", sans-serif; // Google fonts
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

`;
