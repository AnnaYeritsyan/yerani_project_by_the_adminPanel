import { Typography, } from "@mui/material";
import { Box } from "@mui/system"
import { useNavigate, useParams } from "react-router-dom"
import { commondFlex, flexrow } from "../style";



const ProductViews = ({ products }: any) => {
   
    const navigate = useNavigate()
    const { id } = useParams()
    let items = products.find((product: any) => product.id == id);
    const randomArrays: number[] = [];
    while (randomArrays.length < 4) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!randomArrays.includes(randomIndex)) {
            randomArrays.push(randomIndex);
        }
    }
    const randomProducts = randomArrays.map((index) => products[index]);

    const changeproductItems = (newProductId: string) => {
        navigate('/products/' + newProductId);
        window.scrollTo(0, 0);
    };
    // xs: 300, // phone
    // sm: 600, // tablets
    // md: 900, // small laptop
    // lg: 1200, // desktop
    // xl: 1536 // large screens
    return (
        <Box>
            <Box sx={{ mt: '63px',  display:'flex', flexDirection:{md:'row',xs:'column'}, justifyContent: "center", alignItems: 'center' }}>
                <img src={items.img} alt={items.name} />
                <Box sx={{ width:{md:'60%',xs:'100%'}, pl:'35px'}}>
                    <Typography variant={'h3'} component={'h1'}>{items.name}</Typography>
                    <Typography component={'span'} width="85%">{items.description}</Typography>
                </Box>
            </Box>
            <Box sx={{ ...commondFlex, alignItems: "center" }}>
                <Typography variant={'h3'} component={'h3'} textAlign='center'>YOU MAY ALSO BE INTERESTED</Typography>
                <Box sx={{ display: "flex",flexDirection:{md:'row',xs:'column'}, justifyContent: "center" }}>
                    {randomProducts.map((product, index) => (
                        <img key={index} src={product.img} alt={product.id} style={{cursor:'pointer'}} onClick={() => changeproductItems(product.id)} />
                    ))}
                </Box>
            </Box>
        </Box>

    )
}
export default ProductViews