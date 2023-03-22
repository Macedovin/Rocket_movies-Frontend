import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  display:  flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isExclude }) => isExclude ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  
  color: ${({ theme, isExclude }) => isExclude ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};

  font-weight: 500;

  height: 5.6rem;

  border: 0;
  border-radius: 1rem;

  padding: 0 1.6rem;
  margin: 1.6rem 0;

  > svg {
    margin-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;