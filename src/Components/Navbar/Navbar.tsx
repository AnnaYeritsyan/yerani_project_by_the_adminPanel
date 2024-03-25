import * as React from 'react';
import { useState } from 'react';
import { AppBar, Divider, Drawer } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box, Toolbar, List, Button } from '@mui/material';
import yeraniLogo from '../../accets/Img/logoYerani.png'
import { Link, useLocation } from 'react-router-dom'
import { styleLink } from '../style';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;


export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const name: string[] = ["Home","Products", "About us", "Media"];
  const link: string[] = ["/","/products", "/about_us", "/media"];
  const location = useLocation()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: "primary.main", boxShadow: 'none' }}>
      <Typography variant="h6" sx={{ my: 2 ,}}>
        <img src={yeraniLogo} />
      </Typography>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: "column" }}>
        {
          name.map((e: string, index: number) => {
            return (
              <Button key={index}>
                <Link to={link[index]} style={{ ...styleLink, borderBottom: location.pathname === link[index] ? '3px solid white' : '', fontWeight:'500', fontSize:'18px' }}
                >{e}</Link>
              </Button>
            )
          })
        }
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ boxShadow: "none" }} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}, pl:{lg:20,md:2} }}
          >
            <img src={yeraniLogo} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: {lg:'42%',md:1} }}>
          {
          name.map((e: string, index: number) => {
            return (
              <Button key={index}>
                <Link to={link[index]} style={{...styleLink, borderBottom: location.pathname === link[index] ? '3px solid white' : '', fontWeight:'400', fontSize:'18px' }}
                >{e}</Link>
              </Button>
            )
          })
        }
          
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "primary.main" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}
