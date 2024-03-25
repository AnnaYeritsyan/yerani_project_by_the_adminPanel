import React, { useEffect, useState } from 'react';
import './App.css';
// import grape from '../../accets/Img/grapeSpirit.png';
// import apricot from '../../accets/Img/apricotSpirit.png';
// import mulberry from '../../accets/Img/mulberispirit.png';
import grape from './accets/Img/grapeSpirit.png';
import apricot from './accets/Img/apricotSpirit.png';
import mulberry from './accets/Img/mulberispirit.png';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './Components/theme'
import AboutUs from './Components/AboutUs/AboutUs';
import Products from './Components/Products/Products';
import Media from './Components/Media/Media';
import Navbar from './Components/Navbar/Navbar'
import HomeWrapper from './Components/Pages/HomeWrapper';
import ProductViews from './Components/Products/ProductViews';

import Admin_panel from './Components/Admin_panel/Admin_panel';
import Inbox from './Components/Admin_panel/AdminPanelComponent/Admin-home/AdminHome';
import AdminWrapper from './Components/Pages/AdminWrapper';
import AdminProducts from './Components/Admin_panel/AdminPanelComponent/Admin-products/Admin_products';
import AdminHome from './Components/Admin_panel/AdminPanelComponent/Admin-home/AdminHome';
import AdminAboutUs from './Components/Admin_panel/AdminPanelComponent/Admin-AboutUs/AdminAboutUs';
import Login from './Components/Admin_panel/AdminPanelComponent/Login/Login';
import RequireAuth from './Components/Admin_panel/AdminPanelComponent/hoc/RequireAuth';
import Createpost from './Components/Admin_panel/AdminPanelComponent/Createpost/Createpost';
import AuthProvider from './Components/Admin_panel/AdminPanelComponent/hoc/AuthProvider';
import { AnimatePresence } from 'framer-motion';
import PropagateLoader from 'react-spinners/PropagateLoader'
import { Box } from '@mui/material';
import { commondFlex } from './Components/style';

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])

  const products = [
    {
      id: 1,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 2,
      img: apricot,
      name: "Apricote fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 3,
      img: mulberry,
      name: "Mulberry fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 4,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 5,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 6,
      img: apricot,
      name: "Apricote fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 7,
      img: mulberry,
      name: "Mulberry fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 8,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 9,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 10,
      img: apricot,
      name: "Apricote fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 11,
      img: mulberry,
      name: "Mulberry fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 12,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 13,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 14,
      img: apricot,
      name: "Apricote fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 15,
      img: mulberry,
      name: "Mulberry fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
    {
      id: 16,
      img: grape,
      name: "Grape fruit spirit",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
       Velit officia consequat duis enim velit`
    },
  ]
  return (
    <AuthProvider>
{
  loading?<Box sx={{...commondFlex, alignItems:'center', mt:45}}> <PropagateLoader color="#6DC35E" loading={loading}  /></Box>:

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <Navbar/> */}
   
          <Routes>

            <Route path='/' element={<HomeWrapper />}>
              <Route index element={<Home />} />
              <Route path='/products'>
                <Route index element={<Products {...{ products }} />} />
                <Route path=':id' element={<ProductViews {...{ products }} />} />
              </Route>
              <Route path='about_us' element={<AboutUs />} />
              <Route path='media' element={<Media />} />
            </Route>
          </Routes>

          <Routes>
            
            <Route path='admin_panel' element={ 
            <RequireAuth>
              <AdminWrapper />    
               </RequireAuth>}>
            {/* <Route path='admin_panel' element={<Navigate to='/admin_panel_login'/>}> */}
              <Route index element={<AdminHome />} />
              <Route path='home' element={<AdminHome />} />
              <Route path='products' element={<AdminProducts />} />
              <Route path='aboutUs' element={<AdminAboutUs />} />
              <Route path='media' element={<Media />} /> 
              <Route path='posts_new' element={  <Createpost/>        }/>
            </Route>
          </Routes>
          <Routes>
            <Route path='admin_panel_login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>

        {/* <Router>
        <Route index element={<Home />} />
      </Router> */}
        {/* <Home/> */}

      </ThemeProvider>
      }
    </AuthProvider>
  );
}

export default App;
