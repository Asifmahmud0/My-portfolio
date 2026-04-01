import React, { useContext, useEffect, useState } from 'react';
import { FaArrowDown, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { modeContext } from '../../../Context/ModeContext';
import img from '../../../Images/Capture3.PNG'
import img2 from '../../../Images/Capture5.PNG'
import './Header.css'


const Header = () => {
    const { mode } = useContext(modeContext)




    const [loop, setLoop] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {

        let i = loop % toRotate.length;
        let fulltext = toRotate[i]
        let updateText = deleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1)
        setText(updateText);

        if (deleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!deleting && updateText === fulltext) {
            setDeleting(true)
            setDelta(period)
        }

        else if (deleting && updateText === '') {

            setDeleting(false)
            setLoop(loop + 1)
            setDelta(500)
        }


    }

    return (
        <div className='lg:mt-10'>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        {
                            mode ?
                                <div className="avatar">
                                    <div className="w-40 border-8 shadow-lg border-neutral rounded-full">
                                        <img src={img2} alt="img" />

                                    </div>

                                </div>
                                :
                                <div data-aos="zoom-in" className=" avatar">
                                    <div className="w-40 border-8 shadow-lg border-white rounded-full">
                                        <img src={img} alt="img" />
                                    </div>
                                </div>
                        }
                        <div className='my-8'>
                            <h1 data-aos={mode ? '' : "fade-up"} className={mode ? 'text-3xl text-white font-extrabold' : 'text-3xl font-extrabold'}>SEZAN <span className={mode ? 'text' : 'text-accent'}>AHMED</span></h1>
                            <p className={mode ? 'text font-semibold' : 'text-accent font-semibold'}>I'm a <span>{text}</span> </p>
                            <div data-aos={mode ? '' : "zoom-in"} className='my-4 flex justify-center'>
                                <a href='https://www.linkedin.com/in/sezan-ahmed/' target={'_blank'} className={mode ? "btn btn-sm btn-circle bg-neutral shadow-xl border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1 hover:bg-base-200"}>
                                    <FaLinkedinIn className='text-blue-600'></FaLinkedinIn>
                                </a>
                                <a href='https://github.com/redoykhan28' target={'_blank'} className={mode ? "btn btn-sm btn-circle bg-neutral shadow-lg border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1 hover:bg-base-200"}>
                                    <GoMarkGithub className='text-accent'></GoMarkGithub>
                                </a>
                                <a href='#contact' className={mode ? "btn btn-sm btn-circle bg-neutral shadow-lg border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1 hover:bg-base-200"}>
                                    <FaRegEnvelope className={mode ? 'text-white' : 'text-black'}></FaRegEnvelope>
                                </a>
                            </div>

                            <div className='mt-8'>
                                <a href="#about" className="btn bg-transparent btn-sm btn-circle hover:bg-white border-0">
                                    <FaArrowDown className={mode ? 'text-success' : 'text-accent '}></FaArrowDown>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;