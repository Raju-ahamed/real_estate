
import { useEffect, useState } from 'react';
import Catbtn from './Catbtn';
import { NavLink } from 'react-router';

const RightSide = () => {
    const [catagory, setCatgory] = useState([])
    useEffect(() => {
        fetch('/public/catagory.json')
            .then(res => res.json())
            .then(data => setCatgory(data));
    }, [])
    return (
        <div className='grid gap-4'>
            <h1 className='btn bg-amber-950'>
                <NavLink to='/'> All Home</NavLink>
            </h1>
            {
                catagory.map(data => <Catbtn
                    key={data.id}
                    data={data.category}
                ></Catbtn>)
            }

        </div>
    );
};

export default RightSide;