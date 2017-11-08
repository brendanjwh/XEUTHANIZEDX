import React from "react";
import Img from "react-image";

const BackgroundImage = () => <Img src="../public/img/live/1.JPG" />;

class Landing extends React.Component {
  render() {
    return (
      <div className="image-div">
        <BackgroundImage />
      </div>
    );
  }
}

export default Landing;
