import React, { useState, useEffect } from 'react';
import Slider from './Slider';

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
    </div>
  );
}

export default Home;
