import React, { useEffect} from "react";
import silderImg1 from '../../assets/images/Athlete-Hydration-1024x536.jpg'
import silderImg2 from '../../assets/images/theres-no-better-reward-than-water-royalty-free-image-1614292438_.jpg';
import WOW from 'wowjs'
import { Grid } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './home.css'
import 'animate.css';



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Home = () => {

  
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
       
  return (
    <>
      <div className="home" id="home">
        <Swiper
          navigation={true}
          className="mySwiper"
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          speed={1500}
        >
          <SwiperSlide >
            <div className="item" style={{ backgroundImage: `url("${silderImg1}")` }}>
              <Grid container padding={'0 10%'}>
                <Grid item lg={6} md={6} sm={12} marginTop="32vh">
                  <h2 className="text-yellow wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">QUALITY WATER FOR YOU</h2>
                  <h1 className="pro-name wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">DRINK HEALTHY</h1>
                  <h2 className="water-name wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">WATER</h2>
                  <p className="some-text wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">We provide spring water that positively influences your health and is safe to drink.</p>
                  <br />
                   <div className="wow animate__fadeInUp"  data-wow-duration="2s" data-wow-delay="0s">  <a href="/"  className="aloqa " >LEARN MORE</a></div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide  >
            <div className="item" style={{ backgroundImage: `url("${silderImg2}")` }}>
              <Grid container padding={'0 10%'}>
                <Grid item lg={6} md={6} sm={12} marginTop="32vh">
                  <h2 className="text-yellow  wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">WELCOME TO AQUA</h2>
                  <h1 className="pro-name wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">SPRING WATER</h1>
                  <h2 className="water-name wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">FOR EVERYONE</h2>
                  <p className="some-text wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">Our company has been the leading supplier of high-quality bottled spring water since 1950.</p>
                  <br />
                  <div className="wow animate__fadeInUp"  data-wow-duration="2s" data-wow-delay="0s">  <a href="/"  className="aloqa " >LEARN MORE</a></div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>

        </Swiper>

        <div className="path-section">
        <svg x="0px" y="0px" viewBox="0 0 1920 45" width="100%" height="45px" preserveAspectRatio="none">
          <path d="M1920,0c-82.8,0-108.8,44.4-192,44.4c-78.8,0-116.5-43.7-192-43.7c-77.1,0-115.9,44.4-192,44.4c-78.2,0-114.6-44.4-192-44.4c-78.4,0-115.3,44.4-192,44.4C883.1,45,841,0.6,768,0.6C691,0.6,652.8,45,576,45C502.4,45,461.9,0.6,385,0.6C306.5,0.6,267.9,45,191,45C115.1,45,78,0.6,0,0.6V45h1920V0z"></path>
        </svg>
      </div>
      </div>
    
    </>
  );
}
export default Home;