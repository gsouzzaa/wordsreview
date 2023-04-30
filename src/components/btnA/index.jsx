import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper, StyledOptionBtn } from "./styles";
import images from "../../assets/imagesA/images"
import catonthesofa from "../../assets/imagesA/catonthesofa.jpg";
import australia from "../../assets/imagesA/australia.jpg";
import boyrunning from "../../assets/imagesA/boyrunning.jpg";
import boysleeping from "../../assets/imagesA/boysleeping.jpg";
import busygirl from "../../assets/imagesA/busygirl.jpg";
import china from "../../assets/imagesA/china.jpg";
import coldgirl from "../../assets/imagesA/coldgirl.jpg";
import cook from "../../assets/imagesA/cook.jpg";
import cooking from "../../assets/imagesA/cooking.jpg";
import dancers from "../../assets/imagesA/dancers.jpg";
import doctor from "../../assets/imagesA/doctor.jpg";
import dogrunning from "../../assets/imagesA/dogrunning.jpg";
import familyintheyard from "../../assets/imagesA/familyintheyard.jpg";
import france from "../../assets/imagesA/france.jpg";
import german from "../../assets/imagesA/german.jpg";
import hungry from "../../assets/imagesA/hungry.jpg";
import jumpingA2 from "../../assets/imagesA/jumpingA2.jpg";
import mansitting from "../../assets/imagesA/mansitting.jpg";
import pilot from "../../assets/imagesA/pilot.jpg";
import sheishot from "../../assets/imagesA/sheishot.jpg";
import sickgirl from "../../assets/imagesA/sickgirl.jpg";
import singer from "../../assets/imagesA/singer.jpg";
import sleepyboy from "../../assets/imagesA/sleepyboy.jpg";
import soccer from "../../assets/imagesA/soccer.jpg";
import spain from "../../assets/imagesA/spain.jpg";
import student from "../../assets/imagesA/student.jpg";
import studyingmath from "../../assets/imagesA/studyingmath.jpg";
import teacher from "../../assets/imagesA/teacher.jpg";
import tennis from "../../assets/imagesA/tennis.jpg";
import thirsty from "../../assets/imagesA/thirsty.jpg";
import tiredboy from "../../assets/imagesA/tiredboy.jpg";
import watchingtv from "../../assets/imagesA/watchingtv.jpg";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { 
          id: 1,
          text: 'The boy is _________', image: boyrunning,
          options: [
            { id: 2, text: "running", correct: true },
            { id: 3, text: "swimming" },
            { id: 4, text: "dancing" },
          ]
        },
        { 
          id: 2,
          text: 'I am ____ Australia', image: australia,
          options: [
            { id: 2, text: "from", correct: true },
            { id: 3, text: "of" },
            { id: 4, text: "through" },
          ]
        },
        { 
          id: 3,
          text: 'She is ______', image: busygirl,
          options: [
            { id: 2, text: "busy", correct: true },
            { id: 3, text: "hungry" },
            { id: 4, text: "tired" },
          ]
        },
        { 
          id: 4,
          text: 'She __ ______ China', image: china,
          options: [
            { id: 2, text: "is from", correct: true },
            { id: 3, text: "was on" },
            { id: 4, text: "runs off" },
          ]
        },
        { 
          id: 5,
          text: 'She is _____', image: coldgirl,
          options: [
            { id: 2, text: "cold", correct: true },
            { id: 3, text: "hot" },
            { id: 4, text: "sick" },
          ]
        },
        { 
          id: 6,
          text: 'He is a _____', image: cook,
          options: [
            { id: 2, text: "cook", correct: true },
            { id: 3, text: "driver" },
            { id: 4, text: "handyman" },
          ]
        },
        { 
          id: 7,
          text: 'The woman is ________', image: cooking,
          options: [
            { id: 2, text: "cooking", correct: true },
            { id: 3, text: "sleeping" },
            { id: 4, text: "dancing" },
          ]
        },
        { 
          id: 8,
          text: 'They are ________', image: dancers,
          options: [
            { id: 2, text: "dancers", correct: true },
            { id: 3, text: "singers" },
            { id: 4, text: "pilots" },
          ]
        },
        { 
          id: 9,
          text: 'He __ a ______', image: doctor,
          options: [
            { id: 2, text: "is a doctor", correct: true },
            { id: 3, text: "was a chef" },
            { id: 4, text: "are a doctor" },
          ]
        },
        { 
          id: 10,
          text: 'The dog __ _________', image: dogrunning,
          options: [
            { id: 2, text: "is running", correct: true },
            { id: 3, text: "are running" },
            { id: 4, text: "are swimming" },
          ]
        },
        { 
          id: 11,
          text: 'We are in the _____', image: familyintheyard,
          options: [
            { id: 2, text: "living room"  },
            { id: 3, text: "yard", correct: true },
            { id: 4, text: "beach" },
          ]
        },
        { 
          id: 12,
          text: 'I __ _____ France', image: france,
          options: [
            { id: 2, text: "will be" },
            { id: 3, text: "am from", correct: true },
            { id: 4, text: "am live" },
          ]
        },
        { 
          id: 13,
          text: 'I am _____ Germany', image: german,
          options: [
            { id: 2, text: "a" },
            { id: 3, text: "from", correct: true },
            { id: 4, text: "of" },
          ]
        },
        { 
          id: 14,
          text: 'I am _______', image: hungry,
          options: [
            { id: 2, text: "sick" },
            { id: 3, text: "hungry", correct: true },
            { id: 4, text: "sleepy" },
          ]
        },
        { 
          id: 15,
          text: 'The boy is _________', image: jumpingA2,
          options: [
            { id: 2, text: "sad" },
            { id: 3, text: "jumping", correct: true },
            { id: 4, text: "dancing" },
          ]
        },
        { 
          id: 16,
          text: 'The ____ is __________', image: mansitting,
          options: [
            { id: 2, text: "man is laughing" },
            { id: 3, text: "man is sitting", correct: true },
            { id: 4, text: "man is drinking" },
          ]
        },
        { 
          id: 17,
          text: 'He is a _________', image: pilot,
          options: [
            { id: 2, text: "dancer" },
            { id: 3, text: "pilot", correct: true },
            { id: 4, text: "doctor" },
          ]
        },
        { 
          id: 18,
          text: 'She is _____', image: sheishot,
          options: [
            { id: 2, text: "thirsty" },
            { id: 3, text: "hot", correct: true },
            { id: 4, text: "cold" },
          ]
        },
        { 
          id: 19,
          text: 'The _____ is _____', image: sickgirl,
          options: [
            { id: 2, text: "boy is sick" },
            { id: 3, text: "girl is sick", correct: true },
            { id: 4, text: "girl are sick" },
          ]
        },
        { 
          id: 20,
          text: 'The woman is a ______', image: singer,
          options: [
            { id: 2, text: "doctor" },
            { id: 3, text: "singer", correct: true },
            { id: 4, text: "nurse" },
          ]
        },
        { 
          id: 21,
          text: 'The boy is ________', image: sleepyboy,
          options: [
            { id: 2, text: "scared" },
            { id: 3, text: "sick" },
            { id: 4, text: "sleepy", correct: true },
          ]
        },
        { 
          id: 22,
          text: 'He is a ______ _______', image: soccer,
          options: [
            { id: 2, text: "dancer" },
            { id: 3, text: "singer" },
            { id: 4, text: "soccer player", correct: true },
          ]
        },
        { 
          id: 23,
          text: 'I am from ______', image: spain,
          options: [
            { id: 2, text: "South America" },
            { id: 3, text: "Africa" },
            { id: 4, text: "Spain", correct: true },
          ]
        },
        { 
          id: 24,
          text: 'I am a _________', image: student,
          options: [
            { id: 2, text: "doctor" },
            { id: 3, text: "teacher" },
            { id: 4, text: "student", correct: true },
          ]
        },
        { 
          id: 25,
          text: 'She is _________ math', image: studyingmath,
          options: [
            { id: 2, text: "seeing" },
            { id: 3, text: "singing" },
            { id: 4, text: "studying", correct: true },
          ]
        },
        { 
          id: 26,
          text: 'She is a ________', image: teacher,
          options: [
            { id: 2, text: "lawyer" },
            { id: 3, text: "student" },
            { id: 4, text: "teacher", correct: true },
          ]
        },
        { 
          id: 27,
          text: 'The girl is ________ tennis', image: tennis,
          options: [
            { id: 2, text: "from" },
            { id: 3, text: "watching" },
            { id: 4, text: "playing", correct: true },
          ]
        },
        { 
          id: 28,
          text: 'She is _______', image: thirsty,
          options: [
            { id: 2, text: "happy" },
            { id: 3, text: "sad" },
            { id: 4, text: "thirsty", correct: true },
          ]
        },
        { 
          id: 29,
          text:  'He is _______', image: tiredboy,
          options: [
            { id: 2, text: "energized" },
            { id: 3, text: "lively" },
            { id: 4, text: "tired", correct: true },
          ]
        },
        { 
          id: 30,
          text: 'He is _________ TV', image: watchingtv,
          options: [
            { id: 2, text: "studying" },
            { id: 3, text: "reading" },
            { id: 4, text: "watching", correct: true },
          ]
        },
        { 
          id: 31,
          text: 'The ___ is _ the ___', image: catonthesofa,
          options: [
            { id: 2, text: "cat is in the sofa" },
            { id: 3, text: "dog is under the sofa" },
            { id: 4, text: "cat is on the sofa", correct: true },
          ]
        },
        { 
          id: 32,
          text: 'The ___ is ________', image: boysleeping,
          options: [
            { id: 2, text: "oldman is sleeping" },
            { id: 3, text: "girl is sleeping" },
            { id: 4, text: "boy is sleeping", correct: true },
          ]
        },
      ],

      selectedImage: null,
      selectedOptionId: '',
      wordSelected: '',
      answerStatus: '',

    };
  }

  handleClick = () => {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomImageIndex];

    const wordSelected = this.state.words.find((word) => {
      return word.image === selectedImage;
    });
    this.setState({ wordSelected, selectedImage, selectedOptionId: '', answerStatus: ''});
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
    const { selectedImage, wordSelected } = this.state;
    const hasSelectedWord = !!wordSelected;
  
    return (
      <div>
        <StyledBtn onClick={this.handleClick}>Click here</StyledBtn>
  
        {selectedImage && (
          <StyledImageWrapper>
            <StyledImage src={selectedImage} alt="Selected" />
          </StyledImageWrapper>
        )}
  
        <StyledWordsWrapper hasSelectedWord={hasSelectedWord}>
          {wordSelected?.text && <p>{wordSelected.text}</p>}
          {!wordSelected?.text && <p>Click the button ⬆ to start!</p>}
          </StyledWordsWrapper>
          {wordSelected.options && this.renderOptions()}
      </div>
    );
  }
}
  
  export default BtnWordsOrImages;