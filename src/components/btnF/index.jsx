import React from "react";
import images from "../../assets/imagesD/images";
import {StyledBtnImages, StyledImage, StyledImageWrapper} from './styles';

class BtnImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedImage: null,
      };

      this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      this.setState({ selectedImage });
    }

    render() {
      const { selectedImage } = this.state;
    
      return (
        <div>
          <StyledBtnImages onClick={this.handleClick}>Click here</StyledBtnImages>

          <StyledImageWrapper>
          {selectedImage &&
          <StyledImage
          src={selectedImage} 
          alt="Random Image" />
          }
          </StyledImageWrapper>
        </div>
      );
    }
  }

export default BtnImages;