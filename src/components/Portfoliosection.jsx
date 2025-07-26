import React from 'react';
import PortfolioSectionStyle from '../../public/styles/Portfoliosection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import PortfolioContent from '../../custom objects/portfoliocontent.js';
import SecondScrollBar from '../components/Secondscrollbar.jsx';

function Portfoliosection() {
    
    return (

        <>
        
            <SecondScrollBar />
            
            <div className={PortfolioSectionStyle.portfolioDiv} data-scroll data-scroll-speed={0.2}>

                <div className={PortfolioSectionStyle.portfolioContentDiv}>

                    <div className={PortfolioSectionStyle.contentSection}>

                        <span> Portfolio </span>
                        <h2>Inovation and Digital Branding</h2>

                    </div>

                </div>

                <div className={PortfolioSectionStyle.portfoliosSection}>

                    <Swiper className={PortfolioSectionStyle.portfolioBoxes}
                    
                        slidesPerView={2.5}
                        spaceBetween={20}
                        loop={true}
                        speed={1500}
                        autoplay={{
                            
                            delay: 2500

                        }}

                        modules={[Autoplay]}
                        
                    >

                        {PortfolioContent.map((item) => {

                            return (

                                <SwiperSlide className={PortfolioSectionStyle.portfolioBox} key={item.id}>

                                    <div className={PortfolioSectionStyle.portfolioBoxImage}>
                                        
                                        <img src={item.image} alt={item.title} />

                                    </div>

                                    <div className={PortfolioSectionStyle.portfolioImgBoxTitle}>

                                        <h3><NavLink to="#"> {item.title} </NavLink></h3>

                                    </div>

                                </SwiperSlide>

                            );

                        })}
                        

                    </Swiper>
                    
                </div>

            </div>
            
        </>

    );

}

export default Portfoliosection;