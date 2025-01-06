import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [TestimonialData, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTestimonialData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/admin/GetTestimonial",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.fetchTestimonial);
        setTestimonialData(data.fetchTestimonial);
        setIsLoading(false);
      } else {
        console.error("Error fetching services data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching donors:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonialData();
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
    <div className="flex flex-col justify-center w-full md:gap-4 md:min-h-[434px] my-5 md:my-10">
      <h1 className="font-[700] text-[36px] md:text-[66px] leading-[25px] text-[#BFBFBF] heading-font text-center my-5">
        Testimonial
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg font-medium text-gray-600">Loading donors...</p>
        </div>
      ) : (
        <Slider {...settings} className="mx-auto max-w-5xl">
          {TestimonialData.map((data, index) => {
            return (
              <div
                className="flex flex-col font-family w-[40%] min-h-[160px] max-w-[450px] shadow-lg shadow-[#00000040] justify-center p-[15px] ml-[44px] my-5"
                key={data.id || data.path || index}
              >
                <div className="flex gap-[27px] min-h-[72px]">
                  <img
                    src={`http://localhost:3000/${data.path}`}
                    alt=""
                    className="w-[33%]"
                  />

                  <div className="flex flex-col">
                    <p className="text-[#183059] text-[18px] leading-[25px] font-[500]">
                      {data.name}
                    </p>
                    <p className="font-[500] text-[10px] leading-[10px] mt-[5px] text-[#848484]">
                      {data.position}
                    </p>
                    <p className="font-[500] text-[10px] leading-[10px] text-[#848484]">
                      {data.department}
                    </p>
                  </div>
                </div>

                <div className="w-[100%] h-[1px] bg-[#0000003D] mt-[12px]"></div>

                <div className="font-family text-[8px] leading-[13px] font-[500] text-[#183059CC] mt-[10px]">
                  {data.comment}
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Testimonial;
