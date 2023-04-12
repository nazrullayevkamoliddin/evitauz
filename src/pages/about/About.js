import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import aboutImg from '../../assets/images/index-01-711x429.png'
import './about.css'
import WOW from 'wowjs'

const About = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return (
        <>
            <div className='about' id='about'>
                <Grid container padding={'0 9%'} paddingTop={'12vh'}>
                    <Grid item lg={6} md={12} sm={12} className="about-left1">
                        <img src={aboutImg} alt="about-img" className='about-img' />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} className='about-left' >
                        <div>
                            <h1 className='about-name wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0s">
                                Water Purified by Nature <br /> and Delivered with Love
                            </h1>
                            <p className='about-text wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0s">
                                Our pristine water flows from the Penobscot
                                Ridge <br /> Mountains. The bountiful “stream” is the
                                wellspring <br /> that constantly provides fresh, clean
                                water to our <br /> well located just a few steps away from our plant.
                            </p>
                            <br /> <br />
                            <div className='wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0s">
                                <a className='about-link'  href="/">LEARN MORE</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default About;

