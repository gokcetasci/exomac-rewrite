import React from 'react'
import { MdDateRange } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeBlogContent() {
    return (
        <div className='container mx-auto'>
        <div className='container mx-auto'>
                <div className='pt-[20px] lg:pt-[90px] mb-[50px] '>
                    <div className=' flex flex-col items-center justify-center'>
                        <p className='text-[30px] sm:text-[42px] text-paragraph font-medium tracking-wide text-center'>We are a full-service creative agency
                        </p>
                        <p className='text-[18px] mx-auto lg:mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[600px] text-center px-8 font-normal'>Our team of designers, developers and creatives are perfectionists who love what they do and love

                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row container mx-auto'>
                    <div className='px-[15px] mb-[30px] w-auto md:w-1/3'>
                        <div className='overflow-hidden'>
                            <img src="https://exomac.jamstacktemplates.dev/images/blog/370/blog-1.jpg" alt="" className='w-full hover:scale-110 transition duration-1000 ease-in-out' />
                        </div>
                        <div className='py-[30px]'>
                            <div className='flex flex-row items-center text-[14px] text-paragraphlight  mb-[10px]'>
                                <div className='flex flex-row items-center justify-center mr-[28px]'>
                                    <MdDateRange className='w-4 h-4 mr-[10px]' />
                                    <p>10 Oct 2020</p>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaRegEye className='w-4 h-4 mr-[10px]' />
                                    <p>70 views</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <Link className='text-[24px] font-medium mb-[15px] hover:text-primary transition duration-300 ease-in-out'>
                                    How your sales can work together in account-based marketing
                                </Link>
                                <Link className='border-b border-gray-400 text-primary text-[16px] py-[3px] w-fit hover:border-gray-200 transition duration-700 ease-in-out'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='px-[15px] mb-[30px] w-auto md:w-1/3'>
                        <div className='overflow-hidden'>
                            <img src="https://exomac.jamstacktemplates.dev/images/blog/370/blog-2.jpg" alt="" className='w-full hover:scale-110 transition duration-1000 ease-in-out' />
                        </div>
                        <div className='py-[30px]'>
                            <div className='flex flex-row items-center text-[14px] text-paragraphlight  mb-[10px]'>
                                <div className='flex flex-row items-center justify-center mr-[28px]'>
                                    <MdDateRange className='w-4 h-4 mr-[10px]' />
                                    <p>10 Oct 2020</p>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaRegEye className='w-4 h-4 mr-[10px]' />
                                    <p>70 views</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <Link className='text-[24px] font-medium mb-[15px] hover:text-primary transition duration-300 ease-in-out'>
                                    The six things marketers need to understand about DTC marketing
                                </Link>
                                <Link className='border-b border-gray-400 text-primary text-[16px] py-[3px] w-fit hover:border-gray-200 transition duration-700 ease-in-out'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='px-[15px] mb-[30px] w-auto md:w-1/3'>
                        <div className='overflow-hidden'>
                            <img src="https://exomac.jamstacktemplates.dev/images/blog/370/blog-3.jpg" alt="" className='w-full hover:scale-110 transition duration-1000 ease-in-out' />
                        </div>

                        <div className='py-[30px]'>
                            <div className='flex flex-row items-center text-[14px] text-paragraphlight  mb-[10px]'>
                                <div className='flex flex-row items-center justify-center mr-[24px]'>
                                    <MdDateRange className='w-4 h-4 mr-[10px]' />
                                    <p>10 Oct 2020</p>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaRegEye className='w-4 h-4 mr-[10px]' />
                                    <p>70 views</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <Link className='text-[24px] font-medium mb-[15px] hover:text-primary transition duration-300 ease-in-out'>
                                    Eleven top tips for developing agile marketing
                                </Link>
                                <Link className='border-b border-gray-400 text-primary text-[16px] py-[3px] w-fit hover:border-gray-200 transition duration-700 ease-in-out'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlogContent

