import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from "../../assets/imagesA7/images";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "dog",
        "cat",
        "cow",
        "rabbit",
        "car",
        "bus",
        "bike",
        "truck",
        "egg",
        "milk",
        "bread",
        "butter",
        "apple",
        "lemon",
        "banana",
        "orange",
        "eye",
        "nose",
        "ear",
        "mouth",
        "hand",
        "foot",
        "hair",
        "head",
        "bed",
        "piano",
        "desk",
        "chair",
        "sofa",
        "table",
        "TV",
        "door",
        "bag",
        "cap",
        "coat",
        "shoes",
        "lion",
        "bear",
        "sheep",
        "deer",
        "sea",
        "sun",
        "star",
        "moon",
        "ship",
        "train",
        "boat",
        "plane",
        "cup",
        "fork",
        "spoon",
        "plate",
        "corn",
        "carrot",
        "potato",
        "tomato",
        "pants",
        "socks",
        "shirt",
        "skirt",
        "sky",
        "tree",
        "rain",
        "flower",
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