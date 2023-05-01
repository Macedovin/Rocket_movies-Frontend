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

    padding: 4rem 0 0;
  }
`;

export const Content = styled.div`
  max-width: 113.6rem;
  height: 100vh;

  margin: 0 auto; 

  > a {

    color: ${({ theme }) => theme.COLORS.PINK};
    
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }
  }
  
`;

export const MovieContent = styled.div`
  max-width: 113.6rem;
  max-height: 58rem;

  margin: 2.4rem auto 0;
  padding-right: 0.5rem;

  overflow-y: auto;

  > p {
    white-space: pre-line;
    font-weight: 400;
    text-align:justify;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 2.9rem;

  }
`;

export const MovieInfos = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  > div:nth-child(1) {
    display: flex;

    margin-bottom: 2.4rem;

    h1 {
      font-size: 3.6rem;

      margin-right: 1.9rem;
    }

    
  }
  
  .tags {
    margin-bottom:4rem;

  }
`;

export const UserInfos = styled.div`
  font-family: 'Roboto', sans-serif; 

  display: flex;

  margin-bottom: 4rem; 

  img {
    width: 1.6rem;
    height: 1.6rem;

    margin-right: 0.8rem;
  }

  svg {
    margin: 0 0.8rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;

