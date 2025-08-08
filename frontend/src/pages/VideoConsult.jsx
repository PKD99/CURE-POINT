import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ConsultNow from '../components/ConsultNow'


const VideoConsult = () => {
    const { assets } = useContext(AppContext)
    return (
        <div className=''>
            <div className='flex bg-blue-200 h-[420px] pt-14 pr-16 pb-5 pl-14'>
                <div>
                    <h2 className='text-[35px] font-semibold'>Skip the travel!</h2>
                    <h2 className='text-[35px] font-semibold'>Take Online Doctor Consultation</h2>
                    <p className='text-[20px]'>Private consultation + Audio call · Starts at just ₹199</p>
                    <div className='flex mt-7 mb-7 items-center'>
                        <span><img className='h-[40px] w-[40px] rounded-full' src={assets.avil1} alt="" /></span>
                        <span><img  className='h-[40px] w-[40px] rounded-full translate-x-[-5px]' src={assets.avil2} alt="" /></span>
                        <span><img  className='h-[40px] w-[40px] rounded-full translate-x-[-10px]' src={assets.avil3} alt="" /></span>
                        <span>
                            +188 Doctors are online
                        </span>
                        <span className='w-[10px] h-[10px] bg-green-500 rounded-full ml-2'></span>
                    </div>
                    <a className='bg-white  pt-2 pr-5 pb-2 pl-5 rounded-full font-normal' href="">Consult Now</a>
                    <div className='flex items-center mt-4'>
                        <i class="fa-solid fa-award"></i>
                        <p className='pl-2 pr-2'>Verified Doctors</p>
                        <i class="fa-solid fa-file-prescription"></i>
                        <p className='pl-2 pr-2'>Digital Prescription</p>
                        <i class="fa-regular fa-message"></i>
                        <p className='pl-2 pr-2'>Free Followup</p>
                    </div>
                </div>
                <div>
                    <img className='h-72' src={assets.avil4} alt="" />
                </div>
            </div>
            <ConsultNow/>
        </div>

    )
}

export default VideoConsult
