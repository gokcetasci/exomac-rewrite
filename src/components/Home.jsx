import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { TbCircleDashed } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";

function Home() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setShowFirstText(true);
    }, 1500);

    const secondTextTimeout = setTimeout(() => {
      setShowSecondText(true);
    }, 2000);

    const thirdTextTimeout = setTimeout(() => {
      setShowThirdText(true);
    }, 2500);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
    };
  }, []);


  return (
    <div className='relative'>
      
      <Slider />
    
      <div className='absolute top-28 lg:top-40 mt-0  lg:mt-[40px] ml-5 md:ml-[60px] lg:ml-[120px]'>
        {showFirstText && (

          <p className={`text-[30px] lg:text-[72px] text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
            Designing awesome <br /> brands & experiences
          </p>
        )}
        {showSecondText && (

          <p className={`text-[14px] lg:text-[20px] text-white lg:w-[650px]  ${showSecondText ? 'fade-in' : ''}`}>
            We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.
          </p>
        )}
        {showThirdText && (

          <div className='flex flex-row'>
            <div className={`mt-[60px] mx-[5px] text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
              <button className='text-white hover:text-white  hover:bg-black transition duration-300 ease-in-out  text-[14px]   md:text-[16px] font-medium h-[40px] md:h-[52px] flex justify-center items-center px-5 sm:px-10 bg-primary rounded-md '>
                Get Started
              </button>
            </div>
            <div className={`mt-[60px] mx-[5px]  text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
              <button className='text-white hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out text-[14px] md:text-[16px] font-medium h-[40px] md:h-[52px]  flex justify-center items-center px-5 sm:px-10  rounded-md border border-white '>
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=' flex flex-col items-center justify-center container mx-auto mb-[20px] sm:mb-[70px]'>
        <div className=' flex items-center  pt-[40px] md:pt-[90px] mb-[130px]'>
          <div className=' flex flex-col items-center justify-center'>
            <p className='text-[30px] sm:text-[42px] text-center text-paragraph font-medium tracking-wide '>We are a full-service creative agency</p>
            <p className='text-[18px] mx-auto lg:mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[530px] text-center px-8 font-normal'>Our team of designers, developers and creatives are perfectionists who love what they do and love</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center ml-auto md:ml-[100px]'>
          <div className='relative w-screen md:w-[770px] px-5 md:px-[15px]'>
            <img
              src="https://exomac.jamstacktemplates.dev/images/about/home-one-about/home_agency_about_2.jpg"
              alt=""
              className='rounded-lg z-[9] hover:ease-in-out transform hover:scale-105 transition-transform duration-500 ease-in-out max-w-full w-[200px] md:w-auto	'
            />
            <img
              src="https://exomac.jamstacktemplates.dev/images/about/home-one-about/home_agency_about_1.jpg"
              alt=""
              className='rounded-lg absolute bottom-20  left-40 md:left-60 transition-transform duration-500 ease-in-out transform hover:scale-105 max-w-full	w-[200px] md:w-auto'
            />
          </div>
          <div className='flex px-[15px] mt-[40px] lg:mt-0 w-screen md:w-[550px]'>
            <div className='w-[420px]'>
              <div className='flex flex-row mb-[25px]'>
                <div className='w-[70px] mt-6 h-[2px] bg-[#1292ee]'></div>
                <p className='text-[18px] text-paragraphlight pl-[15px]'>Every day brings new challenges</p>
              </div>
              <div className='flex flex-col '>
                <h1 className='text-[26px] md:text-[32px] text-paragraph font-bold mb-[30px]'>Creative agency focused on vision, product and people</h1>
                <p className='text-paragraphlight text-[16px] leading-loose font-medium'>We're boldly individual, always original and refreshingly easy-going. Our vision, passion and ideas are matched with focus, expertise and flair.</p>
              </div>
              <div className='mt-[40px]'>
                <button className='text-white hover:text-white hover:bg-black transition duration-300 ease-in-out text-[16px] font-medium h-[52px] flex justify-center items-center px-10 bg-primary rounded-md '>
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f8faff] container mx-auto px-[15px] md:px-0'>
        <div className='pt-[40px] lg:pt-[90px] mb-[50px]'>
          <div className=' flex flex-col items-center justify-center'>
            <p className='text-[30px] md:text-[42px] text-paragraph font-medium tracking-wide text-center'>We create a unique action plan for brands
            </p>
            <p className='text-[18px] mx-auto lg:mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[600px] text-center px-8 font-normal'>Get your company heading in the right direction with our digital marketing strategist

            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 mx-[140px] mb-[170px] container mx-auto'>
          <div className='py-[50px] border w-full md:w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl ransition duration-300 ease-in-out'>
            <div>
              <TbCircleDashed className='w-[50px] h-[50px] text-primary mb-[35px]' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-[20px] font-bold'>Branding</p>
              <p className='text-[16px] text-paragraphlight text-center mt-[25px]'>First impressions count! Make sure your brand works for you. We offer digital marketing.</p>
            </div>
            <div className='mt-[35px] text-[16px] text-primary'>
              <a href="">Learn More</a>
            </div>

          </div>
          <div className='py-[50px] border w-full md:w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl ransition duration-300 ease-in-out'>
            <div>
              <MdOutlineDesignServices className='w-[50px] h-[50px] text-primary mb-[35px]' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-[20px] font-bold'>UX Design</p>
              <p className='text-[16px] text-paragraphlight text-center mt-[25px]'>First impressions count! Make sure your brand works for you. We offer digital marketing.</p>
            </div>
            <div className='mt-[35px] text-[16px] text-primary'>
              <a href="">Learn More</a>
            </div>

          </div>
          <div className='py-[50px] border w-full md:w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out'>
            <div>
              <PiStrategy className='w-[50px] h-[50px] text-primary mb-[35px]' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-[20px] font-bold'>Strategy</p>
              <p className='text-[16px] text-paragraphlight text-center mt-[25px]'>First impressions count! Make sure your brand works for you. We offer digital marketing.</p>
            </div>
            <div className='mt-[35px] text-[16px] text-primary'>
              <a href="">Learn More</a>
            </div>

          </div>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row items-center justify-center w-screen container  mx-auto mb-[40px]'>
        <div className='relative w-screen mx-auto  md:w-[770px] px-0 sm:px-[15px]'>
          <img
            src="https://exomac.jamstacktemplates.dev/images/skill/skill-2.jpg"
            alt=""
            className='rounded-lg z-[9] hover:ease-in-out transform hover:scale-105 transition-transform duration-500 ease-in-out max-w-full w-[200px] sm:w-auto h-[200px] sm:h-auto'
          />
          <img
            src="https://exomac.jamstacktemplates.dev/images/skill/skill-1.jpg"
            alt=""
            className='rounded-lg absolute bottom-20  left-40 sm:left-60 transition-transform duration-500 ease-in-out transform hover:scale-105 max-w-full	w-[200px] sm:w-auto'
          />
        </div>
        <div className=' flex container mx-auto px-[15px] w-screen sm:w-[550px] mt-8 xl:mt-0'>
          <div className='w-screen sm:w-[520px]'>
            <div className='flex flex-row mb-[25px]'>
              <div className='w-[70px] mt-6 h-[2px] bg-[#1292ee]'></div>
              <p className='text-[18px] text-paragraphlight pl-[15px]'>Your success is our success</p>
            </div>

            <h1 className='text-[32px] text-paragraph font-bold mb-[30px]'>Web design, marketing & SEO solutions that get results</h1>


            <div id='uxdesignpercent' className='mb-10'>
              <div className='flex flex-row mb-4 items-center justify-between text-gray-600 '>
                <p className='text-[16px]  font-normal'>UX Design</p>
                <p className='text-[16px] font-normal mr-8'>81%</p>
              </div>
              <div className='w-full rounded-md h-[4px] bg-[#748494]'>
                <div className='relative rounded-md w-[81%] h-[4px] bg-gradient-to-r from-[#0d8abc] to-[#61fded]'>
                  <div className='absolute -right-4 -top-3 w-[25px] h-[25px] rounded-full flex items-center justify-center ring-1 ring-[#61fded]'>
                    <div className=' w-[8px] h-[8px] rounded-full bg-white ring-4 ring-[#61fded]'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='marketingpercent' className='mb-10'>
              <div className='flex flex-row mb-4 items-center justify-between text-gray-600 '>
                <p className='text-[16px]  font-normal'>Marketing</p>
                <p className='text-[16px] font-normal mr-16'>72%</p>
              </div>
              <div className='w-full rounded-md h-[4px] bg-[#748494]'>
                <div className='relative rounded-md w-[72%] h-[4px] bg-gradient-to-r from-[#d45529] to-[#eece90]'>
                  <div className='absolute -right-4 -top-3 w-[25px] h-[25px] rounded-full flex items-center justify-center ring-1 ring-[#eece90]'>
                    <div className=' w-[8px] h-[8px] rounded-full bg-white ring-4 ring-[#eece90]'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='webdesignpercent' className='mb-10'>
              <div className='flex flex-row mb-4 items-center justify-between text-gray-600 '>
                <p className='text-[16px]  font-normal'>Web Desing</p>
                <p className='text-[16px] font-normal mr-8'>81%</p>
              </div>
              <div className='w-full rounded-md h-[4px] bg-[#748494]'>
                <div className='relative rounded-md w-[81%] h-[4px] bg-gradient-to-r from-[#f646a9] to-[#5c51ff]'>
                  <div className='absolute -right-4 -top-3 w-[25px] h-[25px] rounded-full flex items-center justify-center ring-1 ring-[#5c51ff]'>
                    <div className=' w-[8px] h-[8px] rounded-full bg-white ring-4 ring-[#5c51ff]'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='developmentpercent' className='mb-10'>
              <div className='flex flex-row mb-4 items-center justify-between text-gray-600 '>
                <p className='text-[16px]  font-normal'>Development</p>
                <p className='text-[16px] font-normal mr-8'>81%</p>
              </div>
              <div className='w-full rounded-md h-[4px] bg-[#748494]'>
                <div className='relative rounded-md w-[81%] h-[4px] bg-gradient-to-r from-[#e77654] to-[#e5529a]'>
                  <div className='absolute -right-4 -top-3 w-[25px] h-[25px] rounded-full flex items-center justify-center ring-1 ring-[#e5529a]'>
                    <div className=' w-[8px] h-[8px] rounded-full bg-white ring-4 ring-[#e5529a]'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
