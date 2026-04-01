import React, { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';
import 'react-circular-progressbar/dist/styles.css';



const Skills = () => {

    const { mode } = useContext(modeContext)



    return (
        <div className={mode ? 'bg-neutral p-6 rounded-xl shadow-md lg:w-11/12 mx-auto' : 'bg-white shadow-md p-6 rounded-xl lg:w-11/12 mx-auto'}>
            <h1 data-aos="fade-up" className={mode ? 'text-5xl text-white font-bold' : 'text-5xl font-bold'}>My Skills</h1>
            <p data-aos="fade-up" className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>Skills I gain</p>

            <div className='mt-4'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div data-aos="zoom-in" className={mode ? 'bg-base-neutral text-white p-8 w-full lg:mx-12 shadow-2xl rounded-xl' : 'bg-base-100 p-8 w-full lg:mx-12 shadow-2xl rounded-xl'}>
                            <div className='flex justify-between flex-col lg:flex-row '>
                                <div className='lg:mr-20'>
                                    <h4>HTML</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="90" max="100"></progress>
                                </div>
                                <div>
                                    <h4>CSS</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="85" max="100"></progress>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row'>
                                <div>
                                    <h4>JavaScript</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="80" max="100"></progress>
                                </div>
                                <div>
                                    <h4>Tailwind</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="90" max="100"></progress>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row'>
                                <div>
                                    <h4>React.JS</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="85" max="100"></progress>
                                </div>
                                <div>
                                    <h4>Node.JS</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="65" max="100"></progress>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row'>
                                <div>
                                    <h4>Express.JS</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="70" max="100"></progress>
                                </div>
                                <div>
                                    <h4>MongoDB</h4>
                                    <progress className={mode ? "progress progress-success bg-white w-56" : "progress progress-accent w-56"} value="65" max="100"></progress>
                                </div>
                            </div>
                        </div>
                        <div className={mode ? "card flex lg:w-full shadow-2xl bg-neutral text-white" : "card flex lg:w-full shadow-2xl bg-base-100"}>
                            <div data-aos="zoom-out" className="card-body ">
                                <div className='flex items-center mt-2'>
                                    <div className={mode ? "radial-progress text-success" : "radial-progress text-accent"} style={{ "--value": 85 }}>85%</div>
                                    <h4 className=' text-md ml-2 lg:mx-3 font-bold mt-3'>Frontend Development</h4>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <div className={mode ? "radial-progress text-success" : "radial-progress text-accent"} style={{ "--value": 70 }}>70%</div>
                                    <h4 className=' text-md ml-2 lg:mx-3 font-bold mt-3'>Full-Stack Development</h4>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <div className={mode ? "radial-progress text-success" : "radial-progress text-accent"} style={{ "--value": 80 }}>80%</div>
                                    <h4 className=' text-md ml-2 lg:mx-3 font-bold mt-3'>UI/Ux Design</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;