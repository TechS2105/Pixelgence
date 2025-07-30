import Reac, { useState, useEffect, useRef } from 'react';
import ContactStyle from '../../public/styles/Contact.module.css';
import ContactScrollBar from '../components/Allinonescrollbar';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import ContactDetailsBox from '../components/Contactdetailsbox';
import ContactForm from '../components/Contactform';
import ContactFromSectionScrollBar from '../components/Contactformscrollbar';
import ContactEngagementSection from '../components/Contactengagement';

let img1 = "https://images.unsplash.com/photo-1600508773950-d522f5bb7606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D";
let img2 = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9mZmljZSUyMGludGVyaW9yfGVufDB8fDB8fHww";
let img3 = "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG9mZmljZSUyMGludGVyaW9yfGVufDB8fDB8fHww";
let img5 = "/images/Contact image/img1.jpg"

function Contact() {

    const [firstSpan, setFirstSpan] = useState({

        transform: "translateY(100px)",
        opacity: "0",

    });

    const [mainContainerStyle, setMainContainerStyle] = useState({

        opacity: "0",
        filter: "blur(20px)"

    })

    function handleContactLoad() {
        
        setMainContainerStyle({

            opacity: "1",
            filter: "blur(0px)",
            transition: "all 2s ease",

        })

        setFirstSpan({

            transform: "translateY(0px)",
            transition: "all 2s ease",
            opacity: "1"

        });

    }

    const scrollRef = useRef(null);

    useEffect(() => {

        window.addEventListener("load", handleContactLoad())

        const scroll = new LocomotiveScroll({

            el: scrollRef.current,
            smooth: true,
            lerp: 0.2,

        });

        return () => {

            scroll.destroy();

        }

    }, [])
    
    return (

        <>
        
            <main data-scroll-container ref={scrollRef}  onLoad={handleContactLoad} style={mainContainerStyle}>

                <div className={ContactStyle.contactBanner}>

                    <img src={img5} alt="Contact Banner image" data-scroll data-scroll-speed={-0.2} />
                    <h1 style={firstSpan}> <span> Feel Free To </span> <span> Contact With Us </span> </h1>
                    <ContactScrollBar />

                </div>

                <div className={ContactStyle.contactDetailsBox}>

                    <ContactFromSectionScrollBar />
                    
                    <div className={ContactStyle.contactSubBox}>

                        <div className={ContactStyle.contactDetails}>

                            <ContactDetailsBox
                            
                                heading="London office design teams contact"
                                mobile="London +(123) 456-7890"
                                email="deon@qodeinteractive.com"
                                location="95 Place de la Garep"
                                styleState={ContactStyle}
                                image={img1}
                                imageTitle="London Office Image"
                                
                            />

                            <ContactDetailsBox
                            
                                styleState={ContactStyle}
                                heading="Berlin office design teams contact"
                                mobile="Berlin +49 (0)30-901820"
                                email="deon@qodeinteractive.com"
                                location="95 Place de la Garep"
                                image={img2}
                                imageTitle="Berlin Office Image"
                                
                            />

                            <ContactDetailsBox
                            
                                styleState={ContactStyle}
                                heading="Belgrade office design teams contact"
                                mobile="Belgrade +381 (11) 33-783222"
                                email="deon@qodeinteractive.com"
                                location="95 Place de la Garep"
                                image={img3}
                                imageTitle="Belgrade office Image"

                                
                            />

                        </div>

                        <div className={ContactStyle.contactBox}>

                            <div className={ContactStyle.contactMap} data-scroll data-scroll-speed={0.2}>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z4Kao4Ka_4KaJIOCmh-Cmr-CmvOCmsOCnjeCmlSwg4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sin!4v1753877915657!5m2!1sbn!2sin" width={600} height={450} style={{ border: 0,  }} allowFullScreen="" loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>

                            </div>

                            <div className={ContactStyle.contactForm} data-scroll data-scroll-speed={0.3}>

                                <div className={ContactStyle.contactHeading}>

                                    <h2> Get in touch </h2>

                                </div>

                                <div className={ContactStyle.form}>

                                    <ContactForm
                                    
                                        ContactStyle={ContactStyle}
                                        
                                    />

                                </div>
                                
                            </div>

                        </div>
   
                    </div>

                </div>

                <ContactEngagementSection
                
                    ContactStyle={ContactStyle}
                    
                />

            </main>

            <Footer />
            
        </>

    );

}

export default Contact;