import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import bgimage from '../../accets/Img/19bg.png'
import AboutUsspirit from '../../accets/Img/vodkacreate.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { buttonStyle, commondFlex, commondFlexCenter } from "../style";
const About = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            height: { lg: 600, md: 830, xs: 830 },
            ...commondFlex, ...commondFlexCenter
        }}>
            <Box sx={{
                height: { lg: 500, md: 610, xs: 700 },
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

                        <Typography component={'div'} width="87px">
                            <Link to="/about_us" style={{ display: 'flex', textDecoration: "none", color: "black" }}>
                                <Typography component={'span'} color='primary.main'>About us</Typography>
                                <Typography component={'span'}><ArrowForwardIosIcon sx={{ fontSize: "11px", color: 'primary.main' }} /></Typography>
                            </Link>
                        </Typography>
                        <Box sx={{ mb: { lg: 12, md: 0, xs: 0 } }}>
                            <Typography component={"span"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: 'flex', md: '', xs: '' }, height: { md: "500px", xs: '200px' }, width: { lg: "50%", md: "80%", xs: '100%' } }}>
                        {/*  */}
                        <img src={AboutUsspirit} alt="spirit" width='100%' height='auto' />
                    </Box>
                </Box>

            </Box>
            <Box width="80%">
                <Button variant="contained" sx={{ ...buttonStyle }} href="/about_us">More</Button>
            </Box>

        </Box>
    );
};
export default About;