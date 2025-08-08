import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const PatientInfo = () => {
    const {speciality}=useParams();
    const { assets } = useContext(AppContext)
    return (
        <div className='flex items-center justify-center bg-gray-100 h-[65vh]'>
            <form className='flex flex-col shadow-xl  w-[900px]  bg-white rounded-lg pt-3 pb-6 pl-8 pr-8' action="" method='post'>
                <h3 className='font-semibold text-[30px] '>Consults with a Doctors </h3>
                <div className='flex mt-7'>
                    <div className='flex flex-col'>
                        <p className='text-[20px]'>Speciality</p>
                        <p className='border-2 border-blue-300 pt-2 pb-2 pl-3 mt-3'> <i className='mr-[5px]'  class="fa-solid fa-circle-check "></i> {speciality}  <span className='pl-4'>₹399</span></p>
                        <label className='mt-2 mb-2' htmlFor="name">Patient name</label>
                        <input className='mb-3 p-2 border-gray-400 border-[2px] outline-none' placeholder='Enter Patient name' type="text" id='name' />
                        <label className='mb-2 ' htmlFor="number">Mobile number</label>
                        <input className='mb-3  border-gray-400 border-[2px] p-2 outline-none' placeholder='Enter a valid number' type="number" id='number' />
                        <button className='bg-blue-400 p-2 w-[100px]' type='submit'>Continue</button>
                    </div>
                    <div className='w-[2px] h-[300px] bg-slate-400 ml-[150px] mr-[150px]'></div>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='h-[130px]' src={assets.qualified} alt="" />
                        <p className='mt-3'>Verified Doctors</p>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default PatientInfo
