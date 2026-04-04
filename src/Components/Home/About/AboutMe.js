import React, { useContext } from 'react';
import image from '../../../Images/asiff.png'
import { FaArrowDown, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { modeContext } from '../../../Context/ModeContext';


const AboutMe = () => {
    //use context
    const { mode } = useContext(modeContext)
    return (
        <div>
            <div className={mode ? "hero lg:w-11/12 p-4 mx-auto rounded-2xl shadow-lg bg-neutral text-white" : "hero lg:w-11/12 p-4 mx-auto rounded-2xl shadow-lg bg-white"}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 mx-10'>
                        <img data-aos="zoom-in" src={image} className="lg:11/12 mx-auto rounded-lg shadow-2xl" alt='img' />
                    </div>
                    <div className='lg:w-1/2 text-left'>
                        <h1 data-aos={mode ? '' : "fade-up"} className='text-4xl lg:mt-6 font-bold'>About Me</h1>
                        <p data-aos={mode ? '' : "fade-up"} className={mode ? 'text-success font-semibold ' : 'text-accent font-semibold '}>My Story</p>
                        <p data-aos="fade-up" className='mt-6'>  WordPress & Shopify Developer with 3+ years of experience building high-performance, scalable, and user-friendly websites. Specialized in custom WordPress theme and plugin development, Elementor customization, and advanced website optimization (speed, SEO, and security). 

                        </p>
                        <p data-aos="fade-up" className='my-2'>
                            Experienced in Shopify development for the past 1.5+ years, including theme customization, Liquid templating, and eCommerce store optimization. Also skilled in Webflow and Squarespace for modern, responsive website solutions. 

                            Passionate about creating clean, efficient, and visually engaging websites, while continuously improving skills in modern JavaScript and web animation techniques.
                        </p>

                        <div>
                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 mt-8 mb-2'>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Age: <span className={mode ? 'text-white' : 'text-neutral'}>26</span></h3>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Resident: <span className={mode ? 'text-white' : 'text-neutral'}>Bangladesh</span></h3>
                            </div>

                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 my-2'>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Status: <span className={mode ? 'text-white' : 'text-neutral'}>Available</span></h3>

                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Address: <span className={mode ? 'text-white' : 'text-neutral'}>Dhaka</span></h3>

                            </div>

                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 my-2'>
                                <div className='flex items-center'>
                                    <span className={mode ? 'text-success font-bold' : 'text-accent font-bold'}><FaEnvelope /></span>
                                    <span className={mode ? 'text-white mx-2 font-bold' : ' mx-2 text-neutral font-bold'}>mdasifiqbal141@gmail.com</span>
                                </div>

                                <div className='flex items-center'>
                                    <h3 className={mode ? 'text-success font-bold mr-1' : 'text-accent font-bold mr-1'}><FaPhoneAlt /> </h3>
                                    <span className={mode ? 'text-white font-bold' : 'text-neutral font-bold'}>+8801913346795</span>
                                </div>

                            </div>

                        </div>
{/* 
                        <div data-aos={mode ? '' : "zoom-in"} className='mt-10 mb-4 flex justify-between'>
                            <div className=''>
                                <h1 className={mode ? 'text-5xl text-success' : 'text-5xl text-accent'}>50+</h1>
                                <p className='font-semibold'>Live projects</p>
                            </div>
                            <div className=''>
                                <h1 className={mode ? 'text-5xl text-success' : 'text-5xl text-accent'}>10+</h1>
                                <p className='font-semibold'>Feedbacks</p>
                            </div>
                            <div className=''>
                                <h1 className={mode ? 'text-5xl text-success' : 'text-5xl text-accent'}>10k+</h1>
                                <p className='font-semibold'>Line codes</p>
                            </div>
                        </div> */}

                        <a href='#portfolio' className={mode ? "btn mt-8 w-full mx-auto btn-success text-white" : "btn mt-8 w-full mx-auto btn-accent text-white"}>Portfolio <FaArrowDown className='mx-2' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;