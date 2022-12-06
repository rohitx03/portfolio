import React from 'react';
import './css/About.css';

const About = () => {
    return (
        <>
            <section className='about my-5' id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                            <div className='about-img'>
                                <div className='about-img-shadow'>
                                    <img src='../images/about-img.jpg' className='img-fluid' alt='img'></img>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12 ' style={{ paddingLeft: "100px" }}>
                            <div className='about-content'>
                                <p className='heading'>About Me</p>
                                <h1 className='my-3'>Front-end and Backend Developer</h1>
                                <p style={{ color: "white", fontWeight:"300" }}>This skillset involves the actual presentation of your website—how the information in your website is laid out in browsers and on mobile devices as well.<br></br><br></br>
                                    Everything that you actually see on a website—the layout, the positioning of text and images, colors, fonts, buttons, and so on—are all factors that the frontend developer must consider.</p>

                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-xs-6 col-sm-12'>
                                            <p className='text-white m-0'><span style={{ fontSize:"20px",color:"rgb(0 174 255)"}}>Name :</span></p>
                                            <p className='text-white '>Rohit Sagar</p>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-xs-6 col-sm-12'>
                                        <p className='text-white m-0'><span style={{ fontSize:"20px",color:"rgb(0 174 255)"}}>Email :</span></p>
                                            <a href='mailto:rohit.sagar.x03@gmail.com' style={{color:"white",textDecoration:"none"}}>rohit.sagar.x03@gmail.com</a>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-xs-6 col-sm-12'>
                                        <p className='text-white m-0'><span style={{ fontSize:"20px",color:"rgb(0 174 255)"}}>Phone :</span></p>
                                        <a href='tel:9779026425' style={{color:"white",textDecoration:"none"}}>+91 977(9026) 425</a>

                                        </div>
                                        <div className='col-lg-6 col-md-6 col-xs-6 col-sm-12'></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
