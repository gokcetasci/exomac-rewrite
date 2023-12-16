import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  return (
    <div className='fixed z-10'>
      <div className='h-[102px] w-screen bg-opacity-50 border-b border-slate-50 flex flex-row'>
        <div className='px-[15px] w-[160px]'>
          <img src="https://exomac.jamstacktemplates.dev/images/logo/logo.png" alt="" className='py-[15px]'/>
        </div>
        <div className='text-slate-50'>
          <button className='text-[16px]'>Homepage</button>
          <button>About Us</button>
          <button>Services</button>
          <button>Work</button>
          <button>Blog</button>
          <button>Contact Us</button>
          <button><IoSearchOutline /></button>
        </div>
        <div>
          <button className='text-blue-500 '>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
