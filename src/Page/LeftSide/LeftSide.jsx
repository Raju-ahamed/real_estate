import { useEffect, useState } from 'react';
import './card.css'
import Card from './Card';
import 'aos/dist/aos.css';
import { useLoaderData, useParams } from 'react-router';

const LeftSide = () => {
    // const  estate  = useLoaderData();
    const {id} = useParams();
    console.log()
    const [catgory, setCatagory] = useState([]);
    useEffect(() => {
        fetch('/estate.json')
            .then(res => res.json())
            .then(data => {
                setCatagory(data);
            });
    }, [])
    return (
        <div className='mx-auto w-11/12 grid lg:grid-cols-3 md:grid-cols-2 gap-2 sm:justify-center text-center'>
            {
                catgory.map(data => <Card
                    key={data.card_id}
                    data={data}
                >

                </Card>)
            }
        </div>
    );
};

export default LeftSide;