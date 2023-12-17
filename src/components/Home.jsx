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
      <div className='absolute top-40 mt-[40px] ml-[120px]'>
        {showFirstText && (

          <p className={`text-[72px] text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
            Designing awesome <br /> brands & experiences
          </p>
        )}
        {showSecondText && (

          <p className={`text-[20px] text-white ${showSecondText ? 'fade-in' : ''}`}>
            We are an agency located in New York. We think strategy, craft design,<br /> develop digital and create motion. To forward your brand and business.
          </p>
        )}
        {showThirdText && (

          <div className='flex flex-row'>
            <div className={`mt-[60px] mx-[5px] text-[72px] text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
              <button className='text-white hover:text-white  hover:bg-black transition duration-300 ease-in-out text-[16px] font-medium h-[52px] flex justify-center items-center px-10 bg-primary rounded-md '>
                Get Started
              </button>
            </div>
            <div className={`mt-[60px] mx-[5px] text-[72px] text-white mb-10 leading-tight font-medium ${showFirstText ? 'fade-in' : ''}`}>
              <button className='text-white hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out text-[16px] font-medium h-[52px] flex justify-center items-center px-10  rounded-md border border-white '>
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='mb-[70px]'>
        <div className='pt-[90px] mb-[130px]'>
          <div className=' flex flex-col items-center justify-center'>
            <p className='text-[42px] text-paragraph font-medium tracking-wide'>We are a full-service creative agency</p>
            <p className='text-[18px] mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[530px] text-center px-8 font-normal'>Our team of designers, developers and creatives are perfectionists who love what they do and love</p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center ml-[100px]'>
          <div className='relative w-[770px] px-[15px]'>
            <img
              src="https://exomac.jamstacktemplates.dev/images/about/home-one-about/home_agency_about_2.jpg"
              alt=""
              className='rounded-lg z-[9] hover:ease-in-out transform hover:scale-105 transition-transform duration-500 ease-in-out'
            />
            <img
              src="https://exomac.jamstacktemplates.dev/images/about/home-one-about/home_agency_about_1.jpg"
              alt=""
              className='rounded-lg absolute bottom-20 left-60 transition-transform duration-500 ease-in-out transform hover:scale-105'
            />
          </div>
          <div className='px-[15px] w-[550px]'>
            <div className='w-[420px]'>
              <div className='flex flex-row mb-[25px]'>
                <div className='w-[70px] mt-4 h-[2px] bg-[#1292ee]'></div>
                <p className='text-[18px] text-paragraphlight pl-[15px]'>Every day brings new challenges</p>
              </div>
              <div>
                <h1 className='text-[32px] text-paragraph font-bold mb-[30px]'>Creative agency focused on vision, product and people</h1>
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
      <div className='bg-[#f8faff]'>
        <div className='pt-[90px] mb-[50px]'>
          <div className=' flex flex-col items-center justify-center'>
            <p className='text-[42px] text-paragraph font-medium tracking-wide'>We create a unique action plan for brands
            </p>
            <p className='text-[18px] mx-[380px] mt-[20px] text-paragraphlight leading-6 max-w-[600px] text-center px-8 font-normal'>Get your company heading in the right direction with our digital marketing strategist

            </p>
          </div>
        </div>
        <div className='flex flex-row gap-10 mx-[140px] mb-[100px]'>
          <div className='py-[50px] border w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl ransition duration-300 ease-in-out'>
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
          <div className='py-[50px] border w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl ransition duration-300 ease-in-out'>
            <div>
              <MdOutlineDesignServices className='w-[50px] h-[50px] text-primary mb-[35px]'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-[20px] font-bold'>UX Design</p>
              <p className='text-[16px] text-paragraphlight text-center mt-[25px]'>First impressions count! Make sure your brand works for you. We offer digital marketing.</p>
            </div>
            <div className='mt-[35px] text-[16px] text-primary'>
              <a href="">Learn More</a>
            </div>
            
          </div>
          <div className='py-[50px] border w-1/3 flex flex-col items-center justify-center px-[60px] hover:scale-105 hover:shadow-2xl ransition duration-300 ease-in-out'>
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
      <div className='flex flex-row items-center justify-center ml-[100px]'>
          <div className='relative w-[770px] px-[15px]'>
            <img
              src="https://exomac.jamstacktemplates.dev/images/skill/skill-2.jpg"
              alt=""
              className='rounded-lg z-[9] hover:ease-in-out transform hover:scale-105 transition-transform duration-500 ease-in-out'
            />
            <img
              src="https://exomac.jamstacktemplates.dev/images/skill/skill-1.jpg"
              alt=""
              className='rounded-lg absolute bottom-48 left-60 transition-transform duration-500 ease-in-out transform hover:scale-105'
            />
          </div>
          <div className='px-[15px] w-[550px]'>
            <div className='w-[420px]'>
              <div className='flex flex-row mb-[25px]'>
                <div className='w-[70px] mt-4 h-[2px] bg-[#1292ee]'></div>
                <p className='text-[18px] text-paragraphlight pl-[15px]'>Your success is our success</p>
              </div>
              <div>
                <h1 className='text-[32px] text-paragraph font-bold mb-[30px]'>Web design, marketing & SEO solutions that get results</h1>
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
  );
}

export default Home;
