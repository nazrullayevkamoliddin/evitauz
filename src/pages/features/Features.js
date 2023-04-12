import React, { Fragment, useEffect } from 'react'
import { Grid } from '@mui/material'
import { BsFillShieldFill, BsFillDropletFill } from 'react-icons/bs'
import { RiLeafFill } from 'react-icons/ri';
import './features.css'
import WOW from 'wowjs'

const Features = () => {


    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return (
        <Fragment>
            <br />
            <div className='feat' id='features'>
                <div className="feat-header">
                    <Grid container>
                        <Grid item lg={4} md={6} sm={12} className='item wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">
                            <div className="icon " >
                                <BsFillShieldFill />
                            </div>
                            <div className="info " >
                                <h3>Protection from Bacteria</h3>
                                <p>Though spring water is naturally clean,
                                    we try our best to make sure that our
                                    water is bacteria-free at all
                                    production stages.</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className='item wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">
                            <div className="icon " >
                                <RiLeafFill />
                            </div>
                            <div className="info">
                                <h3>No Contaminants</h3>
                                <p>We control the production process
                                    of our water to make sure you receive
                                    the best product from the company,
                                    which you can trust.</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className='item wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">
                            <div className="icon " >
                                <BsFillDropletFill />
                            </div>
                            <div className="info ">
                                <h3>Automated Bottling Lines</h3>
                                <p>The process of bottling the spring water
                                    at our plant is fully automatized.
                                    However, we always control it to
                                    ensure the high quality.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="feat-footer">
                <Grid container>
                    <Grid item lg={7} md={6} className={'feat-footer-item'}>

                    </Grid>
                    <Grid item lg={5} md={6}>
                        <div>
                            <h1 className='wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">
                                From an Artesian Well <br /> to Home and Office
                            </h1>
                            <p className='wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">For more than 60 years, we have been
                                supplying the <br /> American homes and offices
                                with high-quality spring <br /> water from a
                                pristine stream near our plant.</p>
                            <br />
                            <br />
                            <div className='wow animate__slideInLeft' data-wow-duration="2s" data-wow-delay="0s">
                                <a href="/">
                                    READ MORE
                                </a>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}
export default Features;