import rightarrow from '../assets/images/Vector.png';



const Card = (props)=>{
    const id = props.id;
    const img = props.img;
    const h2 = props.h2;
    const p = props.p;
    const arrowId = props.arrowId;

    const hoverListener = () =>{
        document.getElementById(`${id}`).style.color ="white";
        document.getElementById(`${arrowId}`).style.display = "flex";
    }
    
    const hoverOut = () =>{
        document.getElementById(`${id}`).style.color ="";
        document.getElementById(`${arrowId}`).style.display = "";
    }
    
    return(
        <div className="w-[20%] flex text-center">
                <div className='flex items-center hover:bg-[#183059] hover:text-white hover:scale-[1.2] hover:rounded-md transition-all duration-200 w-[100%] givingcard'
                 onMouseOver={hoverListener} onMouseOut={hoverOut}>
                        <div className='flex flex-col w-[100%] min-h-[240px] justify-center items-center p-5 gap-2' id={h2}>
                            <img src={img} alt='' className='w-[69px] h-[68.36px]' />

                            <h2 className='text-[#183059] text-[24px] font-[700] font-family leading-[25px] heading' id={id}>
                                {h2}
                            </h2>

                            <p className='text-[10px] font-[400] leading-[13.62px] text-center'>
                                {p}
                            </p>

                            <div className='justify-center items-center bg-white rounded-full p-2 w-[2.7vw] hidden' id={arrowId}>
                            <img src={rightarrow} className='w-[60%]'/>
                            </div>
                        </div>

                        <div className='w-[2px] h-[149px] bg-[#0000003D]'></div>
                </div>
        </div>
    )
}

export default Card;