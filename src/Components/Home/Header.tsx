import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import CarouselHome from '../Home/Home-carousel/Carousel'
import { commondFlex, styleLink } from "../style";

const Header = () => {


    return (
        <>
            <Navbar />
            <Box bgcolor={'primary.main'} sx={{ height: { sm: '656px', xs: "458px" }, width: "100%", ...commondFlex, alignItems: "center" }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Box width={{ md: '90%', xs: '90%' }} sx={{ height: { lg: '180px', md: '160px', sm: '200px', xs: '250px' } }}>
                        <CarouselHome />
                    </Box>
                </Box>
            </Box>

        </>
    );
};
export default Header;