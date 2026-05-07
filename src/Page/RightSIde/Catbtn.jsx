import { NavLink } from 'react-router';
import  '../RightSIde/cat.css'


const Catbtn = ({ data }) => {
    return (


        <h1 className='btn bg-amber-950'>
            <NavLink to='/'>  {data}</NavLink>
        </h1>

    );
};

export default Catbtn;