import React, {useEffect, useRef, useState} from 'react';
import HomeBanner from '../components/Homebanner';
import WebSolutionSection from '../components/Websolutionsection';
import BlogSection from '../components/Blogsection';
import PortfolioSection from '../components/Portfoliosection';
import LocomotiveScroll from 'locomotive-scroll';
import OurTeam from '../components/Ourteam';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

function Home() {

    const [homeAnimation, setHomeAnimation] = useState({

        opacity: "0",
        filter: "blur(10px)",

    });

    function handelHomeLoadAnimation() {
        
        setHomeAnimation({

            opacity: "1",
            transition: "all 2s ease",
            filter: "blur(0px)",

        })

    }

    const scrollRef = useRef(null);

    useEffect(() => {

        window.addEventListener("load", handelHomeLoadAnimation());

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
                
            <main data-scroll-container ref={scrollRef} onLoad={handelHomeLoadAnimation} style={homeAnimation}>

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