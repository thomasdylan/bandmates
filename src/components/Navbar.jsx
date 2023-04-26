import React from 'react'

import { BsPlus, BsGearFill } from 'react-icons/bs'
import { BiAlbum } from 'react-icons/bi'
import { GiGuitarBassHead, GiGuitarHead, GiDrumKit } from 'react-icons/gi'

function Navbar() {

    const SideBarIcon = ({ icon, text = 'tooltip' }) => (
        <div className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )

    return (
        <>
            <div className='flex'>
                <nav className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
                    <SideBarIcon icon={<BiAlbum size='28' />} text='Album' />
                    <SideBarIcon icon={<GiGuitarHead size='26' />} text='Guitar' />
                    <SideBarIcon icon={<GiGuitarBassHead size='28' />} text='Bass' />
                    <SideBarIcon icon={<GiDrumKit size='28' />} text='Drums' />
                    <SideBarIcon icon={<BsPlus size='32' />} text='Add' />
                    <SideBarIcon icon={<BsGearFill size='20' />} text='Settings' />
                </nav>
            </div>
        </>
    )


}

export default Navbar