import React from 'react';
import HomeBannerStyle from '../../public/styles/Homebanner.module.css';
import Banners from '../../custom objects/banner.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import HomeBannerImage from '../components/Homebannerimage.jsx';
import HomeBannerContent from '../components/Homebannercontent.jsx';
import ScrollBar from '../components/Scrollbar.jsx';

function Homebanner() {

    return (

      <>

        <div className={HomeBannerStyle.bannderDiv} data-scroll data-scroll-speed={-0.2}>

           <ScrollBar />

          <Swiper className={HomeBannerStyle.swiperCarousel}
            
          slidesPerView={1}
          loop={true}
          effect={"fade"}
          speed={2000}

            autoplay={{

              delay: 3000,

            }}
            
            navigation={{

              nextEl: ".nextButton",
              prevEl: ".prevButton",

            }}
            
            modules={[Autoplay, Navigation, EffectFade]}
           
          >
            
            {Banners.map((banner) => {
            
              return (
              
                <SwiperSlide className={HomeBannerStyle.swiperBanner} key={banner.id}>
                  
                  <HomeBannerImage image={banner.image} title={banner.title} />

                  <div className={HomeBannerStyle.swiperBannerContent} data-scroll data-scroll-speed={0.5}>

                    <HomeBannerContent
                      
                      bannerTitle={banner.title}
                      buttonText={banner.buttonText}
          
                    />

                  </div>

                  <div className={HomeBannerStyle.homeBannerNavigation}>

                    <div className={HomeBannerStyle.bannerNav}>

                        <span className={`${HomeBannerStyle.prevButton} prevButton`}>
                          
                          PREV
                        
                        </span>
                      
                        <span className={`${HomeBannerStyle.nextButton} nextButton`}>
                        
                          NEXT
                        
                        </span>
                      
                    </div>

                  </div>

                </SwiperSlide>

              );
              
            })}
            
            </Swiper>
            
        </div>
        
      </>
    );

}

export default Homebanner;