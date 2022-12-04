import React from 'react';
import './css/Contact.css';

const Contact=()=> {
    // let x=document.getElementById("input");
    // x.addEventListener('click',function run(){
    //     css.style.border = '1px solid red';
    // })
  return (
    <>
    <section className='contact my-5 pt-5' id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-8 col-xs-12 col-sm-12'>
                            <div className='contact-heading'>
                                <p className='top'>CONTACT ME </p>
                                <h1 className='middle my-3'>Get In Touch</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg- col-md-6 col-xs-12 col-sm-12'>
                            <form id='form' action="https://formsubmit.co/el/hixebu" method="POST" >
                                <input id='input' className='input-field' type='text' name='name' placeholder='Full Name..' required></input>
                                <input id='input' className='input-field' type='email' name='email' placeholder='Email..' required></input>
                                <input id='input' className='input-field' type='tel' name='phone' placeholder='Phone   ..' required></input>
                                <input id='input' className='input-field' type='text' name='subject' placeholder='Subject..' required></input>
                                <textarea id='input' className='input-message' type='text' placeholder='Message..' rows="3"></textarea>
                                <button type='submit' className='btn'>Submit</button>
                            </form>
                        </div>
                        <div className='col-lg- col-md-6 col-xs-12 col-sm-12'>
                            <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86108784034!2d76.69348820329914!3d30.735210199731238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1670154990876!5m2!1sen!2sin" style={{width:"100%",height:"395px", border:"0",allowfullscreen:"",loading:"lasy"}} ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact
