import React from 'react';
import AboutStyle from '../../public/styles/About.module.css';
import BannerImage from '../components/Bannerimage';
import StayTunedSection from '../components/Staytuned';
import Footer from '../components/Footer';

let img="/images/banner image/img3.jpeg";

function About() {
    
    return (

        <>
        
            <div className={AboutStyle.aboutBannerImage}>

                <BannerImage
                
                    image={img}
                    title="About Coming Soon Banner Image"
                    
                />

            </div>

            <div className={AboutStyle.stayTunedSection}>

                <StayTunedSection
                
                    heading="Stay Tuned With Us For New Updates..."
                    
                />

            </div>

            <Footer />
            
        </>

    );

}

export default About;