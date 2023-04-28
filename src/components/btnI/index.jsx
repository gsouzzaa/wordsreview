//listen, spend, choose, graduate, catch, warn, save, drown, understand, survive, ring, knock, shut, peek, explain, agree

import React from "react";
import { StyledBtn, StyledWordsWrapper, StyledOptionBtn } from "./styles";

class BtnWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {
          id: 1,
          text: "He _____ to music while he works.",
          options: [
            { id: 1, text: "Runs" },
            { id: 2, text: "Listens", correct: true },
            { id: 3, text: "Eats" },
          ]
        },
        {
          id: 2,
          text: "They _____ a lot of money on their vacation.",
          options: [
            { id: 1, text:  "Knew"},
            { id: 2, text: "Spent", correct: true },
            { id: 3, text: "Saw" },
          ]
        },
        {
          id: 3,
          text: "You _____ which college to study?",
          options: [
            { id: 1, text: "Chose", correct: true },
            { id: 2, text: "Refused" },
            { id: 3, text: "Quit" },
          ]
        },
        {
          id: 4,
          text: "She _____ from university last year.",
          options: [
            { id: 1, text: "Graduated", correct: true },
            { id: 2, text: "Dropped out" },
            { id: 3, text: "Failed" },
          ]
        },
        {
          id: 5,
          text: "He _____ the ball with one hand.",
          options: [
            { id: 1, text: "Allowed" },
            { id: 2, text: "Caught", correct: true },
            { id: 3, text: "Warned" },
          ]
        },
        {
          id: 6,
          text: "I _____ you not to go out tonight.",
          options: [
            { id: 1, text:  "Allowed" },
            { id: 2, text: "Encouraged" },
            { id: 3, text: "Warned", correct: true },
          ]
        },
        {
          id: 7,
          text: "She _____ some money every month.",
          options: [
            { id: 1, text: "Met" },
            { id: 2, text: "Swims" },
            { id: 3, text:  "Saves", correct: true },
          ]
        },
        {
          id: 8,
          text: "The swimmer almost _____ in the ocean last weekend.",
          options: [
            { id: 1, text: "Drowned", correct: true },
            { id: 2, text: "Surfed" },
            { id: 3, text: "Swam" },
          ]
        },
        {
          id: 9,
          text: "Do you _____ what I'm saying?",
          options: [
            { id: 1, text: "Misunderstand" },
            { id: 2, text: "Ignore" },
            { id: 3, text: "Understand", correct: true },
          ]
        },
        {
          id: 1,
          text: "She _____ the thunderstorm last night.",
          options: [
            { id: 1, text: "Survived", correct: true },
            { id: 2, text: "Enjoyed" },
            { id: 3, text: "Ignored" },
          ]
        },
        {
          id: 2,
          text: "The doorbell _____ just as I was about to leave.",
          options: [
            { id: 1, text: "Barked" },
            { id: 2, text: "Squeaked" },
            { id: 3, text: "Rang", correct: true },
          ]
        },
        {
          id: 3,
          text: "He _____ on the door before entering the room.",
          options: [
            { id: 1, text: "Sang" },
            { id: 2, text: "Knocked", correct: true },
            { id: 3, text: "Whistled" },
          ]
        },
        {
          id: 4,
          text: "She _____ the window to keep the cold air out.",
          options: [
            { id: 1, text: "Broke" },
            { id: 2, text: "Opened" },
            { id: 3, text: "Shut", correct: true },
          ]
        },
        {
          id: 5,
          text: "He _____ through the window to see what was happening outside.",
          options: [
            { id: 1, text: "Peeked", correct: true },
            { id: 2, text: "Stomped" },
            { id: 3, text: "Laughed" },
          ]
        },
        {
          id: 6,
          text: "She _____ the instructions so that everyone could understand.",
          options: [
            { id: 1, text: "Explained", correct: true },
            { id: 2, text: "Hid" },
            { id: 3, text: "Destroyed" },
          ]
        },
        {
          id: 7,
          text: "We _____ to meet at the park after work.",
          options: [
            { id: 1, text: "Agreed", correct: true },
            { id: 2, text: "Disagreed" },
            { id: 3, text: "Ignored" },
          ]
        }
      ],

      wordSelected: '',
      selectedOptionId: '',
      answerStatus:'',
    };
  }

  handleClick = () => {
    const { words } = this.state;
    const index = Math.floor(Math.random() * words.length);
    const wordSelected = words[index];

    this.setState({ wordSelected, selectedOptionId: '', answerStatus: ''});
  };

  handleOptionClick = (id) => {
    this.setState({selectedOption: id});

    const { wordSelected } = this.state;
    const selectedOption = wordSelected.options.find((option) => option.id === id);
    const isCorrect = selectedOption.correct;

    this.setState({ answerStatus: isCorrect ? "correct" : "incorrect" });
  };

  renderOptions = () => {
    const { wordSelected, selectedOptionId, answerStatus } = this.state;
    if (!wordSelected.options) return null;

    return wordSelected.options.map((option) => (
      <StyledOptionBtn
      key={option.id}
      correct={option.correct}
      selected={option.id === selectedOptionId}
      answerStatus={answerStatus}
      onClick={() => this.handleOptionClick(option.id)}
      >
      {option.text}
      </StyledOptionBtn>
    ));
  };

  handleAnswer = (selectedOption) => {
    const { wordSelected } = this.state;
    const isCorrect = selectedOption.correct;

    this.setState({ wordSelected: { ...wordSelected, correct: isCorrect } });
  };

  render() {
    const { wordSelected } = this.state;
    const hasSelectedWord = !!wordSelected;
    return (
        <div>
          <StyledBtn onClick={this.handleClick}>Click here
          </StyledBtn>

          <StyledWordsWrapper hasSelectedWord={hasSelectedWord}>
          {wordSelected.text && <p>{wordSelected.text}</p>}
          {!wordSelected.options && <p>Click the button ⬆ to start!</p>}
          </StyledWordsWrapper>
          {wordSelected.options && this.renderOptions()}

      </div>
    );
  }
}

export default BtnWords;