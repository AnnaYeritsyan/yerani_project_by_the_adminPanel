
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";


        
const RequireAuth = ({children}:any) => {
    const location = useLocation();
    const {user}:any = useAuth()

    
    if(!user){
        return <Navigate to='/admin_panel_login' state={{from:location}}/>
    }

    return children
};
export default RequireAuth;