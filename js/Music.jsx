import React from "react";

const Music = () => (
  <div>
    <iframe
      id="live-sessions"
      className="bandcamp"
      src="https://bandcamp.com/EmbeddedPlayer/album=4156429228/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
      seamless
    >
      <a href="http://xeuthanizedx.bandcamp.com/album/live-sessions">
        LIVE SESSIONS by XEUTHANIZEDX
      </a>
    </iframe>

    <iframe
      id="swing-on-sight"
      className="bandcamp"
      src="https://bandcamp.com/EmbeddedPlayer/album=1521845450/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
      seamless
    >
      <a href="http://xeuthanizedx.bandcamp.com/album/swing-on-sight">
        SWING ON SIGHT by XEUTHANIZEDX
      </a>
    </iframe>

    <iframe
      id="suffer"
      className="bandcamp"
      src="https://bandcamp.com/EmbeddedPlayer/album=957328478/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
      seamless
    >
      <a href="http://xeuthanizedx.bandcamp.com/album/suffer">
        SUFFER by XEUTHANIZEDX
      </a>
    </iframe>

  </div>
);

export default Music;
