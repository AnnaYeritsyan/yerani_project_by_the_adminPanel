import React from "react";
import Header from "./Header";
import About from "./About";
import FavoriteSelect from "./FavoritSelect";
import Productscarusel from "./ProductsCarusel/Productscarusel";
import ContactUs from "./ContactUs";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Header />
                <FavoriteSelect />
                <Productscarusel />
                <About />
                <ContactUs />
            </Box>
        </>

    );
};
export default Home;