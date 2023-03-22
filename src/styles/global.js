import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  } 

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none; 
  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  } 

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  div, form {

    /* SCROLLBAR STYLE - Mozilla */

    scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
    scrollbar-width: thin;

    /* SCROLLBAR STYLE - Chrome and others a*/
    
    &::-webkit-scrollbar {
      width: 2.2rem;

    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 1rem;
      border: solid .6rem transparent;
      box-shadow: inset 1rem 0 0 0 ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 0 1.8rem;
    }
}
`;