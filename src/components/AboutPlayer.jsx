import React from 'react';
import { Player, BigPlayButton } from 'video-react';

export default () => {
  return (
    <Player
      playsInline
      poster="http://www.foals.co.uk//sites/g/files/g2000007121/f/201801/Foals-OGImage.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <BigPlayButton position="center" />
    </Player>
  );
};