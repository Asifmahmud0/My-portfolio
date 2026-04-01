import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { modeContext } from '../../../Context/ModeContext';
import image from '../../../Images/19197471-removebg-preview.png'

const Contact = () => {

    const { mode } = useContext(modeContext)

    return (
        <div>
            <div className={mode ? " py-6 bg-neutral text-white" : " py-6 bg-white"}>
                <h1 className='text-5xl font-bold'>Contact Me</h1>
                <p className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>Let's Talk about ideas</p>
                <div className="hero-content mt-10 flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <img src={image} className="lg:w-11/12 mx-auto" alt="" />
                    </div>
                    <div className={mode ? "card lg:w-1/2 mx-auto flex-shrink-0 w-full  bg-warning " : "card lg:w-1/2 mx-auto flex-shrink-0 w-full  bg-base-100"}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className={mode ? 'text-white' : "label-text"}>Name</span>
                                </label>
                                <input type="text" className="input text-black  shadow-lg bg-primary" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className={mode ? 'text-white' : "label-text"}>Email</span>
                                </label>
                                <input type="email" className="input  shadow-lg text-black  bg-primary" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className={mode ? 'text-white' : "label-text"}>Your Message</span>
                                </label>
                                <textarea className="textarea text-black shadow-lg bg-primary"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className={mode ? "btn btn-success text-white" : "btn btn-accent text-white"}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;