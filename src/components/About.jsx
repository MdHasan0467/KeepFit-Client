import React from 'react';
import img from '../Assets/Images/img2.jpg'

const About = () => {
    return (
        <div className="lg:mx-20 my-10">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-end'>
                <img className='h-96 w-72' src={img} alt="" />
            </div>
            <div className='mx-10 '>
                <div className='mt-16'>
                <h1 className='uppercase text-start text-3xl font-bold'>We are Squat</h1>
                <h2 className='uppercase text-start text-3xl font-bold'>Here is who we are</h2>
                <p className='text-start my-7'>
                For those times when you think you can’t finish your workout, or you don’t want to workout at all, it can help to have some pick-me-ups. So, whether you are deadlifting at home or off to the gym for some much needed cardio, these 50 motivational workout quotes will give you that extra push needed to crush your goals.
                </p>
                </div>
                <button className='uppercase flex justify-start'>
                <span className='bg-orange-500 rounded-full px-1'>- Fi</span>
                nd out more
                </button>
            </div>
        </div>
        </div>
    );
};

export default About;