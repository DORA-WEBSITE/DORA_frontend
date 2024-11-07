import donar from '../assets/images/donar.png';
import Slider from 'react-slick';


const data = [
    {
        id:1,
        img : `${donar}`,
        name:'Name'
    },
    {
        id:2,
        img : `${donar}`,
        name:'Name'
    },
    {
        id:3,
        img : `${donar}`,
        name:'Name'
    },
    {
        id:4,
        img : `${donar}`,
        name:'Name'
    },
]

const Donars = () =>{

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };

    return(
        <div className='w-[100vw]'>
            <Slider {...settings} className='flex justify-evenly flex-wrap w-[100%] mx-auto max-w-[1300px]'>
            {
                data.map((data)=>{
                    return(
                        <div className='w-[10%] max-w-[250px] bg-white shadow-lg flex flex-col justify-evenly text-center py-4 gap-4'
                            key={data.id}>
                           <div className='w-[67%] m-auto py-4'><img src={data.img} alt='' className='w-[100%]'/></div>
                            <div className='w-[90.1%] h-[1px] bg-[#0000003D] m-auto'></div>
                            <p className='font-family font-[500] text-[18px] leading-[25px] text-[#183059]'>
                            {data.name}
                            </p>
                        </div>
                    )
                })
            } 

            </Slider>     
        </div>   
    )
}

export default Donars;