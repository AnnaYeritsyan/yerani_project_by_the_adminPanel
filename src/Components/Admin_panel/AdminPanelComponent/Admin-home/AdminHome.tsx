import { Box } from "@mui/material";
import AdminCarousel from "./Admin-carousel/Admin-carousel";
import AdminFavoriteSelect from "./AdminFavoritSelect";
import AdminContactUs from "./AdminContactUs";
import AdminProductscarusel from "./AdminProductsCarusel/AdminProductscarusel";
import AdminAbout from "./AdminAbout";


const AdminHome = () => {


    return (

        <Box >
            <AdminCarousel />
            <AdminFavoriteSelect />
            <AdminProductscarusel />
            <AdminAbout />
            <AdminContactUs />
        </Box>

    );
};
export default AdminHome;




