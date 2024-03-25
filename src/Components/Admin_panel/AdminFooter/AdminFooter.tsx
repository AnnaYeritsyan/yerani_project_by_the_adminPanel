import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import logo from '../../../accets/Img/logoYerani.png';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { styleLink } from "../../style";

export default function AdminFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0.5} sx={{ width: '100%', flexWrap:{md:'nowrap',xs:'wrap'} }}>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
           
            <img src={logo} alt="logoYerani" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            
            <Typography variant="h6" gutterBottom sx={{ color: 'white', textAlign:"center"}}>
              Navigation
            </Typography>
            <Typography variant="body2" textAlign="center">
              <Link to={'/'} style={{ ...styleLink }}> Home</Link>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <Link to={'/products'} style={{ ...styleLink }}> Products</Link>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <Link to={'/about_us'} style={{ ...styleLink }}> About Us</Link>
            </Typography>
            <Typography variant="body2" color="white" textAlign="center">
              <Link to={'/media'} style={{ ...styleLink }} > Media</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            {/* Contact Us */}
            <Typography variant="h6" color="white" textAlign="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2"textAlign="center" color="white">
              <LocationOnOutlinedIcon sx={{ fontSize: "15px", ...styleLink }} /> Armenia, Ararat d., 0712 Lanjazat village, Mashtots str. 141
            </Typography>
            <Typography variant="body2" textAlign="center" sx={{ ...styleLink }}>
              <LocalPhoneOutlinedIcon sx={{ fontSize: "15px", ...styleLink }} /> +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Follow Us */}
            <Typography variant="h6" textAlign="center" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Typography textAlign="center" component={'div'}>

           
            <Link to={"https://www.facebook.com/"} style={{ ...styleLink }}>
              <Facebook />
            </Link>
            <Link to={"https://www.instagram.com/"} style={{ ...styleLink }}>
              <Instagram />
            </Link>
             </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" to={"https://your-website.com/"} style={{ ...styleLink }}>
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
