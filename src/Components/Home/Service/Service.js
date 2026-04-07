import React, { useContext } from 'react';
import { 
    FaDatabase, FaDesktop, FaPalette, FaRocket, 
    FaTools, FaLaptopCode, FaShoppingCart, FaWordpress, FaSearch 
} from 'react-icons/fa';
import { SiShopify } from 'react-icons/si'; // Better icon for Shopify
import { modeContext } from '../../../Context/ModeContext';

const Service = () => {
    const { mode } = useContext(modeContext);

    // 1. Create an array of all your services
    const servicesData = [
        {
            title: "WordPress Development",
            description: "Custom, scalable WordPress websites with clean structure and best practices.",
            icon: <FaWordpress />
        },
        {
            title: "Elementor Website Design",
            description: "Pixel-perfect Figma to Elementor conversion with full responsiveness.",
            icon: <FaDesktop />
        },
        {
            title: "WooCommerce Development",
            description: "Complete eCommerce setup, product pages, checkout optimization, payment integration.",
            icon: <FaShoppingCart />
        },
        {
            title: "Website Speed Optimization",
            description: "Improve Core Web Vitals, loading time, and overall performance (90+ PageSpeed).",
            icon: <FaRocket />
        },
        {
            title: "Bug Fixing & Maintenance",
            description: "Fix layout issues, plugin conflicts, and provide ongoing technical support.",
            icon: <FaTools />
        },
        {
            title: "Landing Page Design",
            description: "High-converting landing pages designed specifically for marketing and campaigns.",
            icon: <FaLaptopCode />
        },
        {
            title: "Shopify Store Development",
            description: "Build and customize Shopify stores from scratch using Liquid engine.",
            icon: <SiShopify />
        },
        {
            title: "Shopify Theme Customization",
            description: "Modify themes, sections, and layout logic using Shopify Liquid.",
            icon: <FaPalette />
        },
        {
            title: "SEO & Performance Basics",
            description: "On-page SEO setup, speed improvements, and technical SEO audits.",
            icon: <FaSearch />
        }
    ];

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center md:text-left'>
                <h1 className={mode ? 'text-5xl text-white font-bold' : 'text-5xl font-bold'}>Services</h1>
                <p className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>Services I provide</p>
            </div>

            {/* 2. Grid setup for 9 items */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={mode 
                            ? "card w-full text-left text-white bg-neutral shadow-xl hover:scale-105 transition-transform" 
                            : "card w-full text-left bg-base-100 shadow-xl hover:scale-105 transition-transform"
                        }
                    >
                        <div className="card-body">
                            <div className={mode ? 'text-4xl text-success mb-4' : 'text-4xl text-accent mb-4'}>
                                {service.icon}
                            </div>
                            <h2 className="card-title text-xl font-bold">{service.title}</h2>
                            <p className='text-sm opacity-80'>{service.description}</p>
                            <div className="card-actions mt-4 justify-start">
                                <a href='#contact' className={mode ? "btn btn-sm btn-success text-white" : "btn btn-sm btn-accent text-white"}>
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;