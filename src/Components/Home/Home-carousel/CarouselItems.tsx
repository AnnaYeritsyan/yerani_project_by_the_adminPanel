import { Box, Button, colors, Paper, useMediaQuery, useTheme } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from 'react-router-dom'
// import CarouselModal from './CarouselModal/Carousel-modal';
import { useState } from 'react';
interface ItemsProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
}

function CarouselItems({ item }: ItemsProps) {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const newproducts = (item: number) => {
    if (item === 1) {
      navigate('/products');
    }
 
  };

  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isXs = useMediaQuery(theme.breakpoints.up('xs'));


  const getHeight = () => {
    if (isXl) {
      return '460px';
    }
    if (isLg) {
      return '450px';
    }
    if (isMd) {
      return '400px';
    }
    if (isSm) {
      return '350px';
    }
    if (isXs) {
      return '220px';
    }
    return '100%';
  };

  const carouselModal = () => {
    open ? setOpen(false) : setOpen(true)
  }

  let imageList: any[] = []; 
  // item.map((e:any)=>{
  //   imageList.push(e.image);
  // })


  // console.log(item.image)
  return (
    <Paper
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: 'none',
        boxShadow: 'none',
        mt: { xs: '7%', lg: '0%' }
      }}
    >
       <img
        src={item.image}
        height={getHeight()}
        onClick={() => newproducts(item.id)}
        style={{ cursor: 'pointer', width:'100%' }}
      />
      
    </Paper>
  );
}

export default CarouselItems;
