import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
import images from '../../assets/imagesA2/images'
import boyrunning from "../../assets/imagesA2/boyrunning.jpg";
import catonthesofa from "../../assets/imagesA2/catonthesofa.jpg";

class BtnWordsOrImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { text: 'The boy __ r_n___g', image: boyrunning },
        { text: 'The ___ is _ the ___', image: catonthesofa }
      ],

      selectedImage: null,
      wordSelected: ''
    };
  }

  handleClick = () => {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomImageIndex];

    const wordSelected = this.state.words.find((word) => {
      return word.image === selectedImage;
    });

    this.setState({ wordSelected, selectedImage});
  }

  render() {
    const { selectedImage, wordSelected } = this.state;

    return (
      <div>
        <StyledBtn onClick={this.handleClick}>Click here
        </StyledBtn>

        <StyledImageWrapper selectedImage={selectedImage}>
          {selectedImage && (
            <>
              <StyledImage src={selectedImage} alt="Random Image" />

              <StyledWordsWrapper>
                <p>{wordSelected?.text}</p>
              </StyledWordsWrapper>
            </>
          )}
        </StyledImageWrapper>

      </div>
    );
  }
}

export default BtnWordsOrImages;
