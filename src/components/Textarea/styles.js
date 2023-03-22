import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;

  resize: none;

  padding: 1.6rem;
  margin-bottom: 4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;