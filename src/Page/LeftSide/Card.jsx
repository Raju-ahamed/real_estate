
import './card.css'
import AOS from 'aos'; // Make sure this is imported
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = ({ data }) => {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                offset: 200,
            });
            AOS.refresh();
        }, 100);
    }, [])
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="property-card">
            <div className="card-image-wrapper">
                <img src={data.image} alt={data.estate_title} className="card-image" />
                <span className={`status-badge ${data.status}`}>
                    {data.status}
                </span>
            </div>

            {/* Content Section */}
            <div className="card-content">
                <p className="segment-name">{data.segment_name}</p>
                <h3 className="estate-title">{data.estate_title}</h3>

                <div className="location-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>{data.location}</span>
                </div>

                <button className="view-btn">
                    {data.view_property_button}
                </button>
            </div>
        </div>

    );
};

export default Card;