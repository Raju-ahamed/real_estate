import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password).then(data => console.log(data)).catch();

    }
    return (

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
            <form onSubmit={handelLogin} className="fieldset">
                <label className="label text-white">Email</label>
                <input
                    type="email"
                    name="email"
                    className="input bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                    type="password"
                    name="password"
                    className="input bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Password"
                />
                <div>
                    <a className="link link-hover text-sm text-gray-200">Forgot password?</a>
                </div>

                <button className="btn bg-red-950 mt-4 w-full">Login</button>
            </form>
        </div>

    );
};

export default Login;