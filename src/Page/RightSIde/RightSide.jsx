
import { useEffect, useState } from 'react';
import Catbtn from './Catbtn';

const RightSide = () => {
    const [catagory, setCatgory] = useState([])
    useEffect(() => {
        fetch('/public/catagory.json')
            .then(res => res.json())
            .then(data => setCatgory(data));
    }, [])
    return (
        <div className=''>
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