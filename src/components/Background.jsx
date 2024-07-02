import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <div className='absolute top-[5%] w-full py-10 flex justify-center text-xl text-zinc-600 font-semibold'>Documents</div>
                <h1
                    className='absolute top-1/2 left-1/2 
                    -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none 
                    font-semibold text-zinc-700
                    tracking-tighter'>Docs.</h1>
                    <span className='absolute text-zinc-500 bottom-0 right-0 mb-5 mr-5 font-semibold'>
                    @Made By Ayush Mitra</span>
            </div>

        </>
    )
}

export default Background