import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import bgimage from '../../../../accets/Img/19bg.png'
import AboutUsspirit from '../../../../accets/Img/vodkacreate.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { buttonStyle, commondFlex, commondFlexCenter } from "../../../style";
import { useState } from "react";
import AdminHomeEdit from "./AdminEdits/AdminHomeEdit";
import AdminEditImage from "./AdminEdits/AdminEditImage";


const AdminAbout = () => {
    const [txt, setTxt] = useState<string>('About us')
    const [longTxt, setLongTxt] = useState<any>(`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
    consequat duis enim velit`)
    const [inp, setInp] = useState<boolean>(false)
    const [pic, setPic] = useState<any>(AboutUsspirit)


    const txtChange = (changeTxt: any, edit: any) => {
        // setTxt(changeTxt)
        setInp(edit)
        setTxt(changeTxt)
        // console.log(edit)
    }
    const longTxtChange = (lT: any, edit: any) => {
        setInp(edit)
        setLongTxt(lT)
    }
    const onChangeImage = (changeImg:any, edit:any)=>{
        // console.log(changeImg)
        setInp(edit)
        setPic(changeImg)
    }

    const theme = useTheme()
    return (
        <Box sx={{
            height: { lg: 600, md: 830, xs: 1100 },
            ...commondFlex, ...commondFlexCenter
        }}>
            <Box sx={{
                height: { lg: 500, md: 610, xs: 900 },
                width: "100%",
                backgroundImage: `url(${bgimage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                ...commondFlex,
                ...commondFlexCenter,
                justifyContent: 'flex-start'

            }}>
                <Box sx={{ width: "80%", ...commondFlex, flexDirection: { lg: 'row', md: "column", xs: 'column' }, }}>
                    <Box sx={{ ...commondFlex, justifyContent: "space-between", mr: 14, width: { lg: "50%", md: "100%", xs: '100%' } }}>

                        <Typography component={'div'} width="100%" sx={{ wordBreak: "break-word" }}>
                            <Link to="/admin_panel/about_us" style={{ display: 'flex', textDecoration: "none", color: "black" }}>
                                <Typography component={'span'} color='primary.main'>{txt}<ArrowForwardIosIcon sx={{ fontSize: "11px", color: 'primary.main' }} /></Typography>

                            </Link>
                            <AdminHomeEdit favorite={txt} onDataChange={txtChange} />
                        </Typography>

                        {longTxt}
                        <Box sx={{ mb: { lg: 12, md: 0, xs: 0 } }}>
                            {/* <Typography component={"span"}> </Typography> */}
                            <AdminHomeEdit favorite={longTxt} onDataChange={longTxtChange} />
                        </Box>
                        <Box width="80%">
                <Button variant="contained" sx={{ ...buttonStyle, margin:'48px 0px' }} href="/about_us">More</Button>
            </Box>
                    </Box>
                    <Box sx={{ display: { lg: 'flex', md: '', xs: '' }, height: { md: "500px", xs: '200px' }, width: { lg: "50%", md: "80%", xs: '100%' } }}>
                        
                        <img src={pic} alt="spirit" width='100%' height='auto' />
                        <AdminEditImage sendPicture={pic} onChangeImg ={onChangeImage}  />
                    </Box>
                </Box>

            </Box>
           

        </Box>
    );
};
export default AdminAbout;