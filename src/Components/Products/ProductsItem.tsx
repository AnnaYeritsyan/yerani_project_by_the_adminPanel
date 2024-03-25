
import { Grid } from "@mui/material";
import { Navigate, useNavigate, } from "react-router-dom";



const ProductsItem=(product:any)=>{
    const navigate = useNavigate();
  
    return(
<>
{product.product.map((e: any, index: number) => (
            <Grid item key={index} xs={6} md={3} lg={3}>
              <img src={e.img} alt={`product-${index}`} style={{ width: '100%',cursor:'pointer' }} onClick={() => navigate('' + e.id)}/>
            </Grid>
          ))}
</>
    )
}

export default ProductsItem;