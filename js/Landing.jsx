import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";

const centeredShow = css`
  font-size: 300%;
  opacity: .9;
  color: white;
  font-family: 'Macondo Swash Caps', cursive;
`

const landingImage= css`
  background-image: url('../public/img/live/1.JPG');
`

const nextShow = css`
  font-size: 275%;
  opacity: .5;
  color: white;
  font-family: 'Macondo Swash Caps', cursive;
`
  
const Landing = () => (
  <Background className={landingImage}>
    <h1 className={nextShow}>
      Next Show:  NOWHERE
    </h1>
  </Background>
)

export default Landing;
