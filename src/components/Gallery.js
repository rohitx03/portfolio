import React from 'react';
import './css/Gallery.css';


const Gallery = () => {
    return (
        <>
            <section className='gallery my-5 pt-5' id='gallery'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-8 col-xs-12 col-sm-12'>
                            <div className='gall-heading'>
                                <p className='top'>ONLINE GALLERY </p>
                                <h1 className='middle my-3'>Some online Images related to Development..</h1>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4'>
                            <div className='gall-box'>
                                <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                            <div className='gall-box'>
                                <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                            <div className='gall-box'>
                                <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                            </div>
                        </div>

                            <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                                <div className='gall-box'>
                                    <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                                <div className='gall-box'>
                                    <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                                <div className='gall-box'>
                                    <img className='img-fluid' alt='gallery-img' src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;
