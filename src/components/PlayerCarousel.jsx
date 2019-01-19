import React from 'react'
import { Carousel } from 'antd';
import { Player, BigPlayButton } from 'video-react';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const PlayerCarousel = () => {
  return (
    <div>
      <Carousel afterChange={onChange}>
        <Player
          playsInline
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nine_Inch_Nails_logo.svg/2000px-Nine_Inch_Nails_logo.svg.png"
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
        <Player
          playsInline
          poster="http://www.foals.co.uk//sites/g/files/g2000007121/f/201801/Foals-OGImage.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
        <Player
          playsInline
          poster="http://video-js.zencoder.com/oceans-clip.jpg"
          src="https://vjs.zencdn.net/v/oceans.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </Carousel>
    </div>
  )
}

export default PlayerCarousel