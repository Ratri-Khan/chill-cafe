import React from 'react';
// import { Like } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ChefCard = ({ chef }) => {
    const { image, name, experience, recipes, like } = chef;
    console.log(chef.name);
    return (
        
        <div class="card w-96 bg-red-800  mt-5 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body text-white items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p  className='py-0'>Experience : {experience}</p>
                <p className='py-0'>Recipes : {recipes}</p>
                <p  className='py-0 inline'> <FaHeart className='inline' /> : {like}</p>
                <div class="card-actions">
                    <button class="btn bg-red-700 hover:bg-black hover:text-white text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;