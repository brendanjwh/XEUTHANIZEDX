import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-image-slider";

export default React.createClass({
  render() {
    const images = [
      "/public/img/live/1.JPG",
      "/public/img/live/2.JPG",
      "/public/img/live/3.JPG",
      "/public/img/live/4.JPG",
      "/public/img/live/5.JPG",
      "/public/img/live/6.JPG",
      "/public/img/live/7.JPG",
      "/public/img/live/8.JPG",
      "/public/img/live/9.JPG",
      "/public/img/live/10.JPG",
      "/public/img/live/11.JPG",
      "/public/img/live/12.JPG",
      "/public/img/live/13.JPG",
      "/public/img/live/14.JPG",
      "/public/img/live/15.JPG",
      "/public/img/live/16.JPG",
      "/public/img/live/17.JPG",
      "/public/img/live/18.JPG",
      "/public/img/live/19.JPG",
      "/public/img/live/20.JPG",
      "/public/img/live/21.JPG"
    ];

    return (
      <Slider images={images} isInfinite delay={5000}>
        {images.map((image, key) => <div key={key}><img src={image} /></div>)}
      </Slider>
    );
  }
});

// const Landing = () => (
//   <div className="landing">
//     <h1>EUTHANIZED</h1>
//   </div>
// );
