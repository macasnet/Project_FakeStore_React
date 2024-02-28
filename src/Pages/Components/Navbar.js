import React, {} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className='bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link to='/' className='text-black text-3xl font-extrabold'>
                                FakeStore
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link to='/' className='text-black hover:bg-black hover:text-white rounded-lg p-2 font-bold'>
                                Anasayfa
                            </Link>
                            <Link to='/products' className='text-black hover:bg-black hover:text-white rounded-lg p-2 font-bold'>
                                Products
                            </Link>     
                        </div>
                    </div>             
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
