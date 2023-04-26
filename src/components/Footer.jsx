import React from 'react'

// React Icon Imports
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div className='flex flex-1 w-full h-12 bg-gray-500 text-white justify-evenly items-center'>
            <div className='grid row-span-3 text-lg'>
                <div className='grid col-span-1'>About</div>
                <div className='grid col-span-1 justify-center pt-4'><FaGithub size='24' /></div>
            </div>
            <div className='grid row-span-3 text-lg'>
                <div className='grid col-span-1'>Contact</div>
                <div className='grid col-span-1 justify-center pt-4'><FaLinkedin size='24' /></div>
            </div>
            <div className='grid row-span-3 text-lg'>
                <div className='grid col-span-1'>Support</div>
                <div className='grid col-span-1 justify-center pt-4'>Other</div>
            </div>
        </div>
    )
}

export default Footer