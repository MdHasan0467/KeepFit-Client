import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://dungcutheduc.vn/images/contents/fitness.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-start">Action is the foundational key to all success.</h1>
                <button className="self-center px-4 py-3 font-semibold bg-orange-700 text-white rounded-full flex justify-start">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;