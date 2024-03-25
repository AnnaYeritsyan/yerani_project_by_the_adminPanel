
import { Box } from "@mui/material";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminCarouselItem from "../Admin-carousel/CarouselModal/AdminCarouselItem";
import {homeslider} from './Admin-homeslider'
import { commondFlex } from "../../../../style";
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

const AdminCarousel = () => {
    
    const settings = {
        display: "flex",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <Box sx={{display: "flex",justifyContent: "space-around", bgcolor:'primary.main'}}>


            <Box sx={{ ...commondFlex, justifyContent: "space-around", width: {md:'80%',xs:'80%'}, bgcolor:'primary.main' }}>
                <Box >


                    <Slider {...settings} >
                        {
                            homeslider.map((item) => <AdminCarouselItem key={item.id} item={item} />)
                        }

                    </Slider>
                </Box>
               
            </Box>
        </Box>
    );
}

export default AdminCarousel 