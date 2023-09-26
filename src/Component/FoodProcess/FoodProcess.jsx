import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FoodProcess = () => {
    return (
        <div className='bg-black text-white'>
            <h1 className="text-center text-4xl py-5">Our Food making process</h1>
            <div className='md:flex w-4/5 m-auto '>
                <div className="rounder  bg-success text-light d-none d-sm-block">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dA0VGEbbw4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='p-5'>
                    <h3 className="text-xl font-bold">Delicious Delights: Unleash Your Inner Chef with Mouthwatering Food Creations!</h3>
                    <p>Get ready to embark on a culinary journey filled with tantalizing flavors and exquisite dishes! Our food video brings you the perfect blend of inspiration, creativity, and culinary expertise. Join us as we explore a world of delectable recipes, secret techniques, and delightful presentations that will leave you craving for more. Whether you're a seasoned chef or a passionate food lover, our video is your ultimate guide to mastering the art of cooking and creating unforgettable dining experiences. Prepare to be amazed and get ready to indulge in a symphony of tastes that will elevate your kitchen skills to new heights. </p>
                </div>
            </div>
            <div className="w-4/5 m-auto">
                <h3 className="text-center text-4xl my-6">Food Gallery</h3>
                <div className='pb-5'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/id/1168659055/photo/various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg?b=1&s=170667a&w=0&k=20&c=LBVl0aZi-JGkcyAhLBuQaqSh_xQky1g_mfsK8s_fG30=" alt="" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/id/1127563435/photo/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-papad-dal-rice-with.jpg?s=612x612&w=0&k=20&c=Mxc-_yVMysLiCIxBo8chCrf5AkzUfQ7C2IK67-uC-K8=" alt="" className="img-fluid" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" className="img-fluid" style={{ width: '100%' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FoodProcess;