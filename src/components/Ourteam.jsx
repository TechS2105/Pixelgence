import React, {useState, useEffect} from 'react';
import OurTeamStyle from '../../public/styles/Ourteam.module.css';
import OurTeamContent from '../../custom objects/ourteamcontent.js';
import FifthScrollBar from '../components/Fifthscrollbar.jsx';

function Ourteam() {

    const [activeIndex, setActiveIndex] = useState(null);

    const [teamImageAnimation, setTeamImageAnimation] = useState({

        transform: "translateX(-1000px) rotateY(180deg)",
        opacity: "0",
        filter: "blur(20px)",
        
    });

    const [headingAnimation, setHeadingAnimation] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [paraAnimation, setParaAnimation] = useState({

        opacity: "0",
        filter: "blur(20px)"

    });

    const [nameAnimation, setNameAnimation] = useState({

        opacity: "0", 
        filter: "blur(20px)",

    })

    function handleTitleClick(idx) {
        
        setActiveIndex(idx);

    }

    function handelOurTeamScroll() {
        
        if (window.scrollY >= 2700) {
            
            setTeamImageAnimation({

                transform: "translateX(0px) rotateY(180deg)",
                opacity: "1",
                transition: "all 1s ease",
                filter: "blur(0px)"

            });

            setParaAnimation({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.5s",

            });
            
            setHeadingAnimation({

                opacity: "1",
                filter: "blur(0px)",
                transition: 'all 0.8s ease 0.7s',
                transform: "translateX(0px)"

            });

            setNameAnimation({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.9s"

            });

        } else {
            
            setTeamImageAnimation({

                transform: "translateX(-1000px) rotateY(180deg)",
                opacity: "0",
                transition: "all 1s ease",
                filter: "blur(20px)"

            });

            setParaAnimation({

                opacity: "0",
                filter: "blur(20px)",
                transition: 'all 0.8s ease 0.5s'

            });

            setHeadingAnimation({

                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease 0.7"

            });

            setNameAnimation({

                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            })

        }

    }

    useEffect(() => {

        window.addEventListener("scroll", handelOurTeamScroll);

    }, [])
    
    return (

        <>
        
            <div className={OurTeamStyle.ourTeamSection} onScroll={handelOurTeamScroll}>

                <FifthScrollBar />

                <div className={OurTeamStyle.ourTeamBox1} data-scroll data-scroll-speed={0.3}>

                    <img src="/images/our team image/img1.jpeg" alt="Our Team Image" style={teamImageAnimation} />

                </div>

                <div className={OurTeamStyle.ourTeamBox2}  data-scroll data-scroll-speed={0.4}>

                    <div className={OurTeamStyle.teamBoxHeading}>

                        <p style={paraAnimation}>EXPERTISE</p>
                        <h2 style={headingAnimation}>Achieve Success With Our Team</h2>

                    </div>

                    <div className={OurTeamStyle.teamBoxContent}>

                        <div className={OurTeamStyle.teamHeadingNames}>

                            <ul>

                                {["Design", "Marketing", "Devs"].map((name, idx) => {

                                    return (

                                        <li
                                            key={idx}
                                            onClick={() => { handleTitleClick(idx) }}
                                            className={activeIndex === idx ? OurTeamStyle.afterAnimation : ''} 
                                            style={nameAnimation}
                                        
                                        >{name}</li>

                                    );

                                })}

                            </ul>
                            
                        </div>

                        {OurTeamContent.map((content, idx) => {

                            return (

                                idx === activeIndex ? (

                                    <div className={ OurTeamStyle.teamContent } key={idx}>

                                        <p>{content.contentPara}</p>

                                        <ul>

                                            <li>{content.bullet1}</li>
                                            <li>{content.bullet2}</li>
                                            <li>{content.bullet3}</li>
                                            <li>{content.bullet4}</li>

                                        </ul>

                                    </div>
                                    
                                ) : null

                            );

                        })}
                       

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Ourteam;