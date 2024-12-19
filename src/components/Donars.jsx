import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const Donars = () => {
    const [donors, setDonors] = useState([]);

    const fetchDonors = async () => {
        try {
          const res = await axios.get('http://localhost:3000/api/donors');
          console.log(res.data); 
          setDonors(res.data);
        } catch (error) {
          console.error('Error fetching donors:', error);
        }
      };      

    useEffect(() => {
        fetchDonors();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="w-[100vw]">
            <Slider {...settings} className="flex justify-evenly flex-wrap w-[100%] mx-auto max-w-[1300px]">
                {donors.map((donor) => (
                    <div
                        className="w-[10%] max-w-[250px] bg-white shadow-lg flex flex-col justify-evenly text-center py-4 gap-4"
                        key={donor.id}
                    >
                        <div className="w-[67%] m-auto py-4">
                            <img src={donor.imageUrl} alt={donor.name || 'Donor'} className="w-[100%]" />
                        </div>
                        <div className="w-[90.1%] h-[1px] bg-[#0000003D] m-auto"></div>
                        <p className="font-family font-[500] text-[18px] leading-[25px] text-[#183059]">
                            {donor.name || 'Unnamed Donor'}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Donars;
