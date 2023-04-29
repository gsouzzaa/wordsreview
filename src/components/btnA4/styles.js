import styled from "styled-components";

export const StyledBtn = styled.button`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_4A};
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

  border: ${props => props.hasSelectedWord ? '.3rem solid #303030' : 'none'};
  color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
  
  border-radius: 1.5rem;
  margin: 0 2rem;
  font-size: 5rem;
  margin-top: 5rem;
  padding: 1rem;
`;