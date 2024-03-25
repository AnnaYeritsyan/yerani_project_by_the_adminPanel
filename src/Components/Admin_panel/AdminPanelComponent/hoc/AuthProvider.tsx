import { createContext, useState } from "react";

export const AuthContext = createContext<null>(null)
const AuthProvider = ({children}:any) => {
    const [user, setUser] = useState<null>(null);

    const signin = (newUser:any, cb:any)=>{
        setUser(newUser)
        cb();
    }
    const signout=(cb:any)=>{
        setUser(null)
        cb()
    }
    const value:any = {user,signin, signout,}
    return (
         <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
};
export default AuthProvider;