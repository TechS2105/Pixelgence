import React, {useEffect, useRef, useState} from 'react';
import HomeBanner from '../components/Homebanner';
import WebSolutionSection from '../components/Websolutionsection';
import BlogSection from '../components/Blogsection';
import PortfolioSection from '../components/Portfoliosection';
import LocomotiveScroll from 'locomotive-scroll';
import OurTeam from '../components/Ourteam';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import BackToTop from '../components/Backtotop';

function Home() {

    const [homeAnimation, setHomeAnimation] = useState({

        opacity: "0",
        filter: "blur(10px)",

    });

    const [scrollStyle, setScrollStyle] = useState({

        opacity: "0",
        transform: 'scale(0) rotate(-90deg)',

    })

    function handelHomeLoadAnimation() {
        
        setHomeAnimation({

            opacity: "1",
            transition: "all 2s ease",
            filter: "blur(0px)",

        })

    }

    function handleScroll() {
        
        if (window.scrollY > 800) {
            
            setScrollStyle({

                opacity: "1",
                transform: 'scale(1) rotate(-90deg)',
                transition: 'all 0.8s ease'

            })

        } else {
            
            setScrollStyle({

                opacity: "0",
                transform: 'scale(0) rotate(-90deg)',
                transition: 'all 0.8s ease'

            })

        }

    }

    function handleClickEvent() {
        
        window.scrollTo({

            top: 0,
            behavior: 'smooth',

        })

    }

    const scrollRef = useRef(null);

    useEffect(() => {

        window.addEventListener("load", handelHomeLoadAnimation());
        window.addEventListener("scroll", handleScroll);

        const locomotiveScroll = new LocomotiveScroll({

            el: scrollRef.current,
            smooth: true,
            lerp: 0.2,

        })

        return () => {

            locomotiveScroll.destroy();

        }

    }, []);
    
    return (

        <>
            <BackToTop
            
                handleClickEvent={handleClickEvent}
                styleState={scrollStyle}
                
            />
            <main data-scroll-container ref={scrollRef} onLoad={handelHomeLoadAnimation} style={homeAnimation} onScroll={handleScroll}>

                <HomeBanner />
                <PortfolioSection />
                <WebSolutionSection />
                <BlogSection />
                <OurTeam />
                <Brands />
                <Footer />

            </main>
            
        </>

    );

}

export default Home;