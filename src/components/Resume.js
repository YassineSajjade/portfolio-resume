import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
    render() {
        return (
            <>
            <section className="section_resume" id="resume">
                <div className="container">
                    <div className="row">
                        <h2 className="section_title " data-aos="fade-right">Resume_</h2>
                        {/* <p className="section_desc">Lorem ipsum dolor sit amet, communication adipisicing elit, 
                            helpful eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud sence of humour ullamco laboris nisi ut honest ea commodo consequat. 
                            Duis aute irure dolor in upper-intermediate english level velit dolore eu ivivdtevoluptatem ontend developer.
                        </p> */}
                    </div>
                    <div className="row">
                        <div className="col-md-8 section_education">
                            <h3 className="education_title">EDUCATION</h3>
                            <div className="education_block">
                                <p className="education_block_title">IT-Learning Campus Casablanca, FST de Settat</p>
                                <p className="education_block_date">2019 - 2020</p>
                                <p>LICENCE PRO EN INGENIERIE DES APPLICATIONS MOBILES</p>
                            </div>
                            <div className="education_block">
                            <p className="education_block_title">ISTA-NTIC 2 Sidi Maarouf</p>
                                <p className="education_block_date">2017 - 2019</p>
                                <p>DTS EN DéVELOPPEMENT INFORMATIQUE</p>
                            </div>
                            <div className="education_block">
                            <p className="education_block_title">Lycée Mohamed 6</p>
                                <p className="education_block_date">2016 - 2017</p>
                                <p>BAC SVT</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row progress_list">
                        <div className="col-md-12 section-skills">
                            <h3 className="skills_title">SKILLS</h3>
                        </div>
                        <div className="col-md-5 mr-auto">
                            <div className="skills_block">
                                <p>
                                    <span className="skill_block_title">JAVA</span>
                                    <span className="skill_block_value">90%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="90"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"90%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                            <p>
                                    <span className="skill_block_title">JavaScript</span>
                                    <span className="skill_block_value">80%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="80"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"80%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                            <p>
                                    <span className="skill_block_title">PHP</span>
                                    <span className="skill_block_value">70%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="70"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"70%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                            <p>
                                    <span className="skill_block_title">HTML 5</span>
                                    <span className="skill_block_value">80%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="80"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"80%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mr-auto">
                            <div className="skills_block">
                                <p>
                                    <span className="skill_block_title">CSS</span>
                                    <span className="skill_block_value">70%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="70"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"70%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                                <p>
                                    <span className="skill_block_title">ReactJS</span>
                                    <span className="skill_block_value">80%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="80"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"80%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                                <p>
                                    <span className="skill_block_title">BootStrap</span>
                                    <span className="skill_block_value">75%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="75"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"75%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                            <div className="skills_block">
                                <p>
                                    <span className="skill_block_title">LARAVEL</span>
                                    <span className="skill_block_value">67%</span>
                                </p>
                                <div className="progress">
                                    <div className="progress_bar" 
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="67"
                                        role="progressbar"
                                        style={{backgroundColor:"#1f5bb1",width:"67%"}}
                                        data-aos="fade-right" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            </>
        )
    }
}
export default Resume;