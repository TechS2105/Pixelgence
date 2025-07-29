import React, {useRef, useEffect, useState} from 'react';
import BannerImage from '../components/Bannerimage';
import PortfolioStyle from '../../public/styles/Portfolio.module.css';
import StayTunedSection from '../components/Staytuned';
import Footer from '../components/Footer'; 
import LocomotiveScroll from 'locomotive-scroll';
import PortfolioScrollBar from '../components/Allinonescrollbar';

let img = '/images/banner image/img3.jpeg'

function Portfolio() {

    const scrollRef = useRef(null);
    const [textAnimation, setTextAnimation] = useState({

        transform: "translateX(-1500px)",
        opacity: "0.5",

    });

    const [loadAnime, setLoadAnime] = useState({

        opacity: "0",

    })

    function handleScroll() {
        
        if (window.scrollY > 600) {
           
            console.log(window.scrollY);
            setTextAnimation({

                transform: "translateX(0px)",
                transition: "all 2s ease",
                opacity: "1",

            });
            
        } else {
            
            setTextAnimation({

                transform: "translateX(-1500px)",
                opacity: "0.5",
                transition: 'all 2s ease'

            })

        }

    }

    function handleLoad() {
        
        setLoadAnime({

            opacity: "1",
            transition: "all 2s ease"

        })

    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleLoad);

        const scroll = new LocomotiveScroll({

            el: scrollRef.current,
            smooth: true,
            lerp: 0.2

        });

        return () => {

            scroll.destroy();

        }

    }, []);

    
    return (

        <>
        
            <main data-scroll-container ref={scrollRef} onLoad={handleLoad} style={loadAnime}>
                
                <div className={PortfolioStyle.portfolioBanner} data-scroll  data-scroll-speed={-0.2}>
                
                    <BannerImage
                    
                        image={img}
                        
                    />

                    <PortfolioScrollBar />
                    
                </div>  
            
                <div className={PortfolioStyle.portfolioStayTunedSection} data-scroll data-scroll-speed={-0.0005} onScroll={handleScroll}>

                    <StayTunedSection
                    
                        heading="Stay Tuned With Us For New Updates..."
                        styleState={textAnimation}

                        
                    />

                    <PortfolioScrollBar />

                </div>

                <Footer />

            </main>
            
        </>

    );

}

export default Portfolio;