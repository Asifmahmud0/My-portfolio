import React, { useContext } from 'react';
import { FaDatabase, FaDesktop, FaPalette } from 'react-icons/fa';
import { modeContext } from '../../../Context/ModeContext';

const Service = () => {

    const { mode } = useContext(modeContext)


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className={mode ? 'text-5xl text-white font-bold' : 'text-5xl font-bold'}>Services</h1>
            <p className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>Service I provide</p>

            <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className={mode ? "card w-96 text-left text-white mx-auto bg-neutral shadow-md" : "card w-96 text-left mx-auto bg-base-100 shadow-md"}>
                    <div className="card-body">
                        <h1 className={mode ? 'text-3xl text-success my-4' : 'text-3xl text-accent my-4'}><FaDesktop /></h1>
                        <h2 className="card-title">Frontend Development</h2>
                        <p>Providig the service of building the full responsive frontend website with touch of modern design</p>
                        <div className="card-actions mt-2 justify-start">
                            <a href='#contact' className={mode ? "btn btn-success text-white" : "btn btn-accent text-white"}>Hire Me</a>
                        </div>
                    </div>
                </div>

                <div className={mode ? "card w-96 text-left text-white mx-auto bg-neutral shadow-md" : "card w-96 text-left mx-auto bg-base-100 shadow-md"}>
                    <div className="card-body">
                        <h1 className={mode ? 'text-3xl text-success my-4' : 'text-3xl text-accent my-4'}><FaDatabase /></h1>
                        <h2 className="card-title">MERN-stack Development</h2>
                        <p>Providig the service of building the fully functional MERN based website with touch of modern design and functionality</p>
                        <div className="card-actions justify-start mt-2">
                            <a href='#contact' className={mode ? "btn btn-success text-white" : "btn btn-accent text-white"}>Hire Me</a>
                        </div>
                    </div>
                </div>

                <div className={mode ? "card w-96 text-left text-white mx-auto bg-neutral shadow-md" : "card w-96 text-left mx-auto bg-base-100 shadow-md"}>
                    <div className="card-body">
                        <h1 className={mode ? 'text-3xl text-success my-4' : 'text-3xl text-accent my-4'}><FaPalette /></h1>
                        <h2 className="card-title">UI?UX Design</h2>
                        <p>Providig the service of leatest and stylish web or mobile user interface design. Hire me to get the best touch for your website</p>
                        <div className="card-actions justify-start mt-2">
                            <a href='#contact' className={mode ? "btn btn-success text-white" : "btn btn-accent text-white"}>Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;