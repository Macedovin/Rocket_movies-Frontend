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

    width: 113.7rem;

    margin: 3.6rem auto;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        margin-right: 0.8rem;
      }
 
    }
  }
`;

export const Form = styled.form`
  max-width: 113.5rem;
  max-height: 79.1rem;

  margin: 2.4rem 0 4rem;
  padding-right: 0.5rem;

  overflow-y: auto;

  > h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  
  }

  > .inputs {
    display: flex;
    justify-content: space-between;
    gap: 4rem; 
    
    margin: 4rem 0;
  }
  
  .newTags {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem 3.5rem ;

    border-radius: 0.8rem;

    padding: 1.6rem;
    
  }

  .buttons{ 
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }
`;