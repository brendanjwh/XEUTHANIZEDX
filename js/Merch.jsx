import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";


const merchImage= css`
  background-image: url('../public/img/live/euthanizedcondom.JPG');
`
const Merch = () => <Background className={merchImage} />

export default Merch;
