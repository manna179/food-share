import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 


import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Optional styles for navigation
import "swiper/css/pagination"; // Optional styles for pagination

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
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-center space-y-2">
            <h2 className="card-title">Share Your Food</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
              <button className="btn w-24 ">Buy Now</button>
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Banner;
