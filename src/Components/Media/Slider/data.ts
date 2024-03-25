import React from 'react'
import image1 from '../../../accets/Img/aboutUsImg/grapeblack.png';
import image2 from '../../../accets/Img/aboutUsImg/grapered.png';
import image3 from '../../../accets/Img/aboutUsImg/grapeyard.png';
import image4 from '../../../accets/Img/aboutUsImg/park.png';
import image5 from '../../../accets/Img/aboutUsImg/grapeblack.png';
import image6 from '../../../accets/Img/aboutUsImg/grapered.png';
import image7 from '../../../accets/Img/aboutUsImg/grapeyard.png';
import image8 from '../../../accets/Img/aboutUsImg/park.png';

import grapePark from '../../../accets/Img/video/grape.mp4';
import grape1 from '../../../accets/Img/video/grape1.mp4';
import grape2 from '../../../accets/Img/video/grape2.mp4';
import vodka from '../../../accets/Img/video/vodkaCreate.mp4';
import whiteGrape from '../../../accets/Img/video/whiteGrape.mp4';
import cupVodka from '../../../accets/Img/video/cupVodka.mp4';
import wine from '../../../accets/Img/video/wine.mp4';
import apricot from '../../../accets/Img/video/apricote.mp4';

let image = [ image1, image2,image3,image4,image5,image6,image7,image8,]
let titleImage=[ 'black grape', 'black grape', "vodka","whiteGrape", "cupVodka","wine", "apricot", "grapePark",]
let video = [ grape1, grape2, vodka,whiteGrape, cupVodka,wine, apricot,grapePark,]
let title=[ 'black grape', 'black grape', "vodka","whiteGrape", "cupVodka","wine", "apricot", "grapePark",]

export const dataDigitalVideo = video.map((videoUrl, index) => ({
    id: index + 1,
    title: title[index],
    url:videoUrl,
  }));
  export const dataDigitalImages = image.map((imageUrl, index) => ({
    "id": index + 1,
    "title": titleImage[index],
    "image":imageUrl,
  }));

