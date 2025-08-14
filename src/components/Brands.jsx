import React, {useState, useEffect} from 'react';
import BrandStyle from '../../public/styles/Brands.module.css';
import BrandLogoCarousel from '../components/Brandlogocarousel';
import SecondBrandLogoCarousel from '../components/Secondbrandlogocarousel';
import SixthScrollBar from '../components/Sixthscrollbar';

let img1 = "/images/brand logo image/img1.png";
let img2 = "/images/brand logo image/img2.png";
let img5 = "/images/brand logo image/img5.png";
let img6 = '/images/brand logo image/img6.png';
let img7 = '/images/brand logo image/img7.png';

function Brands() {

    const [brandSpan, setBrandSpan] = useState({
        
        transform: "translateX(-200px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [brandHeading, setBrandHeading] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    function hadleBrandScroll() {
        
        if(window.scrollY > 3500){

            setBrandSpan({

                transform: "translateX(0px)",
                transition: "all 0.8s ease",
                opacity: "1",
                filter: "blur(0px)"

            });

            setBrandHeading({

                transform: "translateX(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: 'all 0.8s ease 0.5'

            });

        } else {
            
            setBrandSpan({

                transform: "translateX(-200px)",
                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease 0.5s"

            });

            setBrandHeading({

                transform: "translateX(-500px",
                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease 0.4s"

            })

        }

    }

    useEffect(() => {

        window.addEventListener("scroll", hadleBrandScroll);

    }, []);
    
    return (

        <>

            <div className={BrandStyle.brandContainer} onScroll={hadleBrandScroll}>

                <SixthScrollBar />

                <div className={BrandStyle.brandContent} data-scroll data-scroll-speed={0.3}>

                    <div className={BrandStyle.brandText}>

                        <span style={brandSpan}> Brands </span>
                        <h2 style={brandHeading}>Partners and Long-Term Clients</h2>
                        <p>Trusted by visionary partners, growing together through long-term collaboration.</p>
                        <button> View More </button>

                    </div>

                </div>

                <div className={BrandStyle.brandLogos} data-scroll data-scroll-speed={0.2}>

                    <div className={BrandStyle.brandLogoCarousel}>

                        <BrandLogoCarousel
                        
                            img1={img1}
                            img2={img2}
                            img5={img5}
                            img6={img6}
                            img7={img7}
                            title1="JIVES MEDIA"
                            title2="DIRECLY"
                            title5="JUMPFLY"
                            title6="CLICKRAY"
                            title7="CREATIVESPONGE" 
                            
                        />

                    </div>

                    <div className={BrandStyle.secondBrandLogoCarousel}>

                        <SecondBrandLogoCarousel
                        
                            img1={img1}
                            img2={img2}
                            img5={img5}
                            img6={img6}
                            img7={img7}
                            title1="JIVES MEDIA"
                            title2="DIRECLY"
                            title5="JUMPFLY"
                            title6="CLICKRAY"
                            title7="CREATIVESPONGE" 
                            
                        />

                    </div>

                </div>
                
            </div>

        </>

    );

}

export default Brands;