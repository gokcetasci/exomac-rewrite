import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-footerbg pt-[100px]'>
            <div className='container mx-auto px-[15px] flex flex-row border-b border-gray-600  justify-between'>
                <div id='footer-widget' className='px-[15px] mb-[30px]'>
                    <div className='mb-[30px]'>
                        <img src="https://exomac.jamstacktemplates.dev/images/logo/footer-logo.png" alt="" className='py-[15px]' />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <Link to={"/"} className='text-[18px] text-footercontent mb-[10px] hover:text-primary transition duration-300 ease-in-out'>
                                (+1) 212-946-2701
                            </Link>
                            <Link to={"/"} className='text-[18px] text-footercontent hover:text-primary transition duration-300 ease-in-out'>
                                hello@hasagency.com
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row mt-[40px]'>
                        <a href=""><FaSquareXTwitter className='mr-[10px] mb-[10px] text-footercontent w-6 h-6 ' /></a>
                        <a href=""><FaFacebookSquare className='mr-[10px] mb-[10px] text-footercontent w-6 h-6' /></a>
                        <a href=""><FaInstagram className='mr-[10px] mb-[10px] text-footercontent w-6 h-6' /></a>
                    </div>
                </div>
                <div id='footer-content' className='flex flex-row'>
                    <div className='px-[15px] my-[30px] mr-20'>
                        <div className='mb-[17px]'>
                            <h1 className='text-[18px] text-white font-bold'>Services</h1>
                        </div>
                        <div>
                            <ul>
                                <li className='mb-[10px] pr-[20px] text-[16px] text-footercontent'><a href="">Marketing</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">SEO/SEM</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Development</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">UX Design</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-[15px] my-[30px] mr-20'>
                        <div className='mb-[17px]'>
                            <h1 className='text-[18px] text-white font-bold'>Products</h1>
                        </div>
                        <div>
                            <ul>
                                <li className='mb-[10px] pr-[20px] text-[16px] text-footercontent'><a href="">Elementor Guru</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">WooLentor Pro</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Plugins</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Page Builder</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-[15px] my-[30px] mr-20'>
                        <div className='mb-[17px]'>
                            <h1 className='text-[18px] text-white font-bold'>About</h1>
                        </div>
                        <div>
                            <ul>
                                <li className='mb-[10px] pr-[20px] text-[16px] text-footercontent'><a href="">Features</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Our Partners</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Affiliate Program</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-[15px] my-[30px] '>
                        <div className='mb-[17px]'>
                            <h1 className='text-[18px] text-white font-bold'>Contact</h1>
                        </div>
                        <div>
                            <ul>
                                <li className='mb-[10px] pr-[20px] text-[16px] text-footercontent'><a href="">Support Ticket</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Help Desk</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">Live Chat</a></li>
                                <li className='mb-[10px] pr-[20px] text-[16px]  text-footercontent'><a href="">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center py-[20px] px-[15px] text-[14px] text-white flex gap-1 '>
                <p className=' flex flex-row'>© 2023</p>
                <p className='font-black'>Exomac</p>
                <p>Made With</p>
                <FaHeart className='text-red-600'/>
                <p>by</p>
                <a href="/" className='font-black ' >HasThemes</a>
            </div>
        </div>
    )
}

export default Footer
