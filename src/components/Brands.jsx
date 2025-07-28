import React from 'react';
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
    
    return (

        <>
        
            <SixthScrollBar />

            <div className={BrandStyle.brandContainer} data-scroll-container>

                <div className={BrandStyle.brandContent} data-scroll data-scroll-speed={-0.3}>

                    <div className={BrandStyle.brandText}>

                        <span> Brands </span>
                        <h2>Partners and Long-Term Clients</h2>
                        <p>Trusted by visionary partners, growing together through long-term collaboration.</p>
                        <button> View More </button>

                    </div>

                </div>

                <div className={BrandStyle.brandLogos} data-scroll data-scroll-speed={-0.2}>

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