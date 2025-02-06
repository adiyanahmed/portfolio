import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name='contact' className='h-full w-full bg-[#1a1639] sm:pt-[76px] pt-[36px] sm:pb-36 pb-16'>
            <div className='flex flex-col w-full  justify-center items-center'>
                <div className='max-w-[1000px] w-full px-8 sm:px-4'>
                    {/* Contact Header */}
                    <div className='sm:text-center pb-8'>
                        <p className='text-[#faa843] text-4xl font-bold inline border-b-4'>
                            Contact
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-7 px-8 sm:px-4 text-[#fccc7f]'>
                    {/* Left Section */}
                    <div>
                        <p className='sm:text-right text-2xl font-bold'>
                            I would love to hear from you! Feel free to reach out using of the following platforms:
                        </p>
                    </div>
                    {/* Right Section with Contact Info */}
                    <div>
                        <p>
                            <a
                                href="mailto:adiahmed@hotmail.com"
                                className='flex items-center text-[#fccc7f] text-xl py-2 hover:text-[#db6c79]'
                            >
                                <FaEnvelope className='mr-3' />
                                adiahmed@hotmail.com
                            </a>
                        </p>
                        <div className='flex flex-col '>
                            <a
                                href="https://www.linkedin.com/in/adiyan-ahmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center text-[#fccc7f] text-xl py-2 hover:text-[#db6c79]'
                            >
                                <FaLinkedin className='mr-3' />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/adiyanahmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center text-[#fccc7f] text-xl py-2 hover:text-[#db6c79]'
                            >
                                <FaGithub className='mr-3' />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
