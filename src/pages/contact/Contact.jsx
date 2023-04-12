import React, { useEffect } from 'react';
import { Grid } from '@mui/material'
import { FaFacebookMessenger } from 'react-icons/fa'
import brat from '../../assets/images/brat.png'
import './contact.css'
import WOW from 'wowjs'


const Contact = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return (
        <>
            <div className='contact' id='contact'>
                <Grid container>
                    <Grid item lg={6} md={6} sm={12} style={{ marginBottom: "12vh" }}>
                        <Grid container>
                            <h3 className='contact-name wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">Contact Us</h3>
                        </Grid>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={12} className={'item-input'}>
                                <label htmlFor="first_name" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">First Name</label>
                                <input type="text" id='first_name' className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} className={'item-input'}>
                                <label htmlFor="last_name" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">Last Name</label>
                                <input type="text" id='last_name' className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s"/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12}></Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={12} className={'item-input'}>
                                <label htmlFor="E_name" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">E-mail</label>
                                <input type="text" id='E_name' className='wow animate__slideInUp'  data-wow-duration="2s" data-wow-delay="0s"/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} className={'item-input'}>
                                <label htmlFor="phone" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">Phone</label>
                                <input type="text" id='phon' className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12}></Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} className={'item-input'}>
                                <label htmlFor="yuor_message" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">Your Message</label>
                                <textarea name="your_message" className='wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s" id="your_message" cols="10" rows="6"></textarea>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} className={'item-button'}>
                                <button className='message wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s">SEND MESSAGE</button>
                                <span>or use</span>
                                <button className='messanger wow animate__slideInUp' data-wow-duration="2s" data-wow-delay="0s"> <FaFacebookMessenger /> MESSENGER</button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} className="pt-5 pl-5 img-box">
                        <img style={{ width: "110%", margin: "auto", display: "block" }} src={brat} alt="" />
                    </Grid>
                </Grid>
                <div className="path-section">
                    <svg x="0px" y="0px" viewBox="0 0 1920 45" width="100%" height="45px" preserveAspectRatio="none">
                        <path d="M1920,0c-82.8,0-108.8,44.4-192,44.4c-78.8,0-116.5-43.7-192-43.7c-77.1,0-115.9,44.4-192,44.4c-78.2,0-114.6-44.4-192-44.4c-78.4,0-115.3,44.4-192,44.4C883.1,45,841,0.6,768,0.6C691,0.6,652.8,45,576,45C502.4,45,461.9,0.6,385,0.6C306.5,0.6,267.9,45,191,45C115.1,45,78,0.6,0,0.6V45h1920V0z"></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Contact;