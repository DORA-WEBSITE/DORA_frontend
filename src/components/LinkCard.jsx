import { NavLink } from "react-router-dom";


const LinkCard = (data) =>{

const url = data.url;
const logo = data.logo;
const arrow = data.arrow;
const title1 = data.title1;
const title2 = data.title2;
const img = data.img;

    return(
        <div className="w-[100%]">

            <NavLink to={url} target="blank">
                <div className='flex mx-auto w-[90%] max-h-[84px] border-[3px] border-[#003B71] rounded-[8px] gap-[10px] font-family cursor-pointer items-center relative'>
                    <div className='bg-[#003B71] w-[21%] md:min-h-[80px] h-[40px] max-h-[84px] rounded-[5px] text-white font-[600] 
                            lg:text-[26px] md:text-[20px] sm:text-[18px] leading-[25px] flex justify-center items-center'>
                                {   (logo !=0)?
                                        (<div className="flex justify-center items-center w-[100%]">{logo}</div>) :
                                        (<div className="flex justify-center items-center w-[100%] p-1 md:p-0">
                                            <img src={img} className="object-fill" alt=""/>
                                        </div>)
                                }
                              
                    </div> 

                    <div className='flex flex-col justify-center font-[600] lg:text-[18px] md:text-[15px] text-[11px] sm:text-[13px] md:leading-[25px] text-[#183059CC]'>
                                <span className="flex">{title1}</span>
                                 <span>{title2}</span>
                    </div>

                    <div className='w-[3%] h-[27.08px] absolute right-4 flex justify-center items-center'>
                                <img src={arrow} alt='' className="w-[100%]"/>
                    </div>
                </div>
            </NavLink>
            
        </div>
    )
}
export default LinkCard;


export const LinkCard2 = (data2) =>{

    const url2 = data2.url;
    const title1 = data2.title1;
    const title2 = data2.title2;
    const arrow = data2.arrow;

    return(

        <NavLink to={url2} target="blank" className="w-[100%]">
        <div className="flex flex-col w-[80%] font-family cursor-pointer md:gap-[14px] items-center justify-center m-auto">
            <div className="flex justify-between w-[100%] items-center">
                <div className='flex flex-col justify-center font-[500] lg:text-[18px] md:text-[15px] sm:text-[13px]  text-[11px] md:leading-[25px] text-[#183059CC]'>
                                <span>{title1}</span>
                                 <span>{title2}</span>
                </div>

                <div className='w-[2%] h-[27.08px] text-[#A1A1A1] flex justify-center items-center'>
                    <img src={arrow} alt='' className="w-[100%]"/>
                </div>
            </div>

            <div className="w-[100%] bg-[#CCCCCC] h-[2px]"></div>
        </div>
        </NavLink>
    )
}