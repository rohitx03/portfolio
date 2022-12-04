import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='footer-logo'>LOGO</h2>
                        </div>
                    </div>
                        <div className='col-12 text-center mt-3'>
                            <div className='footer-menu'>
                                <ul className='d-flex p-0 justify-content-center'>
                                    <li >
                                        <a href="#">Home</a>
                                    </li>
                                    <li >
                                        <a href="#about">About Us</a>
                                    </li>
                                    <li >
                                        <a href="#service">Services</a>
                                    </li>
                                    <li >
                                        <a href="#gallery">Gallery</a>
                                    </li>
                                    <li >
                                        <a href="#contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <div className='footer-social my-1'>
                                <a href='https://www.instagram.com/rohitx03/' target='blank'><i class="bi bi-instagram"></i></a>
                                <a href='https://www.facebook.com/profile.php?id=100024797594844' target='blank'><i class="bi bi-facebook"></i></a>
                                <a href='https://github.com/rohitx03' target='blank'><i class="bi bi-github"></i></a>
                                <a href='https://www.linkedin.com/in/rohit-sagar-346256259/ ' target='blank'><i class="bi bi-linkedin"></i></a>
                            </div>
                        <div className='col-12 text-center my-3'>
                            <p className='text-white'>Copyright © All rights reserved | This template is made with  by
                            <span style={{color:"black",fontWeight:"700"}}> Rohit Sagar</span> </p>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
