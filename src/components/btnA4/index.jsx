import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesA4/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "apple",
        "bus",
        "cat",
        "dog",
        "ice",
        "jacket",
        "king",
        "lemon",
        "queen",
        "rabbit",
        "sun",
        "toy",
        "ant",
        "bat",
        "egg",
        "desk",
        "ill",
        "pond",
        "umbrella",
        "bag",
        "box",
        "cap",
        "cup",
        "dish",
        "duck",
        "fence",
        "fox",
        "hat",
        "hill",
        "milk",
        "monkey",
        "lamp",
        "letter",
        "neck",
        "nut",
        "pants",
        "pencil",
        "red",
        "river",
        "seven",
        "socks",
        "taxi",
        "ticket",
        "golf",
        "jam",
        "kitchen",
        "violin",
        "window",
        "yellow",
        "zipper",
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