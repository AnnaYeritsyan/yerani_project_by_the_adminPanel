import { Paper } from '@mui/material';

 function ProductsItem({items}:any){
    return (
        <Paper sx={{ width: '85%', boxShadow: 'none', ml: {md:'15',xs:'7%'} }}>
            {
               <img src={items?.image} alt={items?.title} width={'100%'} />
            
            }
            <h2>{items?.item?.title}</h2>
        </Paper>
    );
}

export default ProductsItem;
