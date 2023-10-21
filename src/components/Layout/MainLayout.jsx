import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import Footer from "../Footer/Footer";




const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            
           <Outlet></Outlet>
           {/* <MiddelSection></MiddelSection> */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;