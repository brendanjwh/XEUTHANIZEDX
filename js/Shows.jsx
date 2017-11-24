import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";

const showsImage = css`
   background-image: url('../public/img/live/4.JPG');
`

const Shows = () => <Background className={showsImage} />

export default Shows;
