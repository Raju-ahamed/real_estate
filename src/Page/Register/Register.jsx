import NavBar from "../../Component/NavBar/NavBar";

const Register = () => {
    return (
        <div>
            <NavBar> </NavBar>
            <div className=" p-5 bg-mist-800 rounded-2xl  mt-10 mx-auto lg:w-5/12 w-8/12 border-2">
                <form className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input type="text" className="input" placeholder="url" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-accent w-3/12 mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;