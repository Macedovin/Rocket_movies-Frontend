import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  
  svg {
    width: 2rem;
    height: 2rem;
    
    color: ${({ theme }) => theme.COLORS.PINK};
    
    fill: ${({ theme }) => theme.COLORS.PINK};
    
  }
`;