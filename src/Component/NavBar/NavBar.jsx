import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5"; // Added IoMenu for a better look



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [navigation, setNavigation] = useState([]);

    useEffect(() => {
        const loaderData = async () => {
            const res = await fetch("/banner.json");
            const data = await res.json();
            setNavigation(data);
        };
        loaderData();
    }, []);
    const links = navigation.map(nav => (
        <li key={nav.id}>
            <a className='btn btn-ghost' href={nav.path}>{nav.data}</a>
        </li>
    ));

    return (
        <nav className='flex justify-between items-center mx-auto p-3 border-b border-b-fuchsia-950 rounded-b-xl bg-cyan-950 text-white sticky top-0 z-50'>
            <div className='flex items-center gap-2'>

                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer'>
                    {open ? <IoClose /> : <IoMenu />}
                </div>


                <ul className={`md:hidden absolute  duration-900 ease-in-out p-4 bg-cyan-950 border border-fuchsia-950 rounded-2xl w-48 
                    ${open ? 'top-16 opacity-100' : '-top-100 opacity-10'}`}>
                    {links}
                </ul>

                <h1 className='text-3xl font-bold'>
                    Real<span className='text-red-600'> Estate</span>
                </h1>
            </div>


            <ul className='md:flex hidden gap-2'>
                {links}
            </ul>

            <div className="flex gap-2 items-center">
                <img
                    className='w-10 h-10 rounded-full border-2 border-fuchsia-950'
                    src="https://via.placeholder.com/40"
                    alt="User Profile"
                />
                <button className="btn btn-info">Log in</button>
            </div>
        </nav>
    );
};

export default NavBar;