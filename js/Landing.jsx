import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";


const landingImage= css`
  background-image: url('../public/img/live/1.JPG');
`
  
const Landing = () => <Background className={landingImage} />;

export default Landing;
