import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { modeContext } from '../../../Context/ModeContext';

const PortfolioCard = ({ card }) => {
    const { img, project, description, id } = card

    const { mode } = useContext(modeContext)

    return (
        <div>
            <div className={mode ? "card w-96 mx-auto bg-neutral text-white shadow-xl" : "card w-96 mx-auto bg-base-100 shadow-xl"}>
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="text-sm">Web Design, Web development</h2>
                    <h2 className="card-title text-start">{project}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`} className={mode ? "btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500s text-white mt-4" : "btn btn-accent text-white mt-4"}>See Project</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;