import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
const Chef = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chefInfo')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
}, [])
    return (
        <div>
            {
                chefs.map(chef=><ChefsCard chef={chef}
                key={chef.id}></ChefsCard>)
            }
        </div>

        
    );
};

const ChefsCard = ({chef}) =>{
    const {image,name,experience,recipes,like} = chef;
    console.log(chef);

}




export default Chef;