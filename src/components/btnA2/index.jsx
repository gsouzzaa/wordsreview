import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesA2/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "two cars",
        "three books",
        "a red cap",
        "a blue bird",
        "a big box",
        "a small fish",
        "a long belt",
        "a short stick",
        "a heavy bag",
        "a light table",
        "a tall tree",
        "a short boy",
        "The girl is walking.",
        "The man is running.",
        "The boy has a pencil.",
        "The woman has a cup.",
        "The chair is brown.",
        "The car is new.",
        "The dog is walking.",
        "The man is sleeping.",
        "The book is in the bag.",
        "The cat is on the chair.",
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
    const hasSelectedWord = !!wordSelected;

    return (
      <div>
        <StyledBtn onClick={this.handleClick}>Click here
        </StyledBtn>

        <StyledWordsWrapper hasSelectedWord={hasSelectedWord}>
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