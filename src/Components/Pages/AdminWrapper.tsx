import { Outlet } from "react-router-dom";
import AdminFooter from "../Admin_panel/AdminFooter/AdminFooter";
import Admin_panel from "../Admin_panel/Admin_panel";

        
const AdminWrapper = () => {
    return (
       <>
       <Admin_panel/>
       <Outlet/>
       <AdminFooter/>
       </>
    );
};
export default AdminWrapper;