import React, { Fragment } from 'react'
import { Grid } from '@mui/material';
import img1 from '../../assets/images/woman.jpg'
import img2 from '../../assets/images/man.jpg';
import img3 from '../../assets/images/man2.jpg'
import img4 from '../../assets/images/woman2.jpg'
import { IoMdQuote } from 'react-icons/io'
import Slider from "react-slick";
import './testimonals.css'

const Testimonals = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint:300,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
          ]
    };
    return (
        <Fragment>
            <div className='testimonls' id='testimonls'>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} className={'item-header'}>
                        <h1>Testimonials</h1>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} className={'item-body'} paddingTop={'5vh'}>
                        <Slider {...settings}  >
                            <div>
                                <div className='test-container'>
                                    <div className="icon">
                                        <span>
                                            <IoMdQuote />
                                        </span>
                                    </div>
                                    <p>
                                        I am so grateful for this
                                        water delivery to our home!
                                        We’ve got our energy back
                                        after just a short time
                                        and we feel vibrant again!
                                        I especially like sparkling
                                        water.
                                    </p>
                                    <div className="user">
                                        <img src={img1} alt="woman" />
                                        <div className="user-info">
                                            <h3>Kelly McMillan</h3>
                                            <h4>Regular Client</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className='test-container'>
                                    <div className="icon">
                                        <span>
                                            <IoMdQuote />
                                        </span>
                                    </div>
                                    <p>
                                        I have looked far and wide in Los
                                        Angeles County for the purest water,
                                        and Aqua is without a doubt the cleanest,
                                        freshest, most vital water available and
                                        it is also affordable.
                                    </p>
                                    <div className="user">
                                        <img src={img2} alt="man" />
                                        <div className="user-info">
                                            <h3>Harold Barnett</h3>
                                            <h4>Regular Client</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div>
                                <div className='test-container'>
                                    <div className="icon">
                                        <span>
                                            <IoMdQuote />
                                        </span>
                                    </div>
                                    <p>
                                        I have been drinking your
                                        spring water since November
                                        and I love it! The water is
                                        so delicious and the Aqua team
                                        is so wonderful and helpful when
                                        it comes to quick water delivery.
                                    </p>
                                    <div className="user">
                                        <img src={img3} alt="woman" />
                                        <div className="user-info">
                                            <h3>Albert Webb</h3>
                                            <h4>Regular Client</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='test-container'>
                                    <div className="icon">
                                        <span>
                                            <IoMdQuote />
                                        </span>
                                    </div>
                                    <p>
                                        I have looked far and wide in Los
                                        Angeles County for the purest water,
                                        and Aqua is without a doubt the cleanest,
                                        freshest, most vital water available and
                                        it is also affordable.
                                    </p>
                                    <div className="user">
                                        <img src={img4} alt="woman4" />
                                        <div className="user-info">
                                            <h3>Samantha Lee</h3>
                                            <h4>Regular Client</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Testimonals