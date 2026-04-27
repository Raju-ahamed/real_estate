import { Outlet } from "react-router";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";
import Hero from "../Component/Hero/Hero";


const Root = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <Hero></Hero>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;