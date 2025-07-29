import React, {useRef, useEffect, useState} from 'react';
import BlogStyle from '../../public/styles/Blog.module.css'
import BannerImage from '../components/Bannerimage';
import LocomotiveScroll from 'locomotive-scroll';
import StayTunedSection from '../components/Staytuned';
import Footer from '../components/Footer';
import BlogPageScrollBar from '../components/Allinonescrollbar';

let img = '/images/banner image/img3.jpeg';

function Blog() {

    const [mainSectionAnimation, setMainSectionAnimation] = useState({

        opacity: "0"

    });

    const [blogStayTunedAnimation, setBlogStayTunedAnimation] = useState({

        transform: "translateX(-1500px)",
        opacity: "0.5"

    });

    function handleLoad() {
        
        setMainSectionAnimation({

            opacity: "1",
            transition: "all 2s ease"

        })

    }

    function handleBlogScroll() {
        
        if (scrollY > 600) {
            
            setBlogStayTunedAnimation({
               
                transform: "translateX(0px)",
                transition: "all 2s ease",
                opacity: "1"

            });

        } else {
            
            setBlogStayTunedAnimation({

                transform: "translateX(-1500px)",
                transition: "all 2s ease",
                opacity: "0.5",

            })

        }

    }

    const scrollRef = useRef();

    useEffect(() => {

        window.addEventListener("load", handleLoad);
        window.addEventListener("scroll", handleBlogScroll);

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
        
            <main data-scroll-container ref={scrollRef} onLoad={handleLoad} style={mainSectionAnimation}>

                <div className={BlogStyle.blogBannerSection} data-scroll data-scroll-speed={-0.2}>

                    <BannerImage
                                
                        image={img}
                                    
                    />

                    <BlogPageScrollBar />

                </div>

                <div className={BlogStyle.blogStayTunedText} data-scroll data-scroll-speed={-0.0005} onScroll={handleBlogScroll}>
                    
                    <StayTunedSection 
                    
                        heading="Stay Tuned With Us For New Updates..."
                        styleState={blogStayTunedAnimation}

                    />

                    <BlogPageScrollBar />

                </div>

                <Footer />

            </main>
            
        </>

    );

}

export default Blog