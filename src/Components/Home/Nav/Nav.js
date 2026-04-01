import React, { useContext } from 'react';
import { FaCloudDownloadAlt, FaMoon, FaSun } from 'react-icons/fa';
import { modeContext } from '../../../Context/ModeContext';

const Nav = () => {

    //use context
    const { mode, setMode } = useContext(modeContext)

    //for dark mode
    const toogleHandlerDark = () => {

        setMode(true)

    }
    //for light mode
    const toogleHandlerLight = () => {

        setMode(false)
        window.location.reload()
    }



    return (
        <div>
            <div className={mode ? "navbar px-4 bg-neutral text-white rounded-full w-9/12 mx-auto fixed z-40 shadow-lg" : "navbar px-4 bg-white rounded-full shadow-md w-9/12 mx-auto fixed z-40	"}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={mode ? "menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded-box w-52" : "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#services'>Service</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li><a href="https://drive.google.com/file/d/12t5iqjGm5MLATgoXH7xdtxrD-y_L9BJ-/view?usp=share_link" target={'_blank'} >Resume</a></li>

                        </ul>
                    </div>
                    <a href='#home' className="btn btn-ghost normal-case text-xl">Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a data-aos="zoom-in" className='menu' href='#home'>Home</a></li>
                        <li><a data-aos="zoom-in" className='menu' href='#about'>About</a></li>
                        <li><a data-aos="zoom-in" className='menu' href='#services'>Service</a></li>
                        <li><a data-aos="zoom-in" className='menu' href='#skills'>Skills</a></li>
                        <li><a data-aos="zoom-in" className='menu' href='#portfolio'>Portfolio</a></li>
                        <li><a data-aos="zoom-in" className='menu' href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        mode === true ?
                            <FaMoon onClick={toogleHandlerLight} className='text-xl cursor-pointer font-bold mx-6'></FaMoon>
                            :
                            <FaSun onClick={toogleHandlerDark} className='text-xl cursor-pointer font-bold mx-6'></FaSun>
                    }
                    <a href='https://drive.google.com/file/d/12t5iqjGm5MLATgoXH7xdtxrD-y_L9BJ-/view?usp=share_link' target={'_blank'} className={mode ? "btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white hidden lg:flex" : "btn btn-accent rounded-full hidden lg:flex text-white"}>Download resume <FaCloudDownloadAlt className='mx-2'></FaCloudDownloadAlt></a>
                </div>
            </div>
        </div>

    );
};

export default Nav;