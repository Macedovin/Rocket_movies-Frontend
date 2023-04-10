import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-bottom: 0.8rem;
  padding: 0 2.6rem 0 1.6rem;
  
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.6rem 0 1.6rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    
    background-color: transparent;

    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
     }
  }

  > button {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    background: none;
    border: none;

    margin-top: 0.5rem;

  }

`;