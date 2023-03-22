import styled from 'styled-components';

export const Container = styled.button`
  width: 112rem;

  background-color: ${({ theme }) => theme.COLORS.FADE_RED};
  
  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > div:nth-child(1) {
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 1.5rem;
    
    h1 {

      margin-bottom: 0.8rem;
    }
    
    svg { 
      width: 1.2rem;
      height: 1.2rem;

    }

  }

  > footer {
    text-align: left;
    
  }
`;

export const Ellipsis = styled.div`
  text-align: justify;
  
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin-bottom: 3rem;
  
  p {
    font-familY: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 

  }
  
`;