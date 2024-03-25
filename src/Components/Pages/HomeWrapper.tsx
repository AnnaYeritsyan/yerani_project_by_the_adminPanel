import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar'


const HomeWrapper =()=>{
    return(
        <>
     <Navbar/>
     <Outlet/>
     <Footer/>
        </>
    )
}
export default  HomeWrapper;