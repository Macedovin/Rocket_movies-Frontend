import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: inline-block;

  padding: 0.8rem 1.6rem;

  border-radius: 0.8rem;

  margin: 0 0.8rem 0 0.1rem;
`;