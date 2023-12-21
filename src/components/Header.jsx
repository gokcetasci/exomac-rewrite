import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollThreshold = 470; //height değeri belirterek header ın scroll edilince arka plan rengini değiştirmesini kontrol ettim

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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);  //ekran kuculunce hamburger menu acilsin!

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className={`fixed z-10  w-full bg-opacity-50 flex flex-row items-center justify-center ${isScrolled ? 'bg-changed-color' : ''}`}>

      <div className='flex w-full flex-row items-center justify-center' >
        <div className='container mx-auto flex flex-row  justify-between items-center max-w-7xl px-0 lg:px-[15px] py-[15px] lg:py-0 '>
          <div className='px-[15px] w-[160px'>
            <img src="https://exomac.jamstacktemplates.dev/images/logo/logo.png" alt="" className='py-[15px] ' />
          </div>
          <div className=''>
            <div className='w-auto flex justify-center items-center px-[15px] '>
              <div className='flex flex-row justify-center items-center hidden lg:flex'>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px]'>
                  Homepage
                </Link>
                <Link to={'/'} className='text-[16px] text-white hover:text-primary transition duration-300 ease-in-out py-10 px-[15px] '>
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
              <div className=' px-[45px] justify-items-end hidden sm:flex lg:hidden'>
                <button className='text-primary hover:text-white hover:scale-105 hover:bg-primary transition duration-300 ease-in-out text-[14px] font-medium h-[40px] flex justify-center items-center px-5 bg-white rounded-md border border-primary'>
                  Buy Now
                </button>
              </div>
              <div className='ml-0 xl:ml-[35px] flex justify-center items-center px-0 lg:px-[15px]'>
                <Link to={'/'} className='text-[26px] text-white px-[5px] py-[6px] hover:text-primary transition duration-300 ease-in-out'>
                  <IoSearchOutline />
                </Link>
                <div className='lg:hidden cursor-pointer pl-3'>
                  <div className={`${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}
                  >
                    <RxHamburgerMenu className='w-[30px] h-[30px] text-white hover:text-primary' />
                  </div>
                  {isMenuOpen && (
                    <div className='fixed top-0 right-0 w-full h-full flex place-content-end z-30 w-[300px]'>
                      <div className='w-[300px]  bg-slate-400 '>
                        <div className='px-[15px] flex flex-row justify-between items-center w-[300px] bg-changed-color py-[10px]' onClick={closeMenu} >
                          <img src="https://exomac.jamstacktemplates.dev/images/logo/logo.png" alt="" className='py-[15px] w-[120px] ' />
                          <MdClose className='text-white text-4xl hover:text-primary ' />
                        </div>
                        <div>
                          <ul className='text-[16px] pt-[20px] px-[30px] pb-[100px]'>
                            <li className='border-b border-white hover:text-[#030e22]  border-opacity-50 text-white py-[20px] transition duration-300 ease-in-out'>
                              <Link><a href="">Homepage</a></Link>
                            </li>
                            <li className='border-b border-white border-opacity-50 hover:text-[#030e22] text-white py-[20px] transition duration-300 ease-in-out'>
                              <Link><a href="">About Us</a></Link>
                            </li>
                            <li className='border-b border-white border-opacity-50 hover:text-[#030e22] text-white py-[20px] transition duration-300 ease-in-out'>
                              <Link><a href="">Services</a></Link>
                            </li>
                            <li className='border-b border-white border-opacity-50 hover:text-[#030e22] text-white py-[20px] transition duration-300 ease-in-out'>
                              <Link><a href="">Work</a></Link>
                            </li>
                            <li className='border-b border-white border-opacity-50 hover:text-[#030e22] text-white py-[20px] transition duration-300 ease-in-out'>
                              <Link><a href="">Blog</a></Link>
                            </li>
                            <li className=' text-white py-[20px] hover:text-[#030e22] transition duration-300 ease-in-out'>
                              <Link><a href="">Contact Us</a></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=' px-[15px] justify-items-end hidden lg:flex'>
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
