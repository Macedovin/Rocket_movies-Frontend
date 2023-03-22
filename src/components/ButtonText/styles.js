import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  background-color: transparent;

  border: none;

  > svg {
    margin-right: 0.8rem;
  }
`;