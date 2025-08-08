import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const ConsultNow = () => {
    return (
        <div>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-x5 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 shadow-lg mt-5 mr-5 p-8' key={index} to={`/patients/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
                        <p>{item.speciality}</p>
                        <div className='flex items-center text-cyan-500'>
                            <a className=' pr-2' href="">Consult now</a><i class="fa-solid fa-angle-right "></i>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ConsultNow
