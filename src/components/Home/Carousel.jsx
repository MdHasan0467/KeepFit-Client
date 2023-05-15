import React from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
      dots: true,
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };



    const images = [
      {
        image: "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg",
      },
      {
        image: "https://skinnyms.com/wp-content/uploads/2014/04/Fat-Burning-and-Body-Toning-Workout-1-750x500.jpg",
      },
      {
        image: "https://blog.ifit.com/wp-content/uploads/2016/01/Intro-to-strength-trainign-2-525x300.jpg",
      },
      {
        image: "https://www.muscleandfitness.com/wp-content/uploads/2019/06/25-Minute-Workout-Chiseled-Physique.jpg?quality=86&strip=all",
      },
      {
        image: "https://mensfitnessmagazine.com.au/wp-content/uploads/2017/04/full-body-workouts.jpg",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_428995201_600x.jpg?v=1644310727",
      },
      {
        image: "https://i0.wp.com/alternativemedicine.com/wp-content/uploads/2019/07/building-muscle.jpg?fit=1000%2C667&ssl=1",
      },
    ]
 
  return (
        <div className='my-10'>
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
         {
          images?.map((img, idx) => <img key={idx} src={img?.image} className='h-52 hover:h-72 w-32 border border-base-100' alt="" />)
         }
        </Slider>
        
      </div>
  );
};

export default Carousel;
