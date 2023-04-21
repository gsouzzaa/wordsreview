import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesD/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "doll",
        "ball",
        "grass",
        "glasses",
        "fish",
        "dish",
        "bench",
        "watch",
        "duck",
        "neck",
        "phone",
        "photo",
        "king",
        "ring",
        "mouth",
        "father",
        "bread",
        "bridge",
        "dress",
        "drive",
        "clock",
        "cloud",
        "plane",
        "star",
        "cake",
        "face",
        "five",
        "nose",
        "ball",
        "salt",
        "computer",
        "pull",
        "bee",
        "tree",
        "rain",
        "train",
        "coat",
        "boat",
        "mouse",
        "house",
        "moon",
        "spoon",
        "cook",
        "book",
        "sea",
        "tea",
        "head",
        "heavy",
        "cow",
        "flower",
        "snow",
        "crow",
        "play",
        "crayon",
        "key",
        "monkey",
        "arm",
        "card",
        "tiger",
        "water",
        "girl",
        "shirt",
        "short",
        "nurse",
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