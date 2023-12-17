import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const handleWorkDropdownOpen = () => {
    setIsWorkDropdownOpen(true);
  };

  const handleWorkDropdownClose = () => {
    setIsWorkDropdownOpen(false);
  };

  const handleBlogDropdownOpen = () => {
    setIsBlogDropdownOpen(true);
  };

  const handleBlogDropdownClose = () => {
    setIsBlogDropdownOpen(false);
  };

  return (
    <div className='fixed z-10 '>
      <div className='w-screen bg-opacity-50 border-b border-[#f3f3f3] flex flex-row items-center ' >
        <div className='container mx-auto px-[15px] flex flex-row justify-between items-center  '>
          <div className='px-[15px] w-[160px] '>
            <img src="https://exomac.jamstacktemplates.dev/images/logo/logo.png" alt="" className='py-[15px]' />
          </div>
          <div>
            <div className='w-auto flex justify-center items-center px-[15px]'>
              <div className='flex flex-row justify-center items-center'>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px]'>
                  Homepage
                </Link>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px]'>
                  About Us
                </Link>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px]'>
                  Services
                </Link>
                <div
                  id="workDropdown"
                  className="relative flex flex-row justify-center items-center mx-auto"
                  onMouseEnter={handleWorkDropdownOpen}
                  onMouseLeave={handleWorkDropdownClose}
                >
                  <button className="flex flex-row justify-center items-center">
                    <p className="flex flex-row justify-center items-center text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px] ">
                      Work <IoIosArrowDown className="ml-2 w-3 h-3" />
                    </p>
                  </button>
                  {isWorkDropdownOpen && (
                    <div className="dropdown-content absolute top-20 left-2 border rounded-md py-[5px] mt-[2px] z-10 bg-white  flex flex-col w-60 cursor-pointer">
                      <p className='text-[16px] text-gray-400 px-8 py-4 hover:bg-gray-100 transition duration-300 ease-in-out'>Work</p>
                      <p className='text-[16px] text-gray-400 px-8 py-4 hover:bg-gray-100 transition duration-300 ease-in-out'>Work Details</p>
                    </div>
                  )}
                </div>
                <div
                  id="blogDropdown"
                  className="relative flex flex-row justify-center items-center mx-auto"
                  onMouseEnter={handleBlogDropdownOpen}
                  onMouseLeave={handleBlogDropdownClose}
                >
                  <button className="flex flex-row justify-center items-center">
                    <p className="flex flex-row justify-center items-center text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px] ">
                      Blog <IoIosArrowDown className="ml-2 w-3 h-3" />
                    </p>
                  </button>
                  {isBlogDropdownOpen && (
                    <div className="dropdown-content absolute top-20 left-2 border rounded-md py-[5px]  mt-[2px] z-10 bg-white w-60 flex flex-col cursor-pointer">
                      <p className='text-[16px] text-gray-400 px-8 py-4 hover:bg-gray-100 transition duration-300 ease-in-out'>Blog</p>
                      <p className='text-[16px] text-gray-400 px-8 py-4 hover:bg-gray-100 transition duration-300 ease-in-out'>Blog Details</p>          </div>
                  )}
                </div>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px]'>
                  Contact Us
                </Link>
              </div>
              <div className='ml-[35px] flex justify-center items-center px-[15px]'>
                <Link to={'/'} className='text-[26px] text-white px-[5px] py-[6px] hover:text-primary transition duration-300 ease-in-out'>
                  <IoSearchOutline />
                </Link>
              </div>
            </div>
          </div>
          <div className=' px-[15px] justify-items-end'>
            <button className='text-primary hover:text-white hover:scale-105 hover:bg-primary transition duration-300 ease-in-out text-[16px] font-medium h-[52px] flex justify-center items-center px-10 bg-white rounded-md border border-primary '>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
