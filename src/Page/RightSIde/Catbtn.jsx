import { NavLink } from 'react-router';
import '../RightSIde/cat.css'


const Catbtn = ({ data, id }) => {
    return (


        <h1 className='btn bg-amber-950'>
            <NavLink to={`/catagory/${id}`} >  {data}</NavLink>
        </h1>

    );
};

export default Catbtn;