import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./AdminPanelComponent/Admin-home/AdminHome";
import { useNavigate } from "react-router-dom";
import Sidebar_admin from "./AdminPanelComponent/Sidebar_Admin/Sidebar_admin";

        const Admin_panel = () => { 
          
            const adminLink = [{
                name:'Home',
              address:'home'
            },{
                name:'Products',
                address:'products'
            },
            {
                name:'About Us',
                address:'aboutUs'
   
            },
            {
                name:'Media',
                address:'media'

            },
          
        ]
    return (
    <>
  
<Sidebar_admin adminLink={adminLink}/>
    </>
    );
};
export default Admin_panel;