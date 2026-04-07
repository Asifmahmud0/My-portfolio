import React, { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const { mode } = useContext(modeContext);

    // Group 1: CMS & Optimization (Left Column)
    const leftTechSkills = [
        { name: "Elementor / ACF", value: 95 },
        { name: "SEO & Speed Optimization", value: 85 },
        { name: "Security & Debugging", value: 85 },
        { name: "Webflow / Squarespace", value: 75 },
    ];

    // Group 2: Languages (Right Column)
    const rightTechSkills = [
        { name: "HTML & CSS", value: 95 },
        { name: "PHP", value: 80 },
        { name: "JavaScript", value: 80 },
        { name: "Liquid", value: 80 },
    ];

    const categories = [
        { name: "WordPress Development", value: 90 },
        { name: "Shopify Development", value: 80 },
        { name: "Technical SEO", value: 75 },
    ];

    // Helper function to render a skill bar with 15px font
    const renderSkill = (skill, index) => (
        <div key={index} className="w-full">
            <div className="flex justify-between mb-2">
                <span className="font-bold text-[15px]">{skill.name}</span> 
                <span className="text-base font-semibold opacity-70">{skill.value}%</span>
            </div>
            <progress 
                className={mode ? "progress progress-success bg-gray-700 h-3 w-full" : "progress progress-accent h-3 w-full"} 
                value={skill.value} 
                max="100"
            ></progress>
        </div>
    );

    return (
        /* RESTORED: Changed w-full back to lg:w-11/12 mx-auto */
        <div className={mode ? 'bg-neutral p-6 rounded-xl shadow-md lg:w-11/12 mx-auto' : 'bg-white shadow-md p-6 rounded-xl lg:w-11/12 mx-auto'}>
            
            <div className="px-2 lg:px-6">
                <h1 data-aos="fade-up" className={mode ? 'text-5xl text-white font-bold' : 'text-5xl font-bold'}>My Skills</h1>
                <p data-aos="fade-up" className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>Technical Expertise</p>

                <div className='mt-8 mb-10'>
                    <div className="hero">
                        {/* Keeps cards stretching to fill the 11/12 container without extra internal space */}
                        <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-stretch gap-6 w-full max-w-none p-0">
                            
                            {/* RIGHT SECTION (Skill Bars) */}
                            <div data-aos="zoom-in" className={mode ? 'bg-base-neutral text-white p-10 w-full lg:w-3/5 shadow-xl rounded-xl' : 'bg-base-100 p-10 w-full lg:w-3/5 shadow-2xl rounded-xl'}>
                                <div className='flex flex-col md:flex-row gap-10 md:gap-16'>
                                    <div className='flex-1 space-y-6'>
                                        {leftTechSkills.map((skill, index) => renderSkill(skill, index))}
                                    </div>
                                    <div className='flex-1 space-y-6'>
                                        {rightTechSkills.map((skill, index) => renderSkill(skill, index))}
                                    </div>
                                </div>
                            </div>

                            {/* LEFT SECTION (Radial Circles) */}
                            <div className={mode ? "card flex w-full lg:w-2/5 shadow-2xl bg-neutral text-white" : "card flex w-full lg:w-2/5 shadow-xl bg-base-100"}>
                                <div data-aos="zoom-out" className="card-body justify-center p-10">
                                    {categories.map((cat, index) => (
                                        <div key={index} className='flex items-center mb-8 last:mb-0'>
                                            <div 
                                                className={mode ? "radial-progress text-success border-4 border-transparent" : "radial-progress text-accent border-4 border-transparent"} 
                                                style={{ 
                                                    "--value": cat.value, 
                                                    "--size": "5rem", 
                                                    "--thickness": "6px" 
                                                }}
                                                role="progressbar"
                                            >
                                                <span className="text-sm font-bold">{cat.value}%</span>
                                            </div>
                                            <div className='ml-4'>
                                                <h4 className='text-lg font-extrabold leading-tight'>{cat.name}</h4>
                                            </div>
                                        </div>
                                    ))}
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