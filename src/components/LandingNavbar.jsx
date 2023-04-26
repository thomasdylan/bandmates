import React from 'react'

function LandingNavbar() {
    return (
        <div className='flex'>
            <nav className='relative top-0 left-0 h-20 w-full m-0 flex flex-1 flex-col bg-gray-900 text-white'>
                <div className='flex justify-between px-3 h-full items-center'>
                    <div className='text-3xl pl-3'>BandMates</div>
                    <div className='text-xl text-right pr-3 ml-auto'>
                        <button className='p-5'>Register</button>
                        <button>Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default LandingNavbar