import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-20 py-5'>
        <h2 className='text-2xl font-medium text-pink-500 text-nowrap flex-1'>
            Anik's Blog❤️
        </h2>
        <div className='flex justify-between items-center gap-4 text-lg font-medium'>
            <a href="" className='px-2 hover:underline hover:text-pink-500'>Home</a>
            <a href="" className='px-2 hover:underline hover:text-pink-500'>Create Blog</a>
        </div>
    </nav>
  )
}

export default Navbar