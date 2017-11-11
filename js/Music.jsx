import React from "react";
import Img from "react-image";

const BackgroundImage = () => <Img src="../public/img/live/2.JPG" />;

const Music = () => (
  <div className="image-div">
    <div className="bandcamp-embed">
      <iframe
        id="live-sessions"
        className="bandcamp"
        src="https://bandcamp.com/EmbeddedPlayer/album=4156429228/size=medium/bgcol=333333/tracklist=true/linkcol=ffffff/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/live-sessions">
          LIVE SESSIONS by XEUTHANIZEDX
        </a>
      </iframe>

      <iframe
        id="swing-on-sight"
        className="bandcamp"
        src="https://bandcamp.com/EmbeddedPlayer/album=1521845450/size=medium/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/swing-on-sight">
          SWING ON SIGHT by XEUTHANIZEDX
        </a>
      </iframe>

      <iframe
        id="suffer"
        className="bandcamp"
        src="https://bandcamp.com/EmbeddedPlayer/album=957328478/size=medium/bgcol=333333/linkcol=ffffff/transparent=true/"
        seamless
      >
        <a href="http://xeuthanizedx.bandcamp.com/album/suffer">
          SUFFER by XEUTHANIZEDX
        </a>
      </iframe>
    </div>
  </div>
);

export default Music;
