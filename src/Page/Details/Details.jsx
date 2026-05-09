import React from 'react';

const Details = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-900 bg-opacity-90 relative overflow-hidden">
            {/* Blurred Background Decorative Element */}
            <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl"></div>

            <div className="relative card lg:card-side bg-base-100 shadow-2xl w-full max-w-6xl border border-white/10 overflow-hidden">
                {/* Image Section */}
                <figure className="lg:w-1/2">
                    <img
                        src={property.image}
                        alt={property.estate_title}
                        className="h-full w-full object-cover"
                    />
                </figure>

                {/* Content Section */}
                <div className="card-body lg:w-1/2 bg-white/5 backdrop-blur-md text-white">
                    <div className="flex justify-between items-start">
                        <div className="badge badge-info gap-2 uppercase font-bold p-3">
                            {property.segment_name}
                        </div>
                        <div className="badge badge-outline text-success border-success">
                            For {property.status}
                        </div>
                    </div>

                    <h2 className="card-title text-4xl font-extrabold mt-2">
                        {property.estate_title}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        {property.description}
                    </p>

                    <div className="mt-6 space-y-2">
                        <p className="text-xl font-bold text-info">Price: {property.price}</p>
                        <p className="flex items-center gap-2">📍 {property.location}</p>
                        <p className="flex items-center gap-2">📏 {property.area}</p>
                    </div>

                    {/* Facilities List */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2 text-white/70 uppercase text-sm tracking-widest">Facilities</h3>
                        <div className="flex flex-wrap gap-2">
                            {property.facilities.map((facility, index) => (
                                <div key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                                    ✓ {facility}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="card-actions justify-end mt-10 gap-4">
                        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            {property.view_property_button}
                        </button>
                        <button className="btn btn-info shadow-[0_0_20px_rgba(0,195,255,0.5)] border-none">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;