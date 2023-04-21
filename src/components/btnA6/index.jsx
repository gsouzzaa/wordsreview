import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesD/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "red",
        "blue",
        "yellow",
        "pink",
        "green",
        "brown",
        "black",
        "white",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "one dog",
        "three ducks",
        "six balls",
        "ten eggs",
        "a red umbrella",
        "a blue bird",
        "a green pencil",
        "a pink dress",
        "a big box",
        "a small box",
        "a long pencil",
        "a short pencil",
        "a tall tree",
        "a short tree",
        "a new cup",
        "an old cup",
        "a heavy bag",
        "a light bag",
        "a thick book",
        "a thin book",
        "a fast car",
        "a slow car",
        "left hand",
        "right hand",
      ],

      selectedImage: null,
      wordSelected: ''

    };
  }

  handleClick = () => {
    const { words } = this.state;
    const randomIndex = Math.floor(Math.random() * words.length);
    const wordSelected = words[randomIndex];

    const randomImageIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomImageIndex];

    const isImage = Math.random() >= 0.5;

    this.setState({ wordSelected: isImage ? '' : wordSelected, selectedImage: isImage ? selectedImage : null });
  }

  render() {
    const { selectedImage, wordSelected } = this.state;

    return (
      <div>
        <StyledBtn onClick={this.handleClick}>Click here
        </StyledBtn>

        <StyledWordsWrapper>
        {wordSelected && <p>{wordSelected}</p>}
        </StyledWordsWrapper>

        <StyledImageWrapper >
        {selectedImage && <StyledImage src={selectedImage} alt="Random Image" />}
        </StyledImageWrapper>
      </div>
    );
  }
}

export default BtnWordsOrImages;