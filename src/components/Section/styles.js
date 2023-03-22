import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 2.4rem;
  }

`;