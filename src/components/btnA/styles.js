import styled from "styled-components";

export const StyledBtn = styled.button`
  background-color: #DC143C;
  color: #333333;
  
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-size: 4rem;
`;

export const StyledImage = styled.img`
  max-width: 30rem;
  height: 30rem;
  border-radius: 2rem;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
`;

export const StyledWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => props.hasSelectedWord ? '.3rem solid #303030' : 'none'};
  border-radius: 1.5rem;

  margin: 0 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 2rem;
  > 
  p { 
    font-size: 3rem;
    padding: 2rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
  }
`;

export const StyledOptionBtn = styled.button`
  margin: 2rem;
  border-radius: 2rem;
  border: none;
  padding: 2rem;
  font-size: 2rem;
  background-color: ${(props) => props.correct && props.answerStatus === 'correct' ? '#00b300' : '333'};
  color: ${(props) => props.correct && props.answerStatus === 'correct' ? '#fff' : '#343434'}
`;