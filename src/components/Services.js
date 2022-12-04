import React from 'react';
import './css/Services.css';


const Services = () => {
    return (
        <>
            <section className='services my-5 pt-5' id='service'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-8 col-xs-12 col-sm-12'>
                            <div className='ser-heading'>
                                <p className='top'>OUR SERVICE </p>
                                <h1 className='middle my-3'>What Service We Offer For You</h1>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                            <div className='ser-box text-center p-4'>
                                <i className="bi bi-file-earmark-code mb-4" style={{ fontSize: "53px", color: "white" }}></i>
                                <h5 className='box-heading'>Web Development</h5>
                                <p className='box-para'>This skillset involves the actual presentation of your website—how the information in your website is laid out in browsers and on mobile devices as well.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                            <div className='ser-box text-center p-4'>
                                <i className="bi bi-window-fullscreen mb-4" style={{ fontSize: "53px", color: "white" }}></i>
                                <h5 className='box-heading'>Responsive Website</h5>
                                <p className='box-para'>This skillset involves the actual presentation of your website—how the information in your website is laid out in browsers and on mobile devices as well.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                            <div className='ser-box text-center p-4'>
                            <i className="bi bi-filetype-jsx mb-4" style={{ fontSize: "53px", color: "white" }}></i>
                                <h5 className='box-heading'>One-Page Application</h5>
                                <p className='box-para'>This skillset involves the actual presentation of your website—how the information in your website is laid out in browsers and on mobile devices as well.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
