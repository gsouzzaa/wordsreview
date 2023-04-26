import React from "react";
import { StyledBtn, StyledWordsWrapper, StyledOptionBtn  } from "./styles";

class BtnWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
      {
        id: 1,
        text: "I _____ to finish the level C this month.",
        options: [
          { id: 1, text: "Sink" },
          { id: 2, text: "Keep" },
          { id: 3, text: "Intend", correct: true },
        ],
      },
      {
        id: 2,
        text: "She is going to have an interview tomorrow",
        options: [
          { id: 1, text: "She got the job", correct: true },
          { id: 2, text: "It's going to rain tomorrow" },
          { id: 3, text: "She is feeling sick" },
        ],
      },
      {
        id: 3,
        text: "I will be late for work today",
        options: [
          { id: 1, text: "The bus I take everyday broke", correct: true },
          { id: 2, text: "Im looking forward to travel again" },
          { id: 3, text: "I will be free after the exam" },
        ],
      },
      {
        id: 4,
        text: "I _____ the bills on time this month.",
        options: [
          { id: 1, text: "Paid", correct: true },
          { id: 2, text: "Burned" },
          { id: 3, text: "Hid" },
        ]
      },
      {
        id: 5,
        text: "She _____ her friend about the party next week.",
        options: [
          { id: 1, text: "Told", correct: true },
          { id: 2, text: "Forgot" },
          { id: 3, text: "Stole" },
        ]
      },
      {
        id: 6,
        text: "He _____ his old clothes to charity.",
        options: [
          { id: 1, text: "Gave", correct: true },
          { id: 2, text: "Sold" },
          { id: 3, text: "Ate" },
        ]
      },
      {
        id: 7,
        text: "They _____ the documents via email.",
        options: [
          { id: 1, text: "Sent", correct: true },
          { id: 2, text: "Lost" },
          { id: 3, text: "Found" },
        ]
      },
      {
        id: 8,
        text: "She _____ a new product that will revolutionize the market.",
        options: [
          { id: 1, text: "Invented", correct: true },
          { id: 2, text: "Destroyed" },
          { id: 3, text: "Built" },
        ]
      },
      {
        id: 9,
        text: "He _____ a beautiful portrait of his family.",
        options: [
          { id: 1, text: "Painted", correct: true },
          { id: 2, text: "Broke" },
          { id: 3, text: "Ran" },
        ]
      },
      {
        id: 10,
        text: "They _____ to finish the project before the deadline.",
        options: [
          { id: 1, text: "Scrambled", correct: true },
          { id: 2, text: "Slept" },
          { id: 3, text: "Cried" },
        ]
      },
      {
        id: 11,
        text: "He _____ the cake with frosting.",
        options: [
          { id: 1, text: "Covered", correct: true },
          { id: 2, text: "Uncovered" },
          { id: 3, text: "Smashed" },
        ]
      },
      {
        id: 12,
        text: "The pond _____ over in the winter.",
        options: [
          { id: 1, text: "Froze", correct: true },
          { id: 2, text: "Melted" },
          { id: 3, text: "Boiled" },
        ]
      },
      {
        id: 13,
        text: "She _____ the chicken in a pan.",
        options: [
          { id: 1, text: "Fried", correct: true },
          { id: 2, text: "Steamed" },
          { id: 3, text: "Baked" },
        ]
      },
      
    ],
    wordSelected: '',
    selectedOptionId: '',
    answerStatus: '',
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

    return (
        <div>
          <StyledBtn onClick={this.handleClick}>Click here
          </StyledBtn>

          <StyledWordsWrapper>
          {wordSelected.text && <p>{wordSelected.text}</p>}
          {!wordSelected.options && <p>Are you ready? if so, click the button above!</p>}
          {wordSelected.options && this.renderOptions()}
        </StyledWordsWrapper>

      </div>
    );
  }
}

export default BtnWords;