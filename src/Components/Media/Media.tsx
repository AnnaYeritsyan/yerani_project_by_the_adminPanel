import { Box } from "@mui/material";
import HeaderName from "../RepeatName";
import Slid from './Slider/Slider'

const Media =()=>{
    return(
        <Box sx={{mt:'63px'}}>
        
           <HeaderName/>
           <Box>
            {/* <Carousel/> */}
            <Slid/>
           </Box>
        </Box>
      
    )
}
export default  Media;