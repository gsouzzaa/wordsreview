import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper, StyledOptionBtn } from "./styles";

import images from "../../assets/imagesC/images";
import letsplaysoccer from "../../assets/imagesC/letsplaysoccer.jpg"
import closingbox from "../../assets/imagesC/closingbox.jpg"
import coldoutside from "../../assets/imagesC/coldoutside.jpg"
import cutapple from "../../assets/imagesC/cutapple.jpg"
import dogrunning from "../../assets/imagesC/dogrunning.jpg"
import eatingcake from "../../assets/imagesC/eatingcake.jpg"
import girljumping from "../../assets/imagesC/girljumping.jpg"
import happy from "../../assets/imagesC/happy.jpg"
import kick from "../../assets/imagesC/kick.jpg"
import openingbox from "../../assets/imagesC/openingbox.jpg"
import rainingoutside from "../../assets/imagesC/rainingoutside.jpg"
import sitonthebench from "../../assets/imagesC/sitonthebench.jpg"
import smellsbad from "../../assets/imagesC/smellsbad.jpg"
import soccerplayers from "../../assets/imagesC/soccerplayers.jpg"
import tastesgood from "../../assets/imagesC/tastesgood.jpg"
import theyrunning from "../../assets/imagesC/theyrunning.jpg"
import thirsty from "../../assets/imagesC/thirsty.jpg"
import thhrow from "../../assets/imagesC/thhrow.jpg"
import washapple from "../../assets/imagesC/washapple.jpg"
import wearingaraincoat from "../../assets/imagesC/wearingaraincoat.jpg"
import windyoutside from "../../assets/imagesC/windyoutside.jpg"
import canadian from "../../assets/imagesC/canadian.jpg"
import eatingbread from "../../assets/imagesC/eatingbread.jpg"
import eatingrice from "../../assets/imagesC/eatingrice.jpg"
import english from "../../assets/imagesC/english.jpg"
import getsup from "../../assets/imagesC/getsup.jpg"
import gotoschool from "../../assets/imagesC/gotoschool.jpg"
import likescience from "../../assets/imagesC/likescience.jpg"
import mathteacher from "../../assets/imagesC/mathteacher.jpg"
import moneybag from "../../assets/imagesC/moneybag.jpg"
import openthedoor from "../../assets/imagesC/openthedoor.jpg"
import readnovels from "../../assets/imagesC/readnovels.jpg"
import runninginthepark from "../../assets/imagesC/runninginthepark.jpg"
import scienceteacher from "../../assets/imagesC/scienceteacher.jpg"
import inthelibrary from "../../assets/imagesC/inthelibrary.jpg"

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { 
          id: 1,
          text: 'Lets _____ soccer', image: letsplaysoccer,
          options: [
            { id: 2, text: "play", correct: true },
            { id: 3, text: "run" },
            { id: 4, text: "goal" },
          ]
        },
        { 
          id: 2,
          text: 'The woman is ________ the box', image: closingbox,
          options: [
            { id: 2, text: "closing", correct: true },
            { id: 3, text: "breaking" },
            { id: 4, text: "cutting" },
          ]
        },
        { 
          id: 3,
          text: "It's ______ outside", image: coldoutside,
          options: [
            { id: 2, text: "cold", correct: true },
            { id: 3, text: "hot" },
            { id: 4, text: "warm" },
          ]
        },
        { 
          id: 4,
          text: '_____ the apple', image: cutapple,
          options: [
            { id: 2, text: "cut", correct: true },
            { id: 3, text: "wash" },
            { id: 4, text: "roll" },
          ]
        },
        { 
          id: 5,
          text: 'The dog is _______', image: dogrunning,
          options: [
            { id: 2, text: "running", correct: true },
            { id: 3, text: "sleeping" },
            { id: 4, text: "swimming" },
          ]
        },
        { 
          id: 6,
          text: 'The boy is ______ the cake', image: eatingcake,
          options: [
            { id: 2, text: "eating", correct: true },
            { id: 3, text: "baking" },
            { id: 4, text: "cooking" },
          ]
        },
        { 
          id: 7,
          text: 'The girl is ________', image: girljumping,
          options: [
            { id: 2, text: "jumping", correct: true },
            { id: 3, text: "crying" },
            { id: 4, text: "screaming" },
          ]
        },
        { 
          id: 8,
          text: 'He is _______', image: happy,
          options: [
            { id: 2, text: "happy", correct: true },
            { id: 3, text: "sad" },
            { id: 4, text: "tired" },
          ]
        },
        { 
          id: 9,
          text: '_______ the ball', image: kick,
          options: [
            { id: 2, text: "kick", correct: true },
            { id: 3, text: "hold" },
            { id: 4, text: "pop" },
          ]
        },
        { 
          id: 10,
          text: 'The boy is __________ the box', image: openingbox,
          options: [
            { id: 2, text: "opening", correct: true },
            { id: 3, text: "cutting" },
            { id: 4, text: "beating" },
          ]
        },
        { 
          id: 11,
          text: "It's ________ outside", image: rainingoutside,
          options: [
            { id: 2, text: "sunny" },
            { id: 3, text: "raining", correct: true },
            { id: 4, text: "hot" },
          ]
        },
        { 
          id: 12,
          text: 'The man is ________ on the bench', image: sitonthebench,
          options: [
            { id: 2, text: "crying" },
            { id: 3, text: "sitting", correct: true },
            { id: 4, text: "singing" },
          ]
        },
        { 
          id: 13,
          text: 'This ________ really bad', image: smellsbad,
          options: [
            { id: 2, text: "tastes" },
            { id: 3, text: "smells", correct: true },
            { id: 4, text: "sounds" },
          ]
        },
        { 
          id: 14,
          text: 'We are ______ players', image: soccerplayers,
          options: [
            { id: 2, text: "tennis" },
            { id: 3, text: "soccer", correct: true },
            { id: 4, text: "kart" },
          ]
        },
        { 
          id: 15,
          text: 'These cookies ______ good', image: tastesgood,
          options: [
            { id: 2, text: "throw" },
            { id: 3, text: "taste", correct: true },
            { id: 4, text: "there" },
          ]
        },
        { 
          id: 16,
          text: 'They ____ __________', image: theyrunning,
          options: [
            { id: 2, text: "is running" },
            { id: 3, text: "are running", correct: true },
            { id: 4, text: "is swimming" },
          ]
        },
        { 
          id: 17,
          text: '______ the ball', image: thhrow,
          options: [
            { id: 2, text: "kick" },
            { id: 3, text: "throw", correct: true },
            { id: 4, text: "pop" },
          ]
        },
        { 
          id: 18,
          text: 'She ___ ________', image: thirsty,
          options: [
            { id: 2, text: "are thirsty" },
            { id: 3, text: "is thirsty", correct: true },
            { id: 4, text: "is full" },
          ]
        },
        { 
          id: 19,
          text: '______ the apple', image: washapple,
          options: [
            { id: 2, text: "cut" },
            { id: 3, text: "wash", correct: true },
            { id: 4, text: "throw" },
          ]
        },
        { 
          id: 20,
          text: 'The boy is __________ a raincoat', image: wearingaraincoat,
          options: [
            { id: 2, text: "taking" },
            { id: 3, text: "wearing", correct: true },
            { id: 4, text: "tasting" },
          ]
        },
        { 
          id: 21,
          text: "It's _______ outside", image: windyoutside,
          options: [
            { id: 2, text: "hot" },
            { id: 3, text: "raining" },
            { id: 4, text: "windy", correct: true },
          ]
        },
        { 
          id: 22,
          text: 'He ______ in England, UK ', image: english,
          options: [
            { id: 2, text: "cries" },
            { id: 3, text: "runs" },
            { id: 4, text: "lives", correct: true },
          ]
        },
        { 
          id: 23,
          text: 'She lives in _________', image: canadian,
          options: [
            { id: 2, text: "UK" },
            { id: 3, text: "Brazil" },
            { id: 4, text: "Canada", correct: true },
          ]
        },
        { 
          id: 24,
          text: 'He ______ up at 7:10', image: getsup,
          options: [
            { id: 2, text: "goes" },
            { id: 3, text: "rolls" },
            { id: 4, text: "gets", correct: true },
          ]
        },
        { 
          id: 25,
          text: 'They go to school __ _______ _ _______', image: gotoschool,
          options: [
            { id: 2, text: "on seven o'clock" },
            { id: 3, text: "in seven o'clock" },
            { id: 4, text: "at seven o'clock", correct: true },
          ]
        },
        { 
          id: 26,
          text: 'I like ________', image: likescience,
          options: [
            { id: 2, text: "biology" },
            { id: 3, text: "portuguese" },
            { id: 4, text: "science", correct: true },
          ]
        },
        { 
          id: 27,
          text: 'He _________ math', image: mathteacher,
          options: [
            { id: 2, text: "learning" },
            { id: 3, text: "learns" },
            { id: 4, text: "teaches", correct: true },
          ]
        },
        { 
          id: 28,
          text: 'He _____ a moneybag', image: moneybag,
          options: [
            { id: 2, text: "is" },
            { id: 3, text: "have" },
            { id: 4, text: "has", correct: true },
          ]
        },
        { 
          id: 29,
          text: '_______ the door', image: openthedoor,
          options: [
            { id: 2, text: "Hit" },
            { id: 3, text: "Break" },
            { id: 4, text: "Open", correct: true },
          ]
        },
        { 
          id: 30,
          text: 'I _____ novels', image: readnovels,
          options: [
            { id: 2, text: "am" },
            { id: 3, text: "don't" },
            { id: 4, text: "read", correct: true },
          ]
        },
        { 
          id: 31,
          text: 'They are _______ in the park', image: runninginthepark,
          options: [
            { id: 2, text: "swimming" },
            { id: 3, text: "dancing" },
            { id: 4, text: "running", correct: true },
          ]
        },
        { 
          id: 32,
          text: 'She is a _________ teacher', image: scienceteacher,
          options: [
            { id: 2, text: "english" },
            { id: 3, text: "math" },
            { id: 4, text: "science", correct: true },
          ]
        },
        { 
          id: 33,
          text: 'We are _________ in the library', image: inthelibrary,
          options: [
            { id: 2, text: "sleeping" },
            { id: 3, text: "running" },
            { id: 4, text: "studying", correct: true },
          ]
        },
        { 
          id: 34,
          text: 'The boy is eating ______', image: eatingbread,
          options: [
            { id: 2, text: "beans" },
            { id: 3, text: "rice" },
            { id: 4, text: "bread", correct: true },
          ]
        },
        { 
          id: 35,
          text: 'The girl is eating ______', image: eatingrice,
          options: [
            { id: 2, text: "chicken" },
            { id: 3, text: "beans" },
            { id: 4, text: "rice", correct: true },
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