import React, { useEffect, useState } from 'react';

const Banner = () => {

    const [bannerInfo, setBannerInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chefInfo')
            .then(res => res.json())
            .then(data => {
                setBannerInfo(data);
                console.log(data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className="carousel w-full h-96">
            {
                bannerInfo.map((info) =>
                    <div id={`slide${parseInt(info.id)}`} className="carousel-item relative w-full">
                        <img src={info.image} className="w-2/4" />
                        <div className='text-center bg-red-200 w-2/4'>
                            <p className='font-bold text-3xl'>{info.name}</p>
                            <p className='text-xl'>Experience : {info.experience}</p>
                            <p className='text-xl'>Recipes : {info.recipes}</p>
                            <p>{info.like}</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${parseInt(info.id) - 1}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${parseInt(info.id) + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Banner;