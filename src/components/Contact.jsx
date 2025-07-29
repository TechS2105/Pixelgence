import Reac, { useState, useEffect, useRef } from 'react';
import ContactStyle from '../../public/styles/Contact.module.css';
import ContactScrollBar from '../components/Allinonescrollbar';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

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

                </div>

            </main>

            <Footer />
            
        </>

    );

}

export default Contact;