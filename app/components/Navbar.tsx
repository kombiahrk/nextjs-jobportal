import React from 'react'
import LogoImage from '@/public/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-[13vh] overflow-hidden shadow-md'>
      <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>
        {/* logo */}
        <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
          <Link href="/">
            <Image
              src={LogoImage}
              alt="logo"
              width={250}
              height={250}
              className='w-[100%] h-[100%]'
            />
          </Link>
        </div>
        {/* menu */}
      </div>
    </div>
  )
}

export default Navbar