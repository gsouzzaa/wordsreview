import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesD/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "It's seven o'clock.",
        "It's sunny.",
        "The girl is walking.",
        "The boy is running.",
        "The man is sleeping.",
        "The woman is jumping.",
        "The baby is crying.",
        "The fish is swimming.",
        "The man has a hat.",
        "The girl has a pencil.",
        "The rabbit is white.",
        "The rabbit is brown.",
        "The house is big.",
        "The house is small.",
        "The pencil is long.",
        "The pencil is short.",
        "The glass is full.",
        "The glass is empty.",
        "The book is in the bag.",
        "The cat is on the chair.",
        "The cat is under the chair.",
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