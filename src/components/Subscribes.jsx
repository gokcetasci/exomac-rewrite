import React from 'react';
import { GrMapLocation } from "react-icons/gr";
import { BsChatSquareText } from "react-icons/bs";
import { IoHelp } from "react-icons/io5";

function Subscribes() {
    return (
        <div>
            <div className='relative flex items-center justify-center bg-[#030f27] bg-opacity-70'>
                <div className='z-[-1]'>
                    <img src="https://exomac.jamstacktemplates.dev/images/bg/newsletter.jpg" alt="" className='object-cover h-[466px] object-fill' />
                </div>
                <div className='absolute top-28 left-15 mb-[40px] container mx-auto'>
                    <div className='flex items-center justify-center'>
                        <p className='text-[42px] text-white'>Let’s find out how to work together</p>
                    </div>
                    <div className='flex items-center justify-center  mt-[20px]'>
                        <p className='text-[18px] text-white max-w-[470px] text-center'>Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.</p>
                    </div>
                    <div className='flex flex-row max-w-[570px] container mx-auto mt-[50px]'>
                        <input name='mail' type="email" placeholder='Enter your email' required className='rounded-l-md border min-h-[52px] px-[20px] py-[3px] focus:outline-none w-full' />
                        <button className='text-white hover:text-white  hover:bg-black transition duration-300 ease-in-out text-[16px] font-medium h-[52px] flex justify-center items-center px-10 bg-primary rounded-r-md '>
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
            <div className='bg-[#f8faff]'>
                <div className='pt-[90px] mb-[100px]'>
                    <div className=' flex flex-col items-center justify-center mb-[60px]'>
                        <p className='text-[42px] text-paragraph font-medium tracking-wide'>We are a full-service creative agency
                        </p>
                        <p className='text-[18px] mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[600px] text-center px-8 font-normal'>Our team of designers, developers and creatives are perfectionists who love what they do and love where they work
                        </p>
                    </div>
                    <div className='flex flex-row container mx-auto gap-10'>
                        <div className='px-[30px] py-[45px] flex flex-row bg-white rounded-md w-1/3' style={{ boxShadow: "0 0 40px rgba(51,51,51,.1)" }}>
                            <div className='mr-[40px]'>
                                <GrMapLocation className='w-[50px] h-[50px] text-primary' />
                            </div>
                            <div>
                                <p className='text-[20px] mb-[15px]'>Our Location</p>
                                <p className='text-[16px] text-paragraphlight'>110 W 34th St, NYC. <br />
                                    67 Madison Avenue.</p>
                            </div>
                        </div>
                        <div className='px-[30px] py-[45px] flex flex-row bg-white rounded-md w-1/3' style={{ boxShadow: "0 0 40px rgba(51,51,51,.1)" }}>
                            <div className='mr-[40px]'>
                                <BsChatSquareText className='w-[50px] h-[50px] text-primary' />
                            </div>
                            <div>
                                <p className='text-[20px] mb-[15px]'>Give Us A Call</p>
                                <p className='text-[16px] text-paragraphlight'>(+1) 012-345-6789 <br />
                                    (+1) 012-345-6789</p>
                            </div>
                        </div>
                        <div className='px-[30px] py-[45px] flex flex-row bg-white rounded-md w-1/3' style={{ boxShadow: "0 0 40px rgba(51,51,51,.1)" }}>
                            <div className='mr-[40px]'>
                                <IoHelp className='w-[50px] h-[50px] text-primary' />
                            </div>
                            <div>
                                <p className='text-[20px] mb-[15px]'>Help Desk</p>
                                <p className='text-[16px] text-paragraphlight'>demo@yourmail.com <br />
                                    demo@yourmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribes;
