//draw, attack, rescue, sink, keep, stop, rest, solve, scream, plan, master, grow, teach, write, speak, sell, import, break, injure, damage, cut, steal, scratch, display, miss, answer, order, climb, eat, lose, decorate, go, reserve, introduce, meet, read, hear, be, see, drive, build, fly, know, take, leave, fall -  verbos do livro H

import React from "react";
import { StyledBtn, StyledWordsWrapper, StyledOptionBtn } from "./styles";

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
        text: "She is going to have an interview tomorrow.",
        options: [
          { id: 1, text: "She got the job", correct: true },
          { id: 2, text: "It's going to rain tomorrow" },
          { id: 3, text: "She is feeling sick" },
        ],
      },
      {
        id: 3,
        text: "I will be late for work today.",
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
      {
        id: 14,
        text: "I ____ a picture of my dog.",
        options: [
          { id: 1, text: "Draw", correct: true },
          { id: 2, text: "Attack" },
          { id: 3, text: "Rescue" }
        ]
      },
      {
        id: 15,
        text: "I need to ____ the enemy's castle.",
        options: [
          { id: 1, text: "Attack", correct: true },
          { id: 2, text: "Rescue" },
          { id: 3, text: "Sink" }
        ]
      },
      {
        id: 16,
        text: "The firefighters managed to ____ the cat from the burning building.",
        options: [
          { id: 1, text: "Rescue", correct: true },
          { id: 2, text: "Attack" },
          { id: 3, text: "Keep" }
        ]
      },
      {
        id: 17,
        text: "The Titanic ____ on its maiden voyage.",
        options: [
          { id: 1, text: "Sank", correct: true },
          { id: 2, text: "Kept" },
          { id: 3, text: "Stopped" }
        ]
      },
      {
        id: 18,
        text: "I always ____ a spare key in case I lose my main one.",
        options: [
          { id: 1, text: "Keep", correct: true },
          { id: 2, text: "Stop" },
          { id: 3, text: "Rest" }
        ]
      },
      {
        id: 19,
        text: "The police officer signaled for the car to ____.",
        options: [
          { id: 1, text: "Stop", correct: true },
          { id: 2, text: "Solve" },
          { id: 3, text: "Scream" }
        ]
      },
      {
        id: 20,
        text: "After a long hike, I need to ____.",
        options: [
          { id: 1, text: "Rest", correct: true },
          { id: 2, text: "Solve" },
          { id: 3, text: "Scream" }
        ]
      },
      {
        id: 21,
        text: "I need to ____ this math problem to pass the exam.",
        options: [
          { id: 1, text: "Solve", correct: true },
          { id: 2, text: "Scream" },
          { id: 3, text: "Plan" }
        ]
      },
      {
        id: 22,
        text: "I wanted to ____ for help when I saw the spider in my room.",
        options: [
          { id: 1, text: "Scream", correct: true },
          { id: 2, text: "Plan" },
          { id: 3, text: "Master" }
        ]
      },
      {
        id: 23,
        text: "I need to ____ a business strategy for the upcoming quarter.",
        options: [
          { id: 1, text: "Plan", correct: true },
          { id: 2, text: "Master" },
          { id: 3, text: "Grow" }
        ]
      },
      {
        id: 24,
        text: "I want to _____ the guitar and become a true musician.",
        options: [
          { id: 1, text: "Draw" },
          { id: 2, text: "Attack" },
          { id: 3, text: "Master", correct: true }
        ]
      },
      {
        id: 25,
        text: "I want to _____ my own vegetables in my garden this year.",
        options: [
          { id: 1, text: "Sell" },
          { id: 2, text: "Grow", correct: true },
          { id: 3, text: "Cook" },
        ],
      },
      {
        id: 26,
        text: "I want to _____ English to foreign students.",
        options: [
          { id: 1, text: "Learn" },
          { id: 2, text: "Teach", correct: true },
          { id: 3, text: "Study" },
        ],
      },
      {
        id: 27,
        text: "I am going to _____ a book about my life.",
        options: [
          { id: 1, text: "Draw" },
          { id: 2, text: "Write", correct: true },
          { id: 3, text: "Speak" },
        ],
      },
      {
        id: 28,
        text: "I need to _____ to my boss about my work schedule.",
        options: [
          { id: 1, text: "Write" },
          { id: 2, text: "Speak", correct: true },
          { id: 3, text: "Read" },
        ],
      },
      {
        id: 29,
        text: "I am going to _____ my old clothes at a garage sale.",
        options: [
          { id: 1, text: "Donate" },
          { id: 2, text: "Sell", correct: true },
          { id: 3, text: "Keep" },
        ],
      },
      {
        id: 30,
        text: "The company decided to _____ goods from overseas.",
        options: [
          { id: 1, text: "Import", correct: true },
          { id: 2, text: "Break" },
          { id: 3, text: "Injure" }
        ]
      },
      {
        id: 31,
        text: "I accidentally _____ my friend's vase while cleaning it.",
        options: [
          { id: 1, text: "Repair" },
          { id: 2, text: "Break", correct: true },
          { id: 3, text: "Use" },
        ],
      },
      {
        id: 32,
        text: "I _____ my ankle while playing basketball.",
        options: [
          { id: 1, text: "Fix" },
          { id: 2, text: "Injure", correct: true },
          { id: 3, text: "Rest" },
        ],
      },
      {
        id: 33,
        text: "He accidentally _____ his phone screen by dropping it on the pavement.",
        options: [
          { id: 1, text: "Damage", correct: true },
          { id: 2, text: "Cut" },
          { id: 3, text: "Steal" }
        ]
      },
      {
        id: 34,
        text: "I _____ the cake into slices.",
        options: [
          {id: 1, text: "Cut", correct: true},
          {id: 2, text: "Bake"},
          {id: 3, text: "Blend"}
        ]
      },
      {
        id: 35,
        text: "He tried to _____ the painting from the museum.",
        options: [
          { id: 1, text: "Steal", correct: true },
          { id: 2, text: "Buy" },
          { id: 3, text: "Create" }
        ]
      },
      {
        id: 36,
        text: "My cat likes to _____ the furniture.",
        options: [
          { id: 1, text: "Scratch", correct: true },
          { id: 2, text: "Clean" },
          { id: 3, text: "Build" }
        ]
      },
      {
        id: 37,
        text: "She _____ her artwork at the gallery.",
        options: [
          { id: 1, text: "Displayed", correct: true },
          { id: 2, text: "Sold" },
          { id: 3, text: "Hidden" }
        ]
      },
      {
        id: 38,
        text: "I _____ the bus this morning.",
        options: [
          { id: 1, text: "Missed", correct: true },
          { id: 2, text: "Caught" },
          { id: 3, text: "Rode" }
        ]
      },
      {
        id: 39,
        text: "Can you _____ the phone, please?",
        options: [
          { id: 1, text: "Answer", correct: true },
          { id: 2, text: "Hang up" },
          { id: 3, text: "Ignore" }
        ]
      },
      { 
        id: 40,
        text: "I would like to _____ a pizza for delivery.",
        options: [
          { id: 1, text: "Order", correct: true },
          { id: 2, text: "Make" },
          { id: 3, text: "Eat" }
        ]
      },
      {
        id: 41,
        text: "The hiker tried to _____ the mountain.",
        options: [
          { id: 1, text: "Climb", correct: true },
          { id: 2, text: "Descend" },
          { id: 3, text: "Walk" }
        ]
      },
      {
        id: 42,
        text: "She decided to _____ a salad for lunch.",
        options: [
          { id: 1, text: "Eat", correct: true },
          { id: 2, text: "Throw away" },
          { id: 3, text: "Buy" }
        ]
      },
      {
        id: 43,
        text: "I need to _____ some weight before summer.",
        options: [
          { id: 1, text: "Lose", correct: true },
          { id: 2, text: "Decorate" },
          { id: 3, text: "Go" }
        ]
      },
      {
        id: 44,
        text: "I want to _____ my living room before the guests arrive.",
        options: [
          { id: 1, text: "Decorate", correct: true },
          { id: 2, text: "Reserve" },
          { id: 3, text: "Introduce" }
        ]
      },
      {
        id: 45,
        text: "I plan to _____ to New York next month.",
        options: [
          { id: 1, text: "Go", correct: true },
          { id: 2, text: "Meet" },
          { id: 3, text: "Read" }
        ]
      },
      {
        id: 46,
        text: "I want to _____ a table at the restaurant for tomorrow night.",
        options: [
          { id: 1, text: "Reserve", correct: true },
          { id: 2, text: "Hear" },
          { id: 3, text: "Be" }
        ]
      },
      {
        id: 47,
        text: "I need to _____ myself to the new colleagues tomorrow.",
        options: [
          { id: 1, text: "Introduce", correct: true },
          { id: 2, text: "Order" },
          { id: 3, text: "Climb" }
        ]
      },
      {
        id: 48,
        text: "I want to _____ a famous novel before the end of the year.",
        options: [
          { id: 1, text: "Read", correct: true },
          { id: 2, text: "Steal" },
          { id: 3, text: "Scratch" }
        ]
      },
      {
        id: 49,
        text: "I can't _____ what you are saying, could you speak louder?",
        options: [
          { id: 1, text: "Hear", correct: true },
          { id: 2, text: "Display" },
          { id: 3, text: "Miss" }
        ]
      },
      {
        id: 50,
        text: "I am trying to _____ more patient with people.",
        options: [
          { id: 1, text: "Be", correct: true },
          { id: 2, text: "Answer" },
          { id: 3, text: "Order" }
        ]
      },
      {
        id: 51,
        text: "I can't _____ what's written on the board from here.",
        options: [
          { id: 1, text: "See", correct: true },
          { id: 2, text: "Speak" },
          { id: 3, text: "Display" }
        ]
      },
      {
        id: 52,
        text: "I want to _____ a new car before the end of the year.",
        options: [
          { id: 1, text: "Walk" },
          { id: 2, text: "Run" },
          { id: 3, text: "Buy", correct: true }
        ]
      },
      {
        id: 53,
        text: "The company decided to _____ a new office in the city center.",
        options: [
          { id: 1, text: "Build", correct: true },
          { id: 2, text: "Scratch" },
          { id: 3, text: "Injure" }
        ]
      },
      {
        id: 54,
        text: "I always wanted to _____ a plane and see the world from above.",
        options: [
          { id: 1, text: "Fly", correct: true },
          { id: 2, text: "Fall" },
          { id: 3, text: "Damage" }
        ]
      },
      {
        id: 55,
        text: "I _____ a lot about history, but I still have much to learn.",
        options: [
          { id: 1, text: "Know", correct: true },
          { id: 2, text: "Teach" },
          { id: 3, text: "Answer" }
        ]
      },
      {
        id: 56,
        text: "I need to _____ my car to the mechanic for a check-up.",
        options: [
          { id: 1, text: "Take", correct: true },
          { id: 2, text: "Steal" },
          { id: 3, text: "Reserve" }
        ]
      },
      {
        id: 57,
        text: "I have decided to _____ the party early tonight.",
        options: [
          { id: 1, text: "Leave", correct: true },
          { id: 2, text: "Fall" },
          { id: 3, text: "Decorate" }
        ]
      },
      {
        id: 58,
        text: "I almost _____ down the stairs this morning, but I managed to keep my balance.",
        options: [
          { id: 1, text: "Fall", correct: true },
          { id: 2, text: "Climb" },
          { id: 3, text: "Order" }
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