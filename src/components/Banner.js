import React from 'react';
import './css/Banner.css';

const Banner = () => {
    return (
        <>
            <section className='banner mb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-10 col-sm-12 col-xs-12'>
                            <div className='banner-content'>
                                <p className='banner-p'>HEY THERE !</p>
                                <h2 className='banner-h2'>I AM ROHIT SAGAR</h2>
                                <h3 className='banner-h3'>FRONT-END AND BACK-END DEVELOPER</h3>
                                <div className='banner-social my-5'>
                                <a href='https://www.instagram.com/rohitx03/' target='blank'><i class="bi bi-instagram"></i></a>
                                <a href='https://www.facebook.com/profile.php?id=100024797594844' target='blank'><i class="bi bi-facebook"></i></a>
                                <a href='https://github.com/rohitx03' target='blank'><i class="bi bi-github"></i></a>
                                <a href='https://www.linkedin.com/in/rohit-sagar-346256259/ ' target='blank'><i class="bi bi-linkedin"></i></a>
                                </div>
                                <button className='btn p-0' >
                                   <a href='../Resume.pdf' download> Resume</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
