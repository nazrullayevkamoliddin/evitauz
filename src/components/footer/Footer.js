import React, { useEffect } from 'react';
import { Grid, TextField } from '@mui/material'
import './footer.css';
import { IoLocationSharp } from 'react-icons/io5'
import { HiPhone } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import WOW from 'wowjs';

const Footer = () => {
  useEffect(() => {
    new WOW.WOW(
      {
        leave: false
      }
    ).init()
  }, [])
  return (
    <>
      <div className='footer'>
        <Grid container>
          <Grid item lg={4} md={6} sm={12} style={{ marginBottom: '10px' }} className="wow animate__fadeInRight" data-wow-duration="2s" data-wow-delay="0s">
            <h3>About US</h3>
            <p>Aqua is one of the leading spring water providers in the USA. We bottle and deliver bacteria-free spring water throughout the country covering all water needs and tastes. We are proud to be the nation’s #1 water provider!</p>
          </Grid>
          <Grid item lg={4} md={6} sm={12} style={{ marginBottom: '10px' }} className="aloqa wow animate__fadeInRight" data-wow-duration="2s" data-wow-delay="0s">
            <h3>
              Contact Information
            </h3>
            <div>
              <IoLocationSharp />
              <a href="/">2130 Fulton Street <br />
                San Diego, CA 94117-1080 USA</a>
            </div>
            <div>
              <HiPhone />
-              <a href="/">+998 94-077-1601</a>
            </div>
            <div>
              <MdEmail />
              <a href="/">kamolxoja.n@gmail.com</a>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12} style={{ marginBottom: '10px' }} className={'aloqa2 wow animate__fadeInRight'} data-wow-duration="2s" data-wow-delay="0s">
            <h3>
              Newsletter
            </h3>
            <p >
              Sign up to our newsletter and be the first to know about the latest news, special offers, events, and discounts.
            </p>
            <br />
            <div className='footer-aloqa'>
              <TextField id="outlined-basic" label="E-mail" variant="outlined" /><span><MdEmail /></span>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} className={'foot'}>
            <span>© 2023 All Rights Reserved.</span>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Footer;