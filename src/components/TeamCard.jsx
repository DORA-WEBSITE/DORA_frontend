import React from 'react'
import team_member_pic from "../assets/images/team_member_pic.png";
const TeamCard = () => {
  return (
    <div className='flex flex-row font-poppins gap-8'>
        <img className='rounded-xl' src={team_member_pic} alt="" />
        <div className='flex flex-col justify-center'>
            <div className='font-medium text-2xl'>Mohit Sharma</div>
            <div className='text-[#183059] font-medium text-base'>Office Attendant</div>
            <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
            <div className='text-[#ABABAB] font-medium text-base'>Phone no. : +91-1332-285840</div>
            <div className='text-[#ABABAB] font-medium text-base'>Diary & Dispatch, Data entry, and Record Maintenance</div>
        </div>
    </div>
  )
}

export default TeamCard