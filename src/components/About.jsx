import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-auto bg-[#1a1639] sm:pt-[100px] pt-[36px] pb-10' >

            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div className='max-w-[1000px] w-full px-8 sm:py-8'>
                    <div className='sm:text-center pb-8'>
                        <p className='text-[#faa843] text-4xl font-bold inline border-b-4'>
                            About
                        </p>
                    </div>                    
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-7 px-8 sm:px-4 text-[#fccc7f] ' >
                    <div>
                        <p className='sm:text-right text-2xl font-bold'>
                            My name is Adiyan, nice to meet you. I created this website portfolio to further my knowledge on web development. Please take a look around :)
                        </p>
                    </div>
                    <div>
                        <p>
                            I am an undergraduate student at McMaster University, majoring in Computer Engineering.
                            My interests lie in Computer Architecture and ASIC Design, and I am looking to pursue a career in the VLSI industry. 
                        </p>
                        <p> 
                            I have previously interned at AMD on the DFT CAD team, where I help in maintaining our Scan Insertion flow,
                            and worked on the development of new tools with the aim of minimizing DPPM. You can view an outline of my previous
                            work experience in my resume below.                   
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About