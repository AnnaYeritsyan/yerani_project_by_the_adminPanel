import { useState } from 'react';
import { Paper } from '@mui/material';
import AdminEditImage from '../../AdminEdits/AdminEditImage';

function AdminCarouselItem( item: any) {   
    const [inp, setInp] = useState<boolean>(false)
  const [pic, setPic] = useState<any>(item.item.image)
// console.log(pic)

  const onChangeImage = (changeImg:any, edit:any)=>{
      // console.log(changeImg)
      setInp(edit)
      setPic(changeImg)
  }
    return (

        <Paper sx={{ width: '85%', boxShadow: 'none', ml: {md:'15',xs:'7%'}, bgcolor:'primary.main' }}>
            {/* <CarouselModal/> */}
          
            {
                <>
           {/* width={'100%'} */}
                <img src={pic} alt={pic} width={'100%'}  />
   
                  </>
            } 
             {/* <AdminItems item = {item.item}/>  */}
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

      <AdminEditImage sendPicture={pic} onChangeImg ={onChangeImage}/>

      
    </Paper>
            {/* <h2>{item.item.title}</h2> */}
        </Paper>
    );
}

export default AdminCarouselItem;
