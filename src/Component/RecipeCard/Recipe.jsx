import React from 'react';
import { FaHeart } from "react-icons/fa";
import FoodMenu from '../FoodMenu/FoodMenu';

const Recipe = ({ recipe }) => {
    const { image, name, description, like, recipes, experience, recipeName,recipeImage ,ingredients} = recipe;
    console.log(recipeName);
    return (
        <div>
            <div className='flex w-4/4 bg-red-200'>
                <img src={image} alt="" className='w-2/4 h-96' />
                <div className='w-2/4 mt-5'>
                    <p className='text-4xl font-bold w-2/4 m-auto '>{name}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'><FaHeart className='inline' />{like}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'>Number Of Recipes : {recipes}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'>Experience : {experience}</p>
                    <p className='w-3/4 m-auto text-xl font-bold'> Description : {description}</p>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={recipeImage.image1} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{recipeName.name1}</h2>
                        <p>{ingredients.ingredient1}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Fevorite</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Recipe;