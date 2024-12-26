import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 


import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Optional styles for navigation
import "swiper/css/pagination"; // Optional styles for pagination
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      //   onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}


      
      pagination={{ clickable: true }}
      
      
    >
      <SwiperSlide>
        <div className="card bg-base-100 image-full h-[400px] w-11/12 mx-auto shadow-xl">
          <figure>
            <img
            className="w-full bg-cover"
              src="https://i.ibb.co.com/2cp4WDD/pita-stuffed-with-chicken-tomato-lettuce.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body justify-center items-center space-y-2">
            <h2 className="card-title text-white text-3xl">Share Your Food</h2>
            <p>Connect with your community to reduce waste and spread kindness.</p>
            
            <Link to='/availableFoods'>  <button className="btn ">Go To Available</button></Link>
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="card bg-base-100 image-full h-[400px] w-11/12 mx-auto shadow-xl">
          <figure>
            <img
            className="w-full bg-cover"
              src="https://i.ibb.co.com/w4vdzK6/top-view-cooked-bell-peppers-with-different-seasonings-dark-grey-surface-food-dolma-vegetable-meal-b.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body justify-center items-center space-y-2">
            <h2 className="card-title text-white text-3xl">Share the Love, Share the Food</h2>
            <p>Join a movement to reduce food waste and feed the hungry.</p>
            
            <Link to='/availableFoods'>  <button className="btn ">Go To Available</button></Link>
           
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card bg-base-100 image-full h-[400px] w-11/12 mx-auto shadow-xl">
          <figure>
            <img
            className="w-full bg-cover"
              src="https://i.ibb.co.com/gz9PhGJ/2149141358.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body justify-center items-center space-y-2">
            <h2 className="card-title text-white text-3xl">From Your Kitchen to Your Community</h2>
            <p>Because everyone deserves a seat at the table</p>
            
            <Link to='/availableFoods'>  <button className="btn ">Go To Available</button></Link>
           
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card bg-base-100 image-full h-[400px] w-11/12 mx-auto shadow-xl">
          <figure>
            <img
            className="w-full bg-cover"
              src="https://i.ibb.co.com/qBSV44Q/front-view-meat-sauce-soup-with-greens-potatoes-dark-desk-soup-dinner-sauce-meat.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body justify-center items-center space-y-2">
            <h2 className="card-title text-white text-3xl">Food for All, Together We Can</h2>
            <p>Your food, their hope.</p>
            
            <Link to='/availableFoods'>  <button className="btn ">Go To Available</button></Link>
           
          </div>
        </div></SwiperSlide>
    </Swiper>
  );
};

export default Banner;
