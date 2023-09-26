import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import Banner from '../Banner/Banner';
// import { useLoaderData } from 'react-router-dom';
const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chefInfo')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='bg-black'>
            <h1 className='text-white text-center text-3xl py-5'>OUR CHEFS</h1>
            <div className='w-11/12 m-auto gap-3 grid md:grid-cols-3'>
            {
                chefs.map(chef => 
                <ChefCard chef={chef} key={chef.id}></ChefCard>
                )
            }
        </div></div>


    );
};

// const ChefsCard = ({ chef }) => {
// }




export default Chef;