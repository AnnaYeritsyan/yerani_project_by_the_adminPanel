import { Paper } from '@mui/material';
import CarouselItems from '../CarouselItems';
// import CarouselModal from './Carousel-modal';

function CarouselItem( item: any) {   

    return (

        <Paper sx={{ width:'85%' , boxShadow: 'none', ml: {md:'15',xs:'7%'}, bgcolor:'primary.main' }}>
            {/* <CarouselModal/> */}
          
            {
                <>
           
                <img src={item.item.image} alt={item.item.title} width={'100%'} />
   
                  </>
            } 
             {/* <CarouselItems item = {item.item}/> 
            <h2>{item.item.title}</h2> */}
        </Paper>
    );
}

export default CarouselItem;
