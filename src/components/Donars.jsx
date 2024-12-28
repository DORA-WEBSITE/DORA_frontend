import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const Donors = () => {
    const [donors, setDonors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDonors = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/imgGet', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.photos);
                setDonors(data.photos);
                setIsLoading(false);
            } else {
                console.error("Error fetching services data");
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching donors:', error);
            setIsLoading(false);
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
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="flex justify-evenly flex-wrap w-[100vw] py-10 bg-[#F2F1F1]">
            {isLoading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-lg font-medium text-gray-600">Loading donors...</p>
                </div>
            ) : (
                <Slider {...settings} className="max-w-5xl mx-auto">
                {donors.map((donor, index) => (
                    <div 
                        key={donor.id || donor.path || index} 
                        className='w-[15%] min-h-[246.59px] max-w-[220px] border-[1px] bg-white shadow-lg flex flex-col items-center p-4'
                    >
                        <div className="w-[100%] h-[200px] overflow-hidden border-2 border-gray-200 mb-4">
                            <img
                                src={`http://localhost:3000/${donor.path}`}
                                alt={donor.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='w-[100%] bg-[#0000003D] h-[1px]'></div>
                        <p className="font-medium text-lg text-gray-700 text-center">
                            {donor.name}
                        </p>
                    </div>
                ))}
            </Slider>
            
            )}
        </div>
    );
};

export default Donors;



