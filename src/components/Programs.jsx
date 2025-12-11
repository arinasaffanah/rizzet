import React from 'react'
import { assets, workPrograms } from '../assets/assets'

const Programs = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Programs'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Work Programs <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Analyze data, Provide Insight to Support Decision Making-Explore Our Portfolio</p>

        {/* slider buttons */}

        <div className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* programs slider container */}

        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {workPrograms.map((program, index)=>(
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
                        <img src={program.image} alt={program.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800 '>{program.title}</h2>
                                <p className='text-sm text-gray-500'>
                                    PIC: {program.pic}<span></span>
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Supervisor: {program.supervisor}<span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Programs