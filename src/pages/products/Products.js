import React, { Fragment , useEffect } from 'react'
import { Grid } from '@mui/material'
import './products.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import product_1 from '../../assets/images/product-1.png'
import product_2 from '../../assets/images/product-2.png'
import product_3 from '../../assets/images/product-3.png'
import product_4 from '../../assets/images/product-4.png'
import WOW from 'wowjs'

const Products = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
          }).init();
    } , [])
    return (
        <Fragment>
            <div className='products' id='products'>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} className={'item'}>
                        <h1>Our Products</h1>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} className={'item'}>
                        <div className="product-img wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <img src={product_1} alt="product-1" />
                        </div>
                        <div className="info wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h2>1 L Spring Water in Glass</h2></a>
                            <br/>
                            <price >$10</price>
                            <div className='warning'><AiOutlineInfoCircle /> for daily use</div>
                            <p className='some-text'>
                                Enjoy your favorite spring water
                                in the most popular shape! This
                                water is great to share and drink
                                at any weather and is a reasonable
                                offer for any budget.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} className={'item'}>
                        <div className="product-img wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s" >
                            <img src={product_2} alt="product-2" />
                        </div>
                        <div className="info wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h2>750 ml Sparkling Water</h2></a>
                            <br/>
                            <price>$9</price>
                            <div className='warning'><AiOutlineInfoCircle /> for daily use</div>
                            <p className='some-text'>
                                Perfect sparkling water for single- or multi-serve convenience for home, restaurant or upscale retail stores. We are sure you will love its energizing effect.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} className={'item'}>
                        <div className="product-img wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <img src={product_3} alt="product-3" />
                        </div>
                        <div className="info wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <a href="/"><h2>500 ml Spring Water</h2></a>
                            <br/>
                            <price>$7</price>
                            <div className='warning'><AiOutlineInfoCircle /> for daily use</div>
                            <p className='some-text'>
                            Need a greater amount of our spring water at an affordable price? Then Aqua’s 500 ml spring water is your #1 fit. Available at all major department stores and online.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} className={'item'}>
                        <div className="product-img wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s">
                            <img src={product_4} alt="product-4" />
                        </div>
                        <div className="info wow animate__slideInUp" data-wow-duration="2s" data-wow-delay="0s" >
                            <a href="/"><h2>333 ml Spring Water</h2></a>
                            <br/>
                            <price>$10</price>
                            <div className='warning'><AiOutlineInfoCircle /> for daily use</div>
                            <p className='some-text'>
                            Wherever it is served, our Spring Water is the finest pairing for any dish. Our spring’s unique blend of minerals provides a remarkably refreshing taste.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={'item'}>
                        <a href="/">
                            VIEW MORE
                        </a>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Products