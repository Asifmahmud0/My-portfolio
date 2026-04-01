import React, { useContext } from 'react';
import image from '../../../Images/126841642_2749445481961165_3654500392572136334_n.jpg'
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
                        <p data-aos="fade-up" className='mt-6'>I'm Sezan Ahmed. Recently graduated from varendra university in Dept. of CSE. As a CSE student, I'm very passionate about web development and recently completed a web development course.
                        </p>
                        <p data-aos="fade-up" className='my-2'>
                            I wanted to start my career as a junior web developer. I am proficient in HTML, CSS, bootstrap, tailwind, JavaScript, and react.JS and have a decent experience in node.JS, express.JS, and mongo DB.
                        </p>

                        <div>
                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 mt-8 mb-2'>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Age: <span className={mode ? 'text-white' : 'text-neutral'}>24</span></h3>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Resident: <span className={mode ? 'text-white' : 'text-neutral'}>Bangladesh</span></h3>
                            </div>

                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 my-2'>
                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Status: <span className={mode ? 'text-white' : 'text-neutral'}>Available</span></h3>

                                <h3 className={mode ? 'text-success font-bold' : 'text-accent font-bold'}>Address: <span className={mode ? 'text-white' : 'text-neutral'}>Rajshahi</span></h3>

                            </div>

                            <div data-aos={mode ? '' : "fade-up"} className='grid grid-col-1 md:grid-cols-2 md:gap-44 my-2'>
                                <div className='flex items-center'>
                                    <span className={mode ? 'text-success font-bold' : 'text-accent font-bold'}><FaEnvelope /></span>
                                    <span className={mode ? 'text-white mx-2 font-bold' : ' mx-2 text-neutral font-bold'}>sezan.ahmed@gmail.com</span>
                                </div>

                                <div className='flex items-center'>
                                    <h3 className={mode ? 'text-success font-bold mr-1' : 'text-accent font-bold mr-1'}><FaPhoneAlt /> </h3>
                                    <span className={mode ? 'text-white font-bold' : 'text-neutral font-bold'}>+8801533648519</span>
                                </div>

                            </div>

                        </div>

                        <div data-aos={mode ? '' : "zoom-in"} className='mt-10 mb-4 flex justify-between'>
                            <div className=''>
                                <h1 className={mode ? 'text-5xl text-success' : 'text-5xl text-accent'}>20+</h1>
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
                        </div>

                        <a href='#portfolio' className={mode ? "btn mt-8 w-full mx-auto btn-success text-white" : "btn mt-8 w-full mx-auto btn-accent text-white"}>Portfolio <FaArrowDown className='mx-2' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;