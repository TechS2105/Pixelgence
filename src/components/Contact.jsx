import Reac, { useState, useEffect, useRef } from 'react';
import ContactStyle from '../../public/styles/Contact.module.css';
import ContactScrollBar from '../components/Allinonescrollbar';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import ContactDetailsBox from '../components/Contactdetailsbox';

let img1 = "../../public/images/banner image/img1.jpg";
let img2 = "../../public/images/banner image/img2.jpg";
let img3 = "../../public/images/banner image/img3.jpeg";

function Contact() {

    const [firstSpan, setFirstSpan] = useState({

        transform: "translateY(100px)",
        opacity: "0",

    });

    function handleContactLoad() {
        
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
        
            <main data-scroll-container ref={scrollRef}  onLoad={handleContactLoad}>

                <div className={ContactStyle.contactBanner}>

                    <h1 style={firstSpan}> <span> Feel Free To </span> <span> Contact With Us </span> </h1>
                    <ContactScrollBar />

                </div>

                <div className={ContactStyle.contactDetailsBox}>

                    <ContactScrollBar />

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


                        </div>

                    </div>

                </div>

            </main>

            <Footer />
            
        </>

    );

}

export default Contact;