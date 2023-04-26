import React from 'react'

// React Icon Imports
import { GiMagnifyingGlass } from 'react-icons/gi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { GiGuitar } from 'react-icons/gi'
import { TbVinyl } from 'react-icons/tb'

function LandingInfoBar() {
    return (
        <div className='flex flex-1 w-full h-24 bg-gray-900 text-white justify-evenly items-center p-8'>
            <div className='flex-1 flex justify-center items-center flex-col font-bold text-2xl'>
                <GiMagnifyingGlass size='96' />
                <h2 className='pt-3'>Search for Musicians</h2>
                <p className=' font-light text-sm'>Find people that fit your style and sound</p>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col font-bold text-2xl'>
                <MdOutlinePeopleAlt size='96' />
                <h2 className='pt-3'>Collaborate With Others</h2>
                <p className=' font-light text-sm'>Tools to write and compose with others</p>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col font-bold text-2xl'>
                <GiGuitar size='96' />
                <h2 className='pt-3'>Share Ideas</h2>
                <p className=' font-light text-sm'>Share publicly or choose who can see your work</p>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col font-bold text-2xl'>
                <TbVinyl size='96' />
                <h2 className='pt-3'>Spread Your Music</h2>
                <p className=' font-light text-sm'>Show off your accomplishment</p>
            </div>
        </div>
    )
}

export default LandingInfoBar