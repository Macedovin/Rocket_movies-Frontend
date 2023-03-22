import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.PINK};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
`; 

export const Stars = styled.div`
  input[type="radio"] {
    display: none;
  }
  
  svg {
    width: 2rem;
    height: 2rem;
    
    margin-left: 0.8rem;

  } 
`;