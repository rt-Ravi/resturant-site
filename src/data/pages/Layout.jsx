import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";

function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;