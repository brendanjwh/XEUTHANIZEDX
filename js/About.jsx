import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";


const aboutImage= css`
  background-image: url('../public/img/live/2.JPG');
`
const About = () => <Background className={aboutImage} />;

export default About;
