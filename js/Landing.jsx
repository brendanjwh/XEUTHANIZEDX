import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-image-slider";
import ReactInterval from "react-interval";
import { render } from "react-dom";
import "file-loader";

// const images = [
//   "/public/img/live/1.JPG",
//   "/public/img/live/2.JPG",
//   "/public/img/live/3.JPG"
// ];

// var divStyle = {
//   className: "background-image",
//   backgroundImage: "url(" + Background + ")"
// };

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      timeout: 1000,
      enabled: false
    };
  }

  render() {
    //const { timeout, enabled, count } = this.state;
    // var imageNumber = this.state.count % 3 + 1;
    //var imageNumber = 1;
    return (
      <div className="image-div">
        <img src="{imageOne}" className="background-image" />
      </div>
    );
  }
}

export default Landing;
