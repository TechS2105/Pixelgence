import React, {useState, useEffect, useRef} from 'react';
import AboutStyle from '../../public/styles/About.module.css';
import BannerImage from '../components/Bannerimage';
import StayTunedSection from '../components/Staytuned';
import AboutScrollBar from '../components/Allinonescrollbar';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

let img="/images/banner image/img3.jpeg";

function About() {

    const [aboutLoadAnime, setAboutLoadAnime] = useState({

        opacity: "0",

    });

    function handleAboutMainLoad() {
        
        setAboutLoadAnime({

            opacity: "1",
            transition: 'all 2s ease'

        });

    }

    const [stayTunedAnimation, setStayTunedAnimation] = useState({

        transform: "translateX(-2000px)",
        opacity: "0.5"

    });

    function handleScrollAnime() {
        
        if (window.scrollY > 600) {
            
            setStayTunedAnimation({

                transform: "translateX(0px)",
                opacity: "1",
                transition: "all 2s ease"

            });

        } else {
            

            setStayTunedAnimation({

                transform: "translateX(-2000px)",
                transition: "all 2s ease",
                opacity: "0.5"

            })

        }

    }

    const scrollRef = useRef(null);

    useEffect(() => {

        window.addEventListener("load", handleAboutMainLoad());
        window.addEventListener("scroll", handleScrollAnime);

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
        
            <main data-scroll-container ref={scrollRef}  onLoad={handleAboutMainLoad} style={aboutLoadAnime}>
            
                <div className={AboutStyle.aboutBannerImage}>

                    <BannerImage
                    
                        image={img}
                        title="About Coming Soon Banner Image"
                        
                    />

                    <AboutScrollBar />

                </div>

                <div className={AboutStyle.stayTunedSection} onScroll={handleScrollAnime}>

                    <StayTunedSection
                    
                        heading="Stay Tuned With Us For New Updates..."
                        styleState={stayTunedAnimation}
                        
                    />

                    <AboutScrollBar />
                    
                </div>
                
            </main>

            <Footer />
            
        </>

    );

}

export default About;