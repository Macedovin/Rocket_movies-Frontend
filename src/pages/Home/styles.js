import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;

    padding: 4.5rem 0 0;
    
  }
`;

export const Content = styled.div`
  width: 113.7rem;

  margin: 0 auto;

`;

export const  AboutUserMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    display: inline; 
 
    font-size: 3.2 rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

  }
`;

export const NewMovie =styled.button`

  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  background-color: ${({ theme }) => theme.COLORS.PINK};

  display:  flex;
  align-items: center;
  justify-content: center;

  height: 4.8rem;

  border: 0;
  border-radius: 1rem;

  padding: 0 3.2rem;

  > svg {
    margin-right: 0.8rem;
  }

`;

export const Cards = styled.div`
  display: block;

  max-width: 113.7rem;
  max-height: 71.7rem;

  overflow-y: auto;
  overflow-x: hidden;

  margin-top: 4rem;
`;