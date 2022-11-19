import {Outlet} from "react-router"
import App from "../../App.js"
import Home from "../../Pages/HomePage.js";

const useAuth = () => {


}


const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Home/>;
};

export default ProtectedRoutes;