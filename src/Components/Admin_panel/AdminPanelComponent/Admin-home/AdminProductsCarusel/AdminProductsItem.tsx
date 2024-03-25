import { useState } from 'react';
import { Box,ImageList,Paper } from '@mui/material';
import AdminEditImage from '../AdminEdits/AdminEditImage';
 function AdminProductsItem({items}:any){
// console.log(items)
    const [inp, setInp] = useState<boolean>(false)
    const [pic, setPic] = useState<any>(items.image)

    const onChangeImage = (changeImg:any, edit:any)=>{
        // console.log(changeImg)
        setInp(edit)
        setPic(changeImg)
    }
    return (
        <Paper sx={{ width: '85%', boxShadow: 'none', ml: {md:'15',xs:'7%'} }}>
            {
                <ImageList sx={{ width:{lg:'620px', md:'450px',sm:'450px', xs:'360px'}, height:{lg:'420px',sm:'300px', xs:'220px'}}}>

               
               <img src={pic} alt={pic} width={'100%'}  />
             </ImageList>
            }
<Box>
    <AdminEditImage sendPicture={pic} onChangeImg ={onChangeImage}  />
</Box>

        </Paper>
    );
}

export default AdminProductsItem;
