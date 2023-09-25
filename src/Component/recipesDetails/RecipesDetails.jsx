import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../RecipeCard/Recipe';

const RecipesDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>           
            {
                recipes.map(recipe =><Recipe recipe={recipe}></Recipe>)
            }
        </div>
    );
};
export default RecipesDetails;