import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --white: #fcfcfc;
    --background: #f1f3f5 ; //#f8f9fa #f2f3f5
    --gray-line: #DCDDE0;
    --text: #334455;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953b8;
    --blue-twitter: #2AA9E0;
    --shadow: #d5d5d5;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none
  }

  p {
    text-align: justify;
  }


  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
