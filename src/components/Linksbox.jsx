import rightarrow from '../assets/images/Vector.png';
import arrow from '../assets/images/linkarrow.png';
import obituaries from '../assets/images/obituaries.png';
import iarclogo from '../assets/images/iarclogo.png';
import LinkCard from './LinkCard';
import { LinkCard2 } from './LinkCard';


const data1 = [
    {
        id: 1,
        url: 'https://iitrdora.iitr.ac.in/news/ypages/iitrdf.html',
        logo: 'IITRDF',
        img: '',
        title1: 'IIT Roorkee',
        title2: 'Development Foundation',
        arrow: `${rightarrow}`,
    },
    {
        id: 2,
        url: 'https://alumni.iitr.ac.in/more/iarc',
        logo: '',
        img: `${iarclogo}`,
        title1: 'Institute Alumni Relations',
        title2: 'Cell',
        arrow: `${rightarrow}`
    },
    {
        id: 3,
        url: '',
        logo: 'AMP',
        img: '',
        title1: 'Alumni Mentorship',
        title2: 'Program',
        arrow: `${rightarrow}`
    },
    {
        id: 4,
        url: '',
        logo: '',
        img: `${obituaries}`,
        title1: 'OBITUARIES',
        title2: '',
        arrow: `${rightarrow}`
    },
]

const data2 = [
    {
        id: 1,
        url: '',
        title1: 'Feedback Form',
        title2: '',
        arrow: `${arrow}`
    },
    {
        id: 2,
        url: 'https://iitrdora.iitr.ac.in/faculty/departmentnodalfaculty.html',
        title1: 'Departmental Nodal Faculty',
        title2: '',
        arrow: `${arrow}`
    },
    {
        id: 3,
        url: '',
        title1: 'Good International Conference',
        title2: 'Online Application',
        arrow: `${arrow}`
    },
    {
        id: 4,
        url: '',
        title1: 'Endowed Lecture Series',
        title2: '',
        arrow: `${arrow}`
    },
    {
        id: 5,
        url: 'https://iitrdora.iitr.ac.in/news/ypages/IITRDcsr.html',
        title1: 'IITRDF-CSR',
        title2: '',
        arrow: `${arrow}`
    },
    {
        id: 6,
        url: 'https://iitrdora.iitr.ac.in/news/ypages/IITRDcsr.html',
        title1: 'IITRDF',
        title2: '',
        arrow: `${arrow}`
    }
]


const Linksbox = () => {
    return (
        <div className='flex justify-evenly md:mt-[71px] flex-wrap gap-5'>
            <div className='flex flex-col w-[35.5vw] max-w-[670px] md:min-h-[572px] gap-2 py-4 md:gap-0 md:py-0 bg-white shadow-lg justify-evenly items-center min-w-[300px]'>

                {
                    data1.map((data) => {
                        return <LinkCard key={data.id} {...data} />
                    })
                }

            </div>

            <div className='flex flex-col w-[35.5vw] max-w-[670px] md:min-h-[572px] bg-white shadow-lg gap-[1.8vw] py-[24px] md:py-[50px] min-w-[300px]'>

            {
                    data2.map((data) => {
                        return <LinkCard2 key={data.id} {...data} />
                    })
                }

            </div>
        </div>
    )
}

export default Linksbox;