//see, invite, meet, move, ask, say, nod, like, lose, take, live, carry, try, cry, stop, drop, close, drive, put, teach, give, tell, swim, become, chase, change, ride, let, read, feel, hear, ring, break, dance, write - verbos do livro G

import React from "react";
import { StyledBtn, StyledWordsWrapper, StyledOptionBtn } from "./styles";

class BtnWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {
          id: 1,
          text: "I _____ a great movie last night.",
          options: [
            { id: 1, text: "Saw", correct: true },
            { id: 2, text: "Heard" },
            { id: 3, text: "Smelled" },
          ]
        },
        {
          id: 2,
          text: "She _____ her friends to her birthday party.",
          options: [
            { id: 1, text: "Invited", correct: true },
            { id: 2, text: "Ignored" },
            { id: 3, text: "Punished" },
          ]
        },
        {
          id: 3,
          text: "We _____ at the restaurant at 7pm.",
          options: [
            { id: 1, text: "Met", correct: true },
            { id: 2, text: "Missed" },
            { id: 3, text: "Mourned" },
          ]
        },
        {
          id: 4,
          text: "They _____ to a new city last year.",
          options: [
            { id: 1, text: "Moved", correct: true },
            { id: 2, text: "Stayed" },
            { id: 3, text: "Returned" },
          ]
        },
        {
          id: 5,
          text: "Can you _____ me a favor?",
          options: [
            { id: 1, text: "Ask", correct: true },
            { id: 2, text: "Refuse" },
            { id: 3, text: "Steal" },
          ]
        },
        {
          id: 6,
          text: "She _____ she was going to be late.",
          options: [
            { id: 1, text: "Said", correct: true },
            { id: 2, text: "Slept" },
            { id: 3, text: "Screamed" },
          ]
        },
        {
          id: 7,
          text: "He _____ his head to indicate agreement.",
          options: [
            { id: 1, text: "Nodded", correct: true },
            { id: 2, text: "Shook" },
            { id: 3, text: "Sneezed" },
          ]
        },
        {
          id: 8,
          text: "I _____ to eat pizza on Fridays.",
          options: [
            { id: 1, text: "Like", correct: true },
            { id: 2, text: "Dislike" },
            { id: 3, text: "Hate" },
          ]
        },
        {
          id: 9,
          text: "He _____ his keys and couldn't find them.",
          options: [
            { id: 1, text: "Lost", correct: true },
            { id: 2, text: "Found" },
            { id: 3, text: "Threw" },
          ]
        },
        {
          id: 10,
          text: "He _____ a photo of the sunset.",
          options: [
            { id: 1, text: "Took", correct: true },
            { id: 2, text: "Captured" },
            { id: 3, text: "Snapped" }
          ]
        },
        {
          id: 11,
          text: "They _____ in a small town.",
          options: [
            { id: 1, text: "Live" },
            { id: 2, text: "Reside", correct: true },
            { id: 3, text: "Dwell" }
          ]
        },
        {
          id: 12,
          text: "She _____ a heavy bag of groceries.",
          options: [
            { id: 1, text: "Brought" },
            { id: 2, text: "Took" },
            { id: 3, text: "Carried", correct: true }
          ]
        },
        {
          id: 13,
          text: "He _____ to learn a new language.",
          options: [
            { id: 1, text: "Attempted", correct: true },
            { id: 2, text: "Failed" },
            { id: 3, text: "Ignored" }
          ]
        },
        {
          id: 14,
          text: "She _____ after watching a sad movie.",
          options: [
            { id: 1, text: "Slept" },
            { id: 2, text: "Laughed" },
            { id: 3, text: "Cried", correct: true }
          ]
        },
        {
          id: 15,
          text: "He _____ his car at the gas station.",
          options: [
            { id: 1, text: "Accelerated" },
            { id: 2, text: "Stopped", correct: true },
            { id: 3, text: "Swerved" }
          ]
        },
        {
          id: 16,
          text: "She accidentally _____ her phone and broke the screen.",
          options: [
            { id: 1, text: "Lost" },
            { id: 2, text: "Dropped", correct: true },
            { id: 3, text: "Scratched" }
          ]
        },
        {
          id: 17,
          text: "She _____ the book and went to sleep.",
          options: [
            { id: 1, text: "Opened" },
            { id: 2, text: "Closed", correct: true },
            { id: 3, text: "Tore" }
          ]
        },
        {
          id: 18,
          text: "He _____ to the beach last weekend.",
          options: [
            { id: 1, text: "Rode" },
            { id: 2, text: "Drove", correct: true },
            { id: 3, text: "Flew" }
          ]
        },
        {
          id: 19,
          text: "She _____ the vase on the shelf.",
          options: [
            { id: 1, text: "Put", correct: true },
            { id: 2, text: "Dropped" },
            { id: 3, text: "Threw" }
          ]
        },
        {
          id: 20,
          text: "He _____ English to foreign students.",
          options: [
            { id: 1, text: "Learned" },
            { id: 2, text: "Teaches", correct: true },
            { id: 3, text: "Forgot" }
          ]
        },
        {
          id: 21,
          text: "She _____ her sister a birthday present.",
          options: [
            { id: 1, text: "Bought" },
            { id: 2, text: "Gave", correct: true },
            { id: 3, text: "Sold" }
          ]
        },
        {
          id: 22,
          text: "He _____ her a secret about their boss.",
          options: [
            { id: 1, text: "Asked" },
            { id: 2, text: "Told", correct: true },
            { id: 3, text: "Ignored" }
          ]
        },
        {
          id: 23,
          text: "They _____ in the lake during the summer.",
          options: [
            { id: 1, text: "Fished" },
            { id: 2, text: "Swam", correct: true },
            { id: 3, text: "Boated" }
          ]
        },
        {
          id: 24,
          text: "She _____ a doctor after years of studying.",
          options: [
            { id: 1, text: "Remained" },
            { id: 2, text: "Became", correct: true },
            { id: 3, text: "Retired" }
          ]
        },
        {
          id: 25,
          text: "He _____ his dog around the park.",
          options: [
            { id: 1, text: "Caught" },
            { id: 2, text: "Chased", correct: true },
            { id: 3, text: "Released" }
          ]
        },
        {
          id: 26,
          text: "She _____ her hair color to blonde.",
          options: [
            { id: 1, text: "Maintained" },
            { id: 2, text: "Changed", correct: true },
            { id: 3, text: "Destroyed" }
          ]
        },
        {
          id: 27,
          text: "They _____ their bikes on the mountain trail.",
          options: [
            { id: 1, text: "Rode", correct: true },
            { id: 2, text: "Drove" },
            { id: 3, text: "Walked" }
          ]
          },
          {
          id: 28,
          text: "She _____ her son stay up late to finish his homework.",
          options: [
            { id: 1, text: "Forced" },
            { id: 2, text: "Helped" },
            { id: 3, text: "Let", correct: true }
          ]
        },
        {
          id: 29,
          text: "He _____ a book on the train to work.",
          options: [
            { id: 1, text: "Listened" },
            { id: 2, text: "Watched" },
            { id: 3, text: "Read", correct: true }
          ]
        },
        {
          id: 30,
          text: "She _____ cold after being outside in the snow.",
          options: [
            { id: 1, text: "Saw" },
            { id: 2, text: "Heard" },
            { id: 3, text: "Felt", correct: true }
          ]
        },
        {
          id: 31,
          text: "They _____ a loud noise coming from the construction site.",
          options: [
            { id: 1, text: "Saw" },
            { id: 2, text: "Felt" },
            { id: 3, text: "Heard", correct: true }
          ]
        },
        {
          id: 32,
          text: "The phone _____ during their dinner.",
          options: [
            { id: 1, text: "Sang" },
            { id: 2, text: "Danced" },
            { id: 3, text: "Rang", correct: true }
          ]
        },
        {
          id: 33,
          text: "He _____ the vase by accident.",
          options: [
            { id: 1, text: "Fixed" },
            { id: 2, text: "Bought" },
            { id: 3, text: "Broke", correct: true }
          ]
        },
        {
          id: 34,
          text: "She _____ at her sister's wedding reception.",
          options: [
            { id: 1, text: "Cried" },
            { id: 2, text: "Laughed" },
            { id: 3, text: "Danced", correct: true }
          ]
        },
        {
          id: 35,
          text: "He _____ a letter to his friend in Spain.",
          options: [
            { id: 1, text: "Said" },
            { id: 2, text: "Read" },
            { id: 3, text: "Wrote", correct: true }
          ]
        },
        {
          id: 36,
          text: "She _____ her son stay up late to finish his homework.",
          options: [
            { id: 1, text: "Forced" },
            { id: 2, text: "Helped" },
            { id: 3, text: "Let", correct: true }
          ]
        },
        {
          id: 37,
          text: "He _____ a book on the train to work.",
          options: [
            { id: 1, text: "Listened" },
            { id: 2, text: "Watched" },
            { id: 3, text: "Read", correct: true }
          ]
        },
        {
          id: 38,
          text: "She _____ cold after being outside in the snow.",
          options: [
            { id: 1, text: "Saw" },
            { id: 2, text: "Heard" },
            { id: 3, text: "Felt", correct: true }
          ]
        },
        {
          id: 39,
          text: "They _____ a loud noise coming from the construction site.",
          options: [
            { id: 1, text: "Saw" },
            { id: 2, text: "Felt" },
            { id: 3, text: "Heard", correct: true }
          ]
        },
        {
          id: 40,
          text: "The phone _____ during their dinner.",
          options: [
            { id: 1, text: "Sang" },
            { id: 2, text: "Danced" },
            { id: 3, text: "Rang", correct: true }
          ]
        },
        {
          id: 41,
          text: "He _____ the vase by accident.",
          options: [
            { id: 1, text: "Fixed" },
            { id: 2, text: "Bought" },
            { id: 3, text: "Broke", correct: true }
          ]
        },
        {
          id: 42,
          text: "She _____ at her sister's wedding reception.",
          options: [
            { id: 1, text: "Cried" },
            { id: 2, text: "Laughed" },
            { id: 3, text: "Danced", correct: true }
          ]
        },
        {
          id: 43,
          text: "He _____ a letter to his friend in Spain.",
          options: [
            { id: 1, text: "Said" },
            { id: 2, text: "Read" },
            { id: 3, text: "Wrote", correct: true }
          ]
          }
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