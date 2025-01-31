import React from 'react';

const Resume = () => {
    return (
        <div id="resume" name="resume" className="h-full w-full bg-[#1a1639] py-16">
            <div className="max-w-[1000px] mx-auto px-8">
                {/* Resume Header */}
                <div className="text-center pb-8 w-full">
                    <p className="text-[#faa843] text-4xl font-bold inline border-b-4">
                        Resume
                    </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-10">
                    <h2 className="text-[#faa843] text-3xl font-semibold border-b-2 pb-2">Technical Skills</h2>

                    <div className="text-[#fccc7f] mt-4">
                        <p className="text-2xl font-semibold">Languages:</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                            <li>SystemVerilog</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C Shell</li>
                            <li>Bash</li>
                            <li>Tcl</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </div>

                    <div className="text-[#fccc7f] mt-6">
                        <p className="text-2xl font-semibold">Hardware:</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                            <li>Arduino</li>
                            <li>Raspberry Pi</li>
                            <li>ARM Microcontroller</li>            
                        </ul>
                    </div>

                    <div className="text-[#fccc7f] mt-6">
                        <p className="text-2xl font-semibold">Software:</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                            <li>FusionCompiler</li>
                            <li>Tessent TestKompress</li>
                            <li>Intel Quartus</li>
                            <li>ModelSim</li>
                            <li>LTSpice</li>
                        </ul>
                    </div>

                    <div className="text-[#fccc7f] mt-6">
                        <p className="text-2xl font-semibold">Other Technologies:</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                            <li>Linux</li>
                            <li>Git, GitHub</li>                            
                            <li>Perforce</li>
                            <li>ReactJS</li>
                            <li>Selenium WebDriver</li>
                            <li>JIRA, Confluence</li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-10">
                    <h2 className="text-[#faa843] text-3xl font-semibold border-b-2 pb-2">Education</h2>
                    <p className="text-[#fccc7f] mt-4">
                        <strong>McMaster University</strong> - Bachelor of Engineering (B.Eng), Computer Engineering <br />
                        <span className="text-sm italic">September 2020 – Present</span><br />
                        ▪ Enrolled in Level 4 of the 5-year Computer Engineering Co-op program.<br />
                        ▪ Achieved a 9.9/12.0 cGPA (3.5/4.0 cGPA).<br />
                        ▪ Dean’s Honour List all semesters.<br />
                        ▪ Awarded 2020 McMaster Entrance Scholarship for outstanding academic achievements.<br />
                        ▪ McMaster Engineering Society (MES) Mentor 2021-2022.<br />
                    </p>
                </div>

                {/* Work Experience */}
                <div className="mb-10">
                    <h2 className="text-[#faa843] text-3xl font-semibold border-b-2 pb-2">Work Experience</h2>

                    <div className="text-[#fccc7f] mt-4">
                        <p><strong>ASIC Design (DFT) Co-op</strong> - AMD</p>
                        <p className="text-sm italic">May 2023 – August 2024 | Markham, ON</p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Worked on the development, optimization, and support of the Scan Insertion flow within the DFT CAD team, enhancing the efficiency and reliability of the process.</li>
                            <li>Gained in-depth expertise in DFT methodologies, including Scan Insertion, ATPG, DPPM, and Fault Models, while interfacing with top-tier EDA tools like Synopsys FusionCompiler and Tessent TestKompress.</li>
                            <li>Authored and integrated scripts in C Shell, Tcl, Python, and Perl, to streamline the DFT flow development and EDA tool integration.</li>
                            <li>Spearheaded the development of an innovative React-based web application that forecasts DPPM metrics for upcoming System on Chips (SOCs) using foundry data and the William-Brown model, now a tool adopted by various teams company-wide.</li>
                            <li>Played a pivotal role in the ASIC design lifecycle, liaising with Synthesis and Physical Design (PD) teams to fulfill design specifications, and partnered with SOC teams to troubleshoot and resolve issues within DFT Scan Flow implementations.</li>
                            <li>Managed a regression area to test and verify updates to the flow, and validated QoR adherence for new releases of DFT tools.</li>
                            <li>Leveraged Linux as the primary platform for development activities and utilized Perforce for robust version control.</li>
                        </ul>
                    </div>

                    <div className="text-[#fccc7f] mt-4">
                        <p><strong>Software Development Engineer in Test Co-op</strong> - Public Safety Canada</p>
                        <p className="text-sm italic">May 2022 – August 2022 | Ottawa, ON</p>
                        <ul className="list-disc ml-5 mt-2">
                        <li>Engaged in the development, programming, debugging, and implementation of the test automation framework for an internal application using Java with the Selenium WebDriver Framework.</li>
                        <li>Implemented and edited methods in Java to establish and improve the performance of the automation framework, allowing the Quality Assurance (QA) team to automate test cases using Cucumber with minimal effort.</li>
                        <li>Participated in the Software Development Life Cycle (SDLC) in an Agile environment.</li>
                        <li>Gained experience using development tools/platforms such as JIRA, Confluence, and Git/GitLab for version control.</li>
                        </ul>
                    </div>
                </div>

                {/* Relevant Courses */}
                <div className="mb-10">
                    <h2 className="text-[#faa843] text-3xl font-semibold border-b-2 pb-2">Relevant Courses</h2>

                    <div className="text-[#fccc7f] mt-4">
                        <p className="text-2xl font-semibold">COMPENG 3DQ5 – Digital Systems Design</p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Analyzed and modeled complex digital circuits using SystemVerilog.</li>
                            <li>Understanding advanced methods of simulation, synthesis, and verification for digital systems.</li>
                            <li>Conducted lab work on an FPGA.</li>
                        </ul>
                    </div>

                    <div className="text-[#fccc7f] mt-4">
                        <p className="text-2xl font-semibold">COMPENG 2DI3 – Logic Design</p>
                        <ul className="list-disc ml-5 mt-2">
                        <li>Manipulating and simplifying boolean expressions.</li>
                        <li>Introduction to logic gates and logic circuits.</li>
                        <li>Analyzing, synthesizing, designing combinational and sequential logic circuits.</li>
                        </ul>
                    </div>
                </div>

                {/* Projects */}
                <div className="mb-10">
                    <h2 className="text-[#faa843] text-3xl font-semibold border-b-2 pb-2">Projects</h2>

                    <div className="text-[#fccc7f] mt-4">
                        <p><strong>Software Defined Radio – April 2024</strong></p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Developed a real-time radio using Python and C++, with support for both mono and stereo FM channels, and RDS.</li>
                            <li>Performed Digital Signal Processing on radio signals being received on a Raspberry Pi using an RF dongle.</li>
                        </ul>
                    </div>


                    <div className="text-[#fccc7f] mt-4">
                        <p><strong>Hardware Image Decompressor – December 2023</strong></p>
                        <ul className="list-disc ml-5 mt-2">
                        <li>Implemented a custom image decompression algorithm on an Altera Cyclone II FPGA using SystemVerilog.</li>
                        <li>Compressed data for an image goes through Inverse Discrete Cosine Transform, Upsampling, and Colorspace Conversion (YUV/RGB) to obtain a decompressed image</li>                        
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Resume;
