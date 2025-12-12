import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20 pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia harum quo possimus quibusdam facere sit natus vitae ipsum accusamus, doloremque quidem obcaecati nobis vel eius, ullam incidunt itaque? Temporibus, dignissimos?</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md-mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Quick Links</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About</a>
                    <a href="#Programs" className='hover:text-white'>Work Programs</a>
                    <a href="#Committee" className='hover:text-white'>Commite</a>
                </ul>
            </div>
            <div className='w-full md:w-1/5 mb-8 md-mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Stay Connected</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="mailto:research.studentsxceosjakarta@gmail.com" target='blank' className='hover:text-white'>Contact us: research.studentsxceosjakarta@gmail.com</a>
                    <a href="https://www.instagram.com/crizz_et/" target='blank' className='hover:text-white'>Instagram | Rizzet</a>
                    <a href="https://www.instagram.com/crizz_et/" target='blank' className='hover:text-white'>Instagram | StudentsXCEOs Jakarta</a>
                </ul>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer