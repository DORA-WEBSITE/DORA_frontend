import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import mainbuilding from "../assets/images/mainbuilding .png";
import design from "../assets/images/design.png";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import Givingback from "../components/Givingback";
import thompson from "../assets/images/thompson.png";
import Linksbox from "../components/Linksbox";
import Testimonial from "../components/Testimonial";
import HomeSlider from "../components/HomeSlider";
import Donars from "../components/Donars";

const Home = () => {
  const [Events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/admin/GetEvents",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.Events);
        setEvents(data.Events);
      } else {
        console.error("Error fetching services data");
      }
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
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
    <div className="overflow-hidden">
      <div className="flex flex-col relative justify-center items-center mt-[54px]">
        {/* <div className='flex flex-col relative justify-center items-center h-screen'> */}

        <img
          src={mainbuilding}
          alt="mainbuilding"
          className="w-screen md:block hidden md:h-[390px] lg:h-[504px]"
        />

        <div className="hidden md:absolute md:w-full md:h-[390px] lg:h-[504px] md:bg-[#0B0B0B] md:opacity-[69%] md:flex md:flex-col md:justify-center md:items-center">
          <span className="text-[#FFFFFF] font-[600] text-[24px] leading-[55px] z-10">
            WELCOME TO
          </span>
          <span className="text-[#FFFFFF] font-[800] text-[50px] leading-[55px] z-10">
            DORA OFFICE
          </span>
        </div>

        <div className="absolute top-[4px] md:top-[390px] lg:top-[504px]">
          <HomeSlider />
        </div>
      </div>

      <div className="flex flex-col md:flex-row relative justify-between flex-wrap w-[100vw]">
        <div className="flex flex-col gap-4 relative md:static mt-[236px] md:mt-[420px] w-[55%] md:px-[7%] min-w-[500px] z-10 max-w-[1000px]">
          <div className="md:hidden relative bg-[#E2E2E270] w-[100vw]">
            <div className="absolute -z-20 right-[0] w-[60%] max-w-[1280px]">
              <img src={design} alt="" className="w-[100%]" />
            </div>
          </div>
          <div className="w-screen text-center md:text-left font-[700] text-[36px] md:text-[66px] md:leading-[25px] text-[#BFBFBF] heading-font">
            About Us
          </div>
          <div className="md:hidden flex flex-row justify-around w-[100vw]">
            <div className="w-[30%] z-10 max-w-[300px]">
              <img src={person1} alt="" className="w-[100%]" />
            </div>

            <div className="w-[31%] z-10 max-w-[300px]">
              <img src={person2} alt="" className="w-[100%]" />
            </div>
          </div>
          <p className="text-[#202020] w-screen md:w-auto text-justify px-4 md:px-0 text-wrap text-[11px] md:text-[16px] leading-[18px] font-[400] font-family md:mt-8">
            Lorem ipsum dolor sit amet consectetur. Lorem nec risus et tristique
            arcu. Porttitor eget vel nisi lacinia at eget tortor urna. Erat
            ipsum elementum quisque arcu. Proin hendrerit sed mattis lorem
            condimentum amet velit sapien. Malesuada pharetra tincidunt sit
            commodo. Amet arcu non non elementum iaculis amet vehicula amet
            praesent. Aliquet viverra pellentesque facilisis ut est semper.
            Pharetra fusce aliquam ut egestas. Dictumst molestie volutpat
            scelerisque consequat fames leo interdum. Erat nunc ac eu lectus
            morbi integer non. Ullamcorper adipiscing nec vivamus ut et magna
            cras vulputate. Non interdum id cras ullamcorper eget. Mattis
            adipiscing mauris imperdiet etiam sapien ac etiam ut. Aliquam nisl
            sit velit nibh facilisis aliquam non. Urna et magna sed lectus
            egestas senectus. A mauris sagittis nunc enim justo ornare erat
            proin diam. Sollicitudin porta magna lorem suspendisse. Commodo diam
            malesuada nec adipiscing elementum. Orci volutpat nunc amet
            sollicitudin risus nec sit nunc.
          </p>
        </div>

        <div className="hidden md:block bg-[#E2E2E270] w-[100vw]">
          <div className="absolute top-[250px] right-[0] w-[60%] max-w-[1280px]">
            <img src={design} alt="" className="w-[100%]" />
          </div>

          <div className="absolute top-[473px] right-[8vw] w-[14%] z-10 max-w-[300px]">
            <img src={person1} alt="" className="w-[100%]" />
          </div>

          <div className="absolute top-[577px] right-[25vw] w-[14%] z-10 max-w-[300px]">
            <img src={person2} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#F2F1F1] justify-center w-full min-h-[520px] mt-[32px] md:mt-[150px] shadow-inner gap-20 py-4 md:py-8 z-[10] relative">
        <h1 className="font-[700] text-[36px] md:text-[66px] leading-[25px] text-[#BFBFBF] heading-font text-center">
          Events
        </h1>

        <Slider {...settings} className="max-w-5xl mx-auto">
          {Events?.length > 0 ? (
            Events.map((Event) => (
              <div
                key={Event.id || Event._id || Math.random()} // Ensure a unique key
                className="w-[90%] md:w-[22%] min-h-[246.59px] max-w-[220px] border bg-white shadow-lg flex flex-col items-center p-5"
              >
                <h2 className="text-[#183059] text-[20px] font-medium">
                  {Event?.duration || "Unknown Duration"}
                </h2>
                <div className="w-full bg-gray-300 h-[1px] my-2"></div>
                <p className="text-[#183059] text-[16px] font-normal">
                  {Event?.heading || "No Description Available"}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center w-full py-10 text-[#183059] text-[20px]">
              No events available at the moment.
            </div>
          )}
        </Slider>
      </div>

      <div className="hidden md:block relative z-10 bg-white">
        <Givingback />
      </div>

      <div className="mt-[32px] md:mt-[121px] bg-[#F2F1F1] flex flex-col md:justify-around w-full min-h-[550px] py-4 md:py-8">
        <h1 className="font-[700] text-[36px] md:text-[66px] leading-[25px] text-[#BFBFBF] heading-font text-center">
          Top Donars
        </h1>
        <div className="">
          <Donars />
        </div>
      </div>

      <div className="min-h-[180px] md:min-h-[260px] bg-[#061F4A] relative flex justify-center items-center mt-[5px] w-[100vw]">
        <img src={thompson} alt="" className="w-full" />
        <div className="flex absolute md:justify-evenly flex-wrap gap-6 text-white z-10 px-4 md:px-10">
          <div className="flex flex-col font-family justify-center items-center md:gap-[24px]">
            <span className="font-[700] lg:text-[48px] text-[25px] sm:text-[36px] md:text-[40px] md:md:leading-[72px]">
              1200+
            </span>
            <span className="font-[400] lg:text-[26px] text-[12px] md:text-[23px] md:leading-[39px]">
              Alumni
            </span>
          </div>

          <div className="flex flex-col font-family justify-center items-center gap-[] md:gap-[24px]">
            <span className="font-[700] lg:text-[48px]  text-[25px] sm:text-[36px] md:text-[40px] md:leading-[72px]">
              10000+
            </span>
            <span className="font-[400] lg:text-[26px] text-[12px] md:text-[23px] md:leading-[39px]">
              Students
            </span>
          </div>

          <div className="flex flex-col font-family justify-center items-center gap-[] md:gap-[24px]">
            <span className="font-[700] lg:text-[48px] text-[25px] sm:text-[36px] md:text-[40px] md:leading-[72px]">
              1200+
            </span>
            <span className="font-[400] lg:text-[26px] text-[12px] md:text-[23px] md:leading-[39px]">
              DAA
            </span>
          </div>

          <div className="flex flex-col font-family justify-center items-center md:gap-[24px]">
            <span className="font-[700] lg:text-[48px] text-[25px] sm:text-[36px] md:text-[40px] md:leading-[72px]">
              1200+
            </span>
            <span className="font-[400] lg:text-[26px] text-[12px] md:text-[23px] md:leading-[39px]">
              Donars
            </span>
          </div>

          <div className="flex flex-col font-family justify-center items-center gap-[] md:gap-[24px]">
            <span className="font-[700] lg:text-[48px] text-[25px] sm:text-[36px] md:text-[40px] md:leading-[72px]">
              1200+
            </span>
            <span className="font-[400] lg:text-[26px] text-[12px] md:text-[23px] md:leading-[39px]">
              Donations
            </span>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="bg-[#F2F1F1] flex flex-col justify-center w-full md:min-h-[792px] py-8">
        <h1 className="font-[700] text-[36px] md:text-[66px] md:leading-[25px] text-[#BFBFBF] heading-font text-center">
          Other Links
        </h1>

        <Linksbox />
      </div>
    </div>
  );
};

export default Home;
