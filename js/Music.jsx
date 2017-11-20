import React from "react";
import styled, {css } from "react-emotion";

import Background from "./Background";

const musicImage= css`
  background-image: url('../public/img/live/2.JPG');
`
const bandcamp = css`
  opacity: .9;
  padding-right: 10px;
  border-color: white;
  border-width: 2px;  
  margin-top: 20px;
  border: 0; 
  width: 450px; 
  height: 670px;
`

const bandcampEmbed = css`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  opacity: .8;
`
const Music = () => (
  <Background className={musicImage}>
    <div className={bandcampEmbed}>
      <iframe
        id="live-sessions"
        className={bandcamp}
        src="https://bandcamp.com/EmbeddedPlayer/album=4156429228/size=medium/bgcol=333333/tracklist=true/linkcol=ffffff/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/live-sessions">
          LIVE SESSIONS by XEUTHANIZEDX
        </a>
      </iframe>

      <iframe
        id="swing-on-sight"
        className={bandcamp}
        src="https://bandcamp.com/EmbeddedPlayer/album=1521845450/size=medium/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/swing-on-sight">
          SWING ON SIGHT by XEUTHANIZEDX
        </a>
      </iframe>

      <iframe
        id="suffer"
        className={bandcamp}
        src="https://bandcamp.com/EmbeddedPlayer/album=957328478/size=medium/bgcol=333333/linkcol=ffffff/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/suffer">
          SUFFER by XEUTHANIZEDX
        </a>
      </iframe>
    </div>
  </Background>
);

export default Music;
