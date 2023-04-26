import styled from "styled-components";

export const StyledBtn = styled.button`
  background-color: #87CEFA;
  border-radius: 2rem;
  border: none;

  color: #333333;

  padding: .5rem;
  font-size: 4rem;
`;

export const StyledWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  margin: 0 1rem;
  margin-top: 5rem;
  gap: 2rem;
  
  color: #333333;
  > 
  p { 
    font-size: 5.5rem;
  }
`;

export const StyledOptionBtn = styled.button`
  border-radius: 2rem;
  border: none;
  color: #404040;
  padding: .5rem;
  font-size: 3rem;
  background-color: ${(props) => props.correct && props.answerStatus === 'correct' ? '#00b300' : '333'};
  color: ${(props) => props.correct && props.answerStatus === 'correct' ? '#fff' : '333'}
`;