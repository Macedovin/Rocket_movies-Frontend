import styled from 'styled-components';

import backgroundImg from '../../assets/background_sat.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1, h2, p {
    align-self: start;
  }

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};

  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 4.8rem 0;

  } 

  > p {
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    
    margin-top: 4.2rem;

    > svg { 
      margin-right: 0.8rem;
    }
  }
  
`;

export const Background = styled.div`
  flex: 1;

  background-image: linear-gradient(0deg, rgba(28, 27, 30, 0.7), rgba(28, 27, 30, 0.7)), url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;