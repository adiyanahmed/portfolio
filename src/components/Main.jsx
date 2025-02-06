import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePic from '../assets/pic.jpg'; 
import { Link } from 'react-scroll';

const Main = () => {
    return (
        <div name='main' className='w-full h-auto bg-[#1a1639] sm:pt-[76px] pt-[36px] pb-16'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full sm:px-4 pt-[100px] sm:pt-[76px]'>
                {/* Left Section */}
                <div className='flex flex-col justify-center sm:w-2/3'>
                    <h1 className='text-[#fa6e43] text-4xl sm:text-6xl font-bold'>Hi, I'm Adiyan.</h1>
                    <h2 className='font-bold text-2xl sm:text-3xl text-[#faa843]'>Welcome to my website.</h2>
                    <h2 className='font-bold text-2xl sm:text-3xl text-[#fccc7f]'>I'm a 4th year Computer Engineering student.</h2>
                    <p className='sm:text-1xl text-[#fccc7f] py-4 max-w-[600px]'>
                        I am currently pursuing my Bachelor's degree at McMaster University.
                    </p>
                    <p className='sm:text-1xl text-[#fccc7f] max-w-[600px]'>
                        You can find more information about me below.
                    </p>
                    <div>
                        <Link to="resume" smooth={true} duration={500} offset={-76}>
                            <button className='text-white hover:bg-[#db6c79] hover:border-[#db6c79] flex items-center border-2 px-4 py-3 my-2'>
                                View Resume <HiArrowNarrowRight className='ml-2' />
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Right Section */}
                <div className='sm:w-1/3 flex justify-center items-center mt-8 sm:mt-0'>
                <img
    src={ProfilePic}
    alt="Profile"
    className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-4 border-[#fa6e43] shadow-lg object-cover object-[center_top]"
/>


                </div>
            </div>
        </div>
    );
};

export default Main;
