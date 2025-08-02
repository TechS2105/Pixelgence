import React, {useState, useEffect} from 'react';
import WebSolutionStyle from '../../public/styles/Websolution.module.css'
import ThirdScrollBar from '../components/Thirdscrollbar';

let img="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function Websolutionsection() {

    const [headingStyle, setHeadingStyle] = useState({
        
        opacity: "0",
        filter: "blur(10px)",

    });

    const [paraStyle, setParaStyle] = useState({

        opacity: "0",
        filter: "blur(10px)"

    })

    const [buttonStyle, setButtonStyle] = useState({

        opacity: "0",
        filter: "blur(10px)",

    })

    function handleScrollAnimation() {
        
        if (window.scrollY > 1500) {
            
            setHeadingStyle({

                opacity: "1",
                filter: "blur(0px)",
                transition:  "all 1s ease",

            })

            setParaStyle({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 1s ease 0.2s"

            })

            setButtonStyle({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 1s ease 0.3s"

            })

        } else {
            
            setHeadingStyle({

                opacity: "0",
                filter: "blur(10px)",
                transition: "all 1s ease 0.3s"

            })

            setParaStyle({

                opacity: "0",
                filter: "blur(10px)",
                transition: "all 1s ease 0.2s"

            })

            setButtonStyle({

                opacity: "0",
                filter: "blur(10px)",
                transition: "all 1s ease"

            })

        }

    }

    useEffect(() => {

        window.addEventListener("scroll", handleScrollAnimation);

    }, [])
    
    return (

        <>
            
            <div className={WebSolutionStyle.webSolutionDiv} onScroll={handleScrollAnimation}>

                <ThirdScrollBar />

                <img src={img} alt="office view" data-scroll data-scroll-speed={ -0.5 }/>

                <div className={WebSolutionStyle.overlayDiv} >

                    <div className={WebSolutionStyle.webSolutionContent} data-scroll data-scroll-speed={0.2}>

                        <h2 style={headingStyle}> For All Your Web Solutions </h2>
                        <p style={paraStyle}>Delivering innovative, reliable, and scalable web solutions tailored to elevate your digital presence.</p>
                        <button style={buttonStyle}> View More </button>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Websolutionsection;