import styled from "styled-components";

export const StyledBtn = styled.button`

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_7A};
  color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};

  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-size: 4rem;
`;

export const StyledImage = styled.img`
  max-width: 40rem;
  height: 40rem;
  border-radius: 2rem;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  text-align: center;
  word-wrap: break-word;
  border: ${props => props.hasSelectedWord ? '.3rem solid #303030' : 'none'};
  border-radius: 1.5rem;
  margin: 0 2rem;
  color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
  font-size: 12rem;
  margin-top: 8rem;
`;