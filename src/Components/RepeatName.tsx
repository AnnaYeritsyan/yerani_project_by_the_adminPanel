
import { Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { commondFlexCenter, flexrow } from "./style";

const name: string[] = ["Products", "About us", "Media"];
const link: string[] = ["/products", "/about_us", "/media"];

const HeaderName = () => {
  const location = useLocation();
  const currentName = name.find((_, index) => location.pathname === link[index]);

  return (
    <>
      {currentName && (
        <Typography component={'div'} sx={{...flexrow, ...commondFlexCenter, pt:'30px'}}>
          {currentName}
          <Typography component={'span'}><ArrowForwardIosIcon sx={{ fontSize: "11px", }} /></Typography>
          <Typography component={'div'} sx={{ borderTop: '1px solid #9E9E9E', width: '73%',ml:2 }}></Typography>

        </Typography>
      )}
    </>
  );
};

export default HeaderName;

