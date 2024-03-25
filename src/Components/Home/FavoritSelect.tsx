import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardActionArea, CardContent, Typography, } from '@mui/material'
import { Link } from 'react-router-dom'
import bgimage from '../../accets/Img/17bgimg.png'
import apricote from '../../accets/Img/apricote.png'
import grape from '../../accets/Img/grape.png'
import mulberry from '../../accets/Img/mulberry.png'
import newHere from '../../accets/Img/newHere.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { commondFlex, commondFlexCenter, flexrow } from '../style'


function TitlebarImageList() {

    return (
        // <ImageList >
        <Box sx={{ ...commondFlex, }}>
            <Typography gutterBottom variant="h5" component="span" sx={{ width: "98%", ...commondFlex, alignItems: 'flex-start', color: "primary.main" }}>
                <Link to={'/products'} style={{ textDecoration: "none", }}>
                    <Typography component={'span'} color='primary.main' sx={{ ml: { md: 0, xs: 1 } }}>
                        Choose your favorite  </Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: "11px", color: "primary.main" }} />
                </Link>
            </Typography>
            <Box>

            </Box>
            <Box sx={{ ...flexrow }}>

                <ImageList key="Subheader" sx={{
                    ...flexrow, width: { sm: '100%', xs: '97%' }, height: { lg: '200px', md: '200px', sm: "100%", xs: "420px" }, flexWrap: { md: "nowrap", sm: "wrap", xs: "wrap" }, justifyContent: { sm: 'center', xs: 'center' },
                    transition: '2s'
                }}

                >
                    {itemData.map((item: any, index: number) => (
                        <ImageListItem key={item.img} sx={{

                            height: '104px',
                            '& .MuiImageListItem-img': {
                                height: '200px',

                            }
                        }}>
                            <img

                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                height="104px"
                            />

                            <ImageListItemBar className='favoriteHover'
                                sx={{ display: "flex", flexDirection: "column-reverse", bgcolor: 'rgba(0, 0, 0, 0)', height: "100%", padding: 0 }}
                                actionIcon={
                                    <IconButton sx={{ height: "200px", ...commondFlex, justifyContent: "flex-end", alignItems: "flex-start", }}>
                                        {index === itemData.length - 1 ? <Typography sx={{
                                            color: "white", ...commondFlex,
                                            alignItems: 'flex-start', height: '105px', justifyContent: 'space-between'
                                        }}>
                                            <Typography>NEW HERE?</Typography>
                                            <Typography sx={{ textAlign: "left" }}>
                                                Build your way, find the right wine for you!  </Typography> </Typography> : null}
                                        <Typography sx={{ border: `2px solid ${item.color}`, width: '48px', borderRadius: '61px' }}></Typography>
                                        <Typography sx={{ color: "white", fontWeight: '590' }}>{index === itemData.length - 1 ? <Typography>&nbsp;</Typography> : item.title}</Typography>
                                    </IconButton>
                                }
                            />

                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: apricote,
        title: 'Apricot vodka',
        color: "#FFECB3"
    },
    {
        img: grape,
        title: 'Grape vodka',
        color: "#6DC35E"
    },
    {
        img: mulberry,
        title: 'Mulberry vodka',
        color: "#5C221ED9"

    },
    {
        img: newHere,
        title: '',
        color: "#D9D9D9"
    },

];


const FavoriteSelect = () => {
    const [animated, setAnimated] = useState()

    return (
        <Box sx={{
            height: { lg: 370, md: 610, xs: 700 },
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            ...commondFlex,
            ...commondFlexCenter
        }} >
            <Box sx={{
                width: "99%", ...commondFlex, justifyContent: "space-between", alignItems: "center",
            }} className='animation'>

                <TitlebarImageList />
            </Box>
        </Box>
    );
};
export default FavoriteSelect;