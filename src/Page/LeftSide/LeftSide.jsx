import { useEffect, useState } from 'react';
import './card.css'
import Card from './Card';

const LeftSide = () => {
    const [catgory, setCatagory] = useState([]);
    useEffect(() => {
        fetch('/estate.json')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])
    return (
        <div className='mx-auto w-11/12 grid lg:grid-cols-3 md:grid-cols-2 gap-2 sm:justify-center text-center'>
            {
                catgory.map(data => <Card
                    key={data.id}
                    data={data}
                >

                </Card>)
            }
        </div>
    );
};

export default LeftSide;