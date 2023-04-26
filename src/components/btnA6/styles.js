import styled from "styled-components";

export const StyledBtn = styled.button`
  background-color: #FF9000;
  border-radius: 2rem;
  border: none;
  padding: .5rem;
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
  border: ${props => props.hasSelectedWord ? '.3rem solid #ccc' : 'none'};
  border-radius: 1.5rem;
  margin: 0 1rem;
  font-size: 12rem;
  margin-top: 8rem;
`;