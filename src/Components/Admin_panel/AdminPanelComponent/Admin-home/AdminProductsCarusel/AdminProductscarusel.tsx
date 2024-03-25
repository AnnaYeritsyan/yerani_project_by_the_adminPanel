import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Carousel from "react-material-ui-carousel";
// import mulberispirit from '../../accets/Img/mulberispirit.png'
// import grapespirit from '../../accets/Img/grapeSpirit.png'
// import apricotespirit from '../../accets/Img/apricotSpirit.png'
import { Link } from "react-router-dom";
import { commondFlex, commondFlexCenter, flexrow } from "../../../../style";
import { homeProduct } from "../../Admin-home/Admin-carousel/Admin-homeslider";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminProductsItem from "./AdminProductsItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AdminHomeEdit from "../AdminEdits/AdminHomeEdit";
import { useState } from "react";


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


const AdminProductscarusel = () => {
    const [txt, setTxt] = useState<string>('Products')

const [inp, setInp] = useState<boolean>(false)
const txtChange =(changeTxt:any, edit:any)=>{
    // setTxt(changeTxt)
      setInp(edit)
    setTxt(changeTxt)
    // console.log(edit)
}
const changeTxt = (e:any)=>{
    setTxt(e.target.value)
    // console.log(e.target.value)
}
    const settings = {
        display: "flex",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
            <Box sx={{width:'90%',...commondFlex,  alignItems: 'center'}}>

         
            <Typography component={"div"} sx={{ display: 'flex', ...commondFlexCenter, width: "90%",wordBreak:'break-word' }}>
                <Typography component={'span'}>
                    <Link to={'/admin_panel/products'} style={{ textDecoration: "none", color: "black" }}>
                        {txt}
                        <Typography component={'span'}><ArrowForwardIosIcon sx={{ fontSize: "11px" }} /></Typography>
                    </Link>
                </Typography>
               
                <Typography component={'div'} sx={{ borderTop: '1px solid #9E9E9E', width: '73%', ml: 2 }}></Typography>
                
            </Typography>
            <AdminHomeEdit favorite={txt} onDataChange={txtChange}/>
            </Box> 
            <Box sx={{...commondFlex,justifyContent:"center", alignItems:"center",   }}>
        
 <Box sx={{width:"80%",} }>
 {/* <AdminHomeEdit/> */}

<Slider {...settings}>
    {
        homeProduct.map((item:any) =><AdminProductsItem key={item.id} items={item} />)
    }

</Slider>

</Box>
            </Box>

        </Box>
    );
};
export default AdminProductscarusel;