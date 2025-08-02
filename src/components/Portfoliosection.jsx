import React, {useState, useEffect} from 'react';
import PortfolioSectionStyle from '../../public/styles/Portfoliosection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import PortfolioContent from '../../custom objects/portfoliocontent.js';
import SecondScrollBar from '../components/Secondscrollbar.jsx';

function Portfoliosection() {

    const [spanAnimation, setSpanAnimation] = useState({

        transform: "translateY(-500px)",
        opacity: "0",

    });

    const [headingAnimation, setHeadingAnimation] = useState({

        transform: "translateY(-1000px)",
        opacity: "0"

    });

    // Swiper box style 
    const [swiperBoxStyle, setSwiperBoxStyle] = useState({

        transform: "scale(0)"

    })

    function handleScroll() {

        // Span text animatin 
        if (window.scrollY > 300) {
            
            setSpanAnimation({
               
                transform: "translateY(0px)",
                transition: "all 1s ease 0.3s",
                opacity: "1"

            })

            setHeadingAnimation({

                transform: "translateY(0px)",
                transition: 'all 1s ease',
                opacity: "1",

            })

            setSwiperBoxStyle({

                transform: "scale(1)",
                transition: "all 1s ease 0.5s",
                opacity: "1",

            })

        } else {
            
            setSpanAnimation({

                transform: "translateY(-500px)",
                transition: 'all 1s ease',
                opacity: "0"

            })

            setHeadingAnimation({

                transform: "translateY(-1000px)",
                transition: 'all 1s ease 0.3s',
                opacity: "0"

            })

            setSwiperBoxStyle({

                transform: "scale(0)",
                transition: 'all 1s ease',
                opacity: "0"

            })

        }
        

    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

    })
    
    return (

        <>
            
            <div className={PortfolioSectionStyle.portfolioDiv} data-scroll data-scroll-speed={0.2} onScroll={handleScroll}>

                <SecondScrollBar />

                <div className={PortfolioSectionStyle.portfolioContentDiv}>

                    <div className={PortfolioSectionStyle.contentSection}>

                        <span style={spanAnimation}> Portfolio </span>
                        <h2 style={headingAnimation}>Inovation and Digital Branding</h2>

                    </div>

                </div>

                <div className={PortfolioSectionStyle.portfoliosSection}  style={swiperBoxStyle}>

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