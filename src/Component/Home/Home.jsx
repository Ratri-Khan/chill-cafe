import React from 'react';
import Chef from '../Chef/Chef';
import Banner from '../Banner/Banner';
import FoodProcess from '../FoodProcess/FoodProcess';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <Chef></Chef>
            <FoodProcess></FoodProcess>
        </div>
    );
};

export default Home;