import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.FADE_RED};

    display: flex;
    align-items: center;

    padding: 0 14.5rem;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      
      svg {
        margin-right: 0.8rem;
      }
    }
  }

`;

export const Form = styled.form`
  max-width: 34rem;

  margin: 3rem auto 0;

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }

`;

export const Avatar = styled.div`
  position: relative;
  
  width: 18.6rem;
  height: 18.6rem;
    
  margin: -12.3rem auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;

  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.4rem;
    right: 1rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

`;