import React from "react";
import { StyledBtn, StyledImage, StyledImageWrapper, StyledWordsWrapper } from "./styles";
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
        { text: 'The boy is _________', image: boyrunning },
        { text: 'The ___ is _ the ___', image: catonthesofa },
        { text: 'I am ____ Australia', image: australia },
        { text: 'The ___ is ________', image: boysleeping },
        { text: 'She is ______', image: busygirl },
        { text: 'She __ ______ China', image: china },
        { text: 'She is _____', image: coldgirl },
        { text: 'He is a _____', image: cook },
        { text: 'The woman is ________', image: cooking },
        { text: 'They are ________', image: dancers },
        { text: 'He __ a ______', image: doctor },
        { text: 'The dog __ _________', image: dogrunning },
        { text: 'We are in the _____', image: familyintheyard },
        { text: 'I __ _____ France', image: france },
        { text: 'I am _____ Germany', image: german },
        { text: 'I am _______', image: hungry },
        { text: 'The boy is _________', image: jumpingA2 },
        { text: 'The ____ is __________', image: mansitting },
        { text: 'He is a _________', image: pilot },
        { text: 'She is _____', image: sheishot },
        { text: 'The _____ is _____', image: sickgirl },
        { text: 'The woman is a ______', image: singer },
        { text: 'The boy is ________', image: sleepyboy },
        { text: 'He is a ______ _______', image: soccer },
        { text: 'I am from ______', image: spain },
        { text: 'I am a _________', image: student },
        { text: 'She is _________ math', image: studyingmath },
        { text: 'She is a ________', image: teacher },
        { text: 'The girl is ________ tennis', image: tennis },
        { text: 'She is _______', image: thirsty },
        { text: 'He is _______', image: tiredboy },
        { text: 'He is _________ TV', image: watchingtv },
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
