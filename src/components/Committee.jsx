import React from 'react'
import { assets, committeeData } from '../assets/assets'

const Committee = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Committee'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='underline underline-offset-4 decoration-1 under font-light'>Committees</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>People behind Research Program at StudentsXCEOs Jakarta Batch 13</p>
    
    <div className='flex flex-wrap justify-center gap-8'>
        {committeeData.map((committee, index)=>(
            <div key={{index}} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={committee.image} alt={committee.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{committee.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{committee.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: committee.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gray-600'>{committee.text}</p>
            </div>
        ))}
    </div>

    </div>
  )
}

export default Committee