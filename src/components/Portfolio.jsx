import React, { useState } from 'react'

function Portfolio() {
    const [selectedTitle, setSelectedTitle] = useState('all');

    const titlecontent = {
        all: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-1.jpg" alt="portfolio-1" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-2.jpg" alt="portfolio-2" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-3.jpg" alt="portfolio-3" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-4.jpg" alt="portfolio-4" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-5.jpg" alt="portfolio-5" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-6.jpg" alt="portfolio-6" />
            </>
        ),
        app: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-1.jpg" alt="portfolio-1" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-3.jpg" alt="portfolio-3" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-5.jpg" alt="portfolio-5" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-6.jpg" alt="portfolio-6" />
            </>
        ),
        development: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-1.jpg" alt="portfolio-1" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-4.jpg" alt="portfolio-4" />
            </>
        ),
        marketing: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-2.jpg" alt="portfolio-2" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-3.jpg" alt="portfolio-3" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-4.jpg" alt="portfolio-4" />
            </>
        ),
        software: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-2.jpg" alt="portfolio-2" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-3.jpg" alt="portfolio-3" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-6.jpg" alt="portfolio-6" />
            </>
        ),
        uxdesign: (
            <>
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-4.jpg" alt="portfolio-4" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-5.jpg" alt="portfolio-5" />
                <img src="https://exomac.jamstacktemplates.dev/images/portfolio/portfolio-6.jpg" alt="portfolio-6" />
            </>
        )
    };

    const handleTitleClick = (title) => {
        setSelectedTitle(title)
    }

    
    return (
        <div>
            <div className='px-[15px] mx-auto container mb-[40px] sm:mb-[100px]'>
                <div className='flex flex-col md:flex-row justify-between' >
                    <div className='mb-[30px] w-5/12'>
                        <div className='flex flex-row mb-[25px]'>
                            <div className='w-[70px] mt-6 h-[2px] bg-[#1292ee]'></div>
                            <p className='text-[18px] text-paragraphlight pl-[15px]'>Portfolios</p>
                        </div>
                        <p className='text-[32px] font-medium'>Selected Works.</p>
                    </div>
                    <div>
                        <ul className='flex flex-col sm:flex-row px-[15px] mb-[65px] text-paragraphlight '>
                            <li >
                                <button onClick={() => handleTitleClick('all')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out   ${selectedTitle === 'all' ? 'text-primary' : ''
                                    }`}>
                                    All
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTitleClick('app')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out  ${selectedTitle === 'app' ? 'text-primary' : ''}`}>
                                    App
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTitleClick('development')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out  ${selectedTitle === 'development' ? 'text-primary' : ''}`}>
                                    Development
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTitleClick('marketing')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out  ${selectedTitle === 'marketing' ? 'text-primary' : ''}`}>
                                    Marketing
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTitleClick('software')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out  ${selectedTitle === 'software' ? 'text-primary' : ''}`}>
                                    Software
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTitleClick('uxdesign')} className={`text-[16px] font-normal py-[5px] px-[15px] hover:text-primary transition duration-300 ease-in-out  ${selectedTitle === 'uxdesign' ? 'text-primary' : ''}`}>
                                    UX Design
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3'>
                    {selectedTitle === 'all' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                    {selectedTitle === 'app' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                    {selectedTitle === 'development' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                    {selectedTitle === 'marketing' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                    {selectedTitle === 'software' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                    {selectedTitle === 'uxdesign' && (
                        <>
                            {titlecontent[selectedTitle]}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
