import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import donar from '../assets/images/donar.png';


const data = [
    {
        id: 1,
        img: `${donar}`,
        name: 'Mohan Bajaj',
        post: 'Research Scholar',
        department: 'Department of Earthquake Engineering',
        description: 'I am writing to express my heartfelt gratitude for the financial support of ₹75,000 provided by the Dean of Resources & Alumni affairs of our institution to attend the 18th World Conference on Earthquake Engineering (WCEE) in Milan, Italy, from June 30 to July 5, 2024.This generous support enabled me to participate in this significant event, and I am truly appreciative of the opportunity it afforded me.The conference was immensely enriching, providing valuable insights and opportunities for academic and professional growth. I am eager to apply the knowledge and connections gained to my ongoing work and future endeavors.'
    },

    {
        id: 2,
        img: `${donar}`,
        name: 'Mohan Bajaj',
        post: 'Research Scholar',
        department: 'Department of Earthquake Engineering',
        description: 'I am writing to express my heartfelt gratitude for the financial support of ₹75,000 provided by the Dean of Resources & Alumni affairs of our institution to attend the 18th World Conference on Earthquake Engineering (WCEE) in Milan, Italy, from June 30 to July 5, 2024.This generous support enabled me to participate in this significant event, and I am truly appreciative of the opportunity it afforded me.The conference was immensely enriching, providing valuable insights and opportunities for academic and professional growth. I am eager to apply the knowledge and connections gained to my ongoing work and future endeavors.'
    },

    {
        id: 3,
        img: `${donar}`,
        name: 'Mohan Bajaj',
        post: 'Research Scholar',
        department: 'Department of Earthquake Engineering',
        description: 'I am writing to express my heartfelt gratitude for the financial support of ₹75,000 provided by the Dean of Resources & Alumni affairs of our institution to attend the 18th World Conference on Earthquake Engineering (WCEE) in Milan, Italy, from June 30 to July 5, 2024.This generous support enabled me to participate in this significant event, and I am truly appreciative of the opportunity it afforded me.The conference was immensely enriching, providing valuable insights and opportunities for academic and professional growth. I am eager to apply the knowledge and connections gained to my ongoing work and future endeavors.'
    },

]
const Testimonial = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className='flex flex-col justify-center w-full min-h-[434px] py-8'>
            <h1 className='font-[700] text-[66px] leading-[25px] text-[#BFBFBF] heading-font text-center'>Testimonial</h1>


            <Slider {...settings} className='flex w-[100vw] justify-evenly mt-[48px]'>

                {
                    data.map((data) => {
                        return (

                            <div className='flex flex-col font-family w-[40%] max-w-[450px] shadow-lg shadow-[#00000040] justify-center p-[15px] ml-[50px]'
                                key={data.id}>
                                <div className='flex gap-[27px]'>
                                    <img src={data.img} alt='' className='w-[33%]' />

                                    <div className='flex flex-col'>
                                        <p className='text-[#183059] text-[18px] leading-[25px] font-[500]'>{data.name}</p>
                                        <p className='font-[500] text-[10px] leading-[10px] mt-[5px] text-[#848484]'>{data.post}</p>
                                        <p className='font-[500] text-[10px] leading-[10px] text-[#848484]'>{data.department}</p>
                                    </div>
                                </div>

                                <div className='w-[100%] h-[1px] bg-[#0000003D] mt-[12px]'></div>

                                <div className='font-family text-[8px] leading-[13px] font-[500] text-[#183059CC] mt-[10px]'>
                                    {data.description}
                                </div>
                            </div>

                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default Testimonial;