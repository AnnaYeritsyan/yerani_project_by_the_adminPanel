
import { Grid } from "@mui/material";
import { Navigate, useNavigate, } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductsItem=(product:any)=>{
    const navigate = useNavigate();
  
    return(
<>
{product.product.map((e: any, index: number) => (
            <Grid item key={index} xs={6} md={3} lg={3} >
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={e.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {e.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={() => navigate('' + e.id)}>Learn More</Button>
      </CardActions>
    </Card>
              {/* <img src={e.img} alt={`product-${index}`} style={{ width: '100%',cursor:'pointer' }} onClick={() => navigate('' + e.id)}/> */}
            </Grid>
          ))}
</>
    )
}

export default ProductsItem;