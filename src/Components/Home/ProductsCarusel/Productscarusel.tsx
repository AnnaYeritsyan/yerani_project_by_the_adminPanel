import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import { commondFlex, commondFlexCenter, flexrow } from "../../style";
import { homeProduct } from "../Home-carousel/Homeslider";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsItem from "./ProductsItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function PreviousBtn(props: any) {
    const { className, style, onClick } = props
    return (
        <Box className={className}
           
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


const Productscarusel = () => {
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
        <Box>
            <Typography component={"div"} sx={{ display: 'flex', ...commondFlexCenter, width: "90%", }}>
                <Typography component={'span'}>
                    <Link to={'/products'} style={{ textDecoration: "none", color: "black" }}>
                        Products
                        <Typography component={'span'}><ArrowForwardIosIcon sx={{ fontSize: "11px" }} /></Typography>
                    </Link>
                </Typography>
                <Typography component={'div'} sx={{ borderTop: '1px solid #9E9E9E', width: '73%', ml: 2 }}></Typography>
            </Typography>
            <Box sx={{...commondFlex,justifyContent:"center", alignItems:"center",   }}>
        
 <Box sx={{width:"80%",} }>


<Slider {...settings}>
    {
        homeProduct.map((item:any) =><ProductsItem key={item.id} items={item} />)
    }

</Slider>
</Box>
            </Box>

        </Box>
    );
};
export default Productscarusel;