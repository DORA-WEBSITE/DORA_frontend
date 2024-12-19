import givingback from '../assets/images/givingback.png';
import Card from './Card';

const data1= [
    {
        id: 1,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'1a'
    },
    {
        id: 2,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'2a'

    },
    {
        id: 3,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'3a'
    },
    {
        id: 4,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'4a'
    },
    {
        id: 5,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'5a'
    },
   
]

const data2 =[
    {
        id: 6,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'6a'
    },
    {
        id: 7,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'7a'
    },
    {
        id: 8,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'8a'
    },
    {
        id: 9,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'9a'
    },
    {
        id: 10,
        h2:'Giving Back',
        p:' Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona',
        img:`${givingback}`,
        arrowId:'10a'
    },
]

const Givingback = () => {
    return (
        <div className='w-[100%]'>
            <div className='mt-[114px] flex flex-col justify-center items-center space-y-[83px]'>

                <div className='flex flex-wrap w-[75vw] max-w-[1480px] min-h-[240px] bg-[#F2F2F2] shadow-lg justify-evenly items-center'>
                    {
                    data1.map((data)=>{
                        return <Card key = {data.id} {...data}/>
                    })
                    }      
                </div>

                <div className='flex flex-wrap w-[75vw] max-w-[1480px] min-h-[240px] bg-[#F2F2F2] shadow-lg justify-evenly'>
                    {
                    data2.map((data)=>{
                        return <Card key = {data.id} {...data}/>
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default Givingback;