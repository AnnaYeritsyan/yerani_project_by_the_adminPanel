
import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Items from "../Carousel/Items";
import { dataDigitalImages } from './data';
import {dataDigitalVideo} from './data';
import { commondFlex } from "../../style";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function PreviousBtn(props: any) {
    const { className, style, onClick } = props
    return (
        <Box className={className}
            // style={{...style, display:'block', background:"black", borderRadius:"80%",}}
            onClick={onClick}>
            <ArrowBackIosIcon style={{ color: 'green', fontSize: '30px' }} />
        </Box>
    )
}
function NextBtn(props: any) {
    const { className, style, onClick } = props
    return (
        <Box className={className}
           
            onClick={onClick}>
            <ArrowBackIosIcon style={{ color: 'green', fontSize: '30px', rotate: '180deg' }} />
        </Box>
    )
}

const Slid = () => {

    const settings = {
        display: "flex",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{display: "flex",justifyContent: "space-around"}}>


            <Box sx={{ ...commondFlex, justifyContent: "space-around", width: {md:'80%',xs:'80%'},  }}>

                <Typography variant="h5" component={'h1'} textAlign='center'>Photos</Typography>
            
                <Box >


                    <Slider {...settings} >
                        {
                            dataDigitalImages.map((item) => <Items key={item.id} item={item} />)
                        }

                    </Slider>
                </Box>
                <Box mt={5}>
                <Typography variant="h5" component={'h1'} textAlign='center'>Videos</Typography>
                    <Slider {...settings}>
                        {
                            dataDigitalVideo.map((item) => <Items key={item.id} item={item} />)
                        }
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
}

export default Slid 