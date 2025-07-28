import React, {useEffect, useRef} from 'react';
import HomeBanner from '../components/Homebanner';
import WebSolutionSection from '../components/Websolutionsection';
import BlogSection from '../components/Blogsection';
import PortfolioSection from '../components/Portfoliosection';
import LocomotiveScroll from 'locomotive-scroll';
import OurTeam from '../components/Ourteam';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

function Home() {

    const scrollRef = useRef(null);

    useEffect(() => {

        const locomotiveScroll = new LocomotiveScroll({

            el: scrollRef.current,
            smooth: true,
            lerp: 0.2,

        })

        return () => {

            locomotiveScroll.destroy();

        }

    }, [])
    
    return (

        <>
        
            <main data-scroll-container ref={scrollRef}>

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