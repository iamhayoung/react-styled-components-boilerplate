import * as styled from 'styled-components';
import reset from 'styled-reset';

export default styled.createGlobalStyle`
  ${reset};

  // import font here if you want

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
