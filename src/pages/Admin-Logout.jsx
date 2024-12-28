import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import {useAuth} from '../pages/AdminPanel/store/auth'

 const AdminLogout = () => {

    const {LogoutUser} = useAuth();
    
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    return <Navigate to="/Admin" />;
};

export default AdminLogout;