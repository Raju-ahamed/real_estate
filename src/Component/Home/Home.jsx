import RightSide from "../../Page/RightSIde/RightSide";


const Home = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4  p-2 m-2 ">
                <RightSide></RightSide>
            </div>
            <div className=" col-span-8 border">
                left side
            </div>
        </div>
    );
};

export default Home;