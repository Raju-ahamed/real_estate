import { useContext } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import AuthContext from "../../Auth/AuthContext";

const Register = () => {
    const { userRegister } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        userRegister(email, password).then((userCredential) => {
            const user = userCredential.user;
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div>
            <NavBar> </NavBar>
            <div className=" p-5 bg-mist-800 rounded-2xl  mt-10 mx-auto lg:w-5/12 w-8/12 border-2">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input name="photo" type="text" className="input" placeholder="url" />
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />
                    <button className="btn btn-accent w-3/12 mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;