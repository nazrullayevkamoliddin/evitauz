import React, { Fragment, useEffect } from 'react'
import { Grid } from '@mui/material';
import { BsPhone } from 'react-icons/bs';
import { FaPrescriptionBottle } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import WOW from 'wowjs'

import './services.css'
const Services = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return (
        <Fragment>
            <div className='services' id='services'>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} className={'item'}>
                        <h1 className='wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">We Work to Offer the Best <br /> Customer Service</h1>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} className={'item'}>
                        <div className="icon wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <span><BsPhone /></span>
                        </div>
                        <div className="info wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h3>Online Ordering</h3></a>
                            <br />
                            <p>
                                Our online store is always open to customers who prefer to drink quality spring water. You can also order Aqua products via our partners’ websites.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} className={'item'}>
                        <div className="icon wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <span><FaPrescriptionBottle /></span>
                        </div>
                        <div className="info wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h3>Free Delivery</h3></a>
                            <br />
                            <p>
                                If your order more than 6 bottles of our water we will deliver it to your home or office for free. This offer applies only to online orders placed till 8 PM.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} className={'item'}>
                        <div className="icon wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <span><AiOutlineHeart /></span>
                        </div>
                        <div className="info wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h3>Friendly Managers</h3></a>
                            <br />
                            <p>
                                Our team of friendly managers is always ready to help you choose and order the best sparkling or spring water. Feel free to contact us for more information.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}
export default Services