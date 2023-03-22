import styled from 'styled-components';

import { Link } from 'react-router-dom'; 

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;

  background-color: transparent;

`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK};
  
  > h1 {
    font-size: 2.4rem;
  }
`;

export const Search = styled.div`
  width: 63rem;

  margin: 0 6.4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    text-align: end;
    font-size: 1.4rem; 
    line-height: 1.8rem;

    margin-right: 0.9rem;

    > strong {

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Avatar = styled(Link)`
  > img {
    width: 6.4rem;
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%;
  }

`;