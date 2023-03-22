import styled from 'styled-components';

export const Container = styled.section`
  display: inline-flex;
  align-items: center; 
  gap: 1.6rem;

  min-width: 34rem;
  height: 5.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;


  padding: 1.6rem;

  > button {
    display: flex;
    align-items: center;
    
    border: none;
    background: none;

    svg{
      color: ${({ theme }) => theme.COLORS.PINK};

      width: 2.2rem;
      height: 2.2rem;
    }

  }

  > input {
    
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: transparent;

    margin-right: 1.6rem;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
