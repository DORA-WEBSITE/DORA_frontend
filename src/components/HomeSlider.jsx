import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';


const HomeSlider = ()=>{

    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };

    return(
        <div className='relative w-[100vw] z-10'>
          <Slider {...settings} className='flex w-[100%] justify-center'>
                <div className='w-[50%] max-h-[300px]'>
                    <img src={img2} className='w-[100%]' alt=''/>
                </div>

                <div className='w-[100%] min-w-[550px]'>
                    <img src={img1} className='w-[100%]' alt=''/>
                </div>

                <div className='w-[50%] max-h-[300px]'>
                    <img src={img3} className=' w-[100%]' alt=''/>
                </div>
          </Slider>
        </div>
    )
}

export default HomeSlider;