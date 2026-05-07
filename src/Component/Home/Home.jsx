import LeftSide from "../../Page/LeftSide/LeftSide";
import RightSide from "../../Page/RightSIde/RightSide";
import '../Home/Home.css'


const Home = () => {

    return (
        <div className="pt-10 bg-cyan-900 border-t-2 rounded-t-2xl">
            <h1 className="service-title-gradient text-center mb-10 p-5 text-6xl font-extrabold text-red-600">OUR SERVICE</h1>
            <div className=" grid grid-cols-12">
                <div className="col-span-3 p-2 m-2 ">
                    <RightSide></RightSide>
                </div>
                <div className=" col-span-9 border-l-2 border-dashed p-2 m-2 ">
                    <LeftSide></LeftSide>
                </div>
            </div >
        </div>

    );
};

export default Home;