import React, {useState, useEffect, useCallback} from 'react';
import ScrollBasedHeaderStyle from '../../public/styles/Scrollbasedheader.module.css';
import { NavLink } from 'react-router-dom';

function Scrollbasedheader() {
    
    const [isFirstSpanClick, setIsFirstSapnClick] = useState(false);
    const [isSecondSpanClick, setIsSecondSpanClick] = useState(false);
    const [isActiveSideMainMenuBox, setIsActiveSideMainMenuBox] = useState(false);
    const [isActiveSideInnerMenuBox, setIsActiveSideInnerMenuBox] = useState(false);

    function handelSpanClick() {
    
        setIsFirstSapnClick(prev => !prev);
        setIsSecondSpanClick(prev => !prev);
        setIsActiveSideMainMenuBox(prev => !prev);
        setIsActiveSideInnerMenuBox(prev => !prev);

    }

    const firstSpanIconClick = isFirstSpanClick ? {

        transform: "rotate(50deg) translate(-2px, -3px)",
        width: "35px",
        transition: "all 0.8s ease",

    } : {
        
        transform: "translate(0px, 0px) rotate(0deg)",
        width: "50px",
        transition: "all 0.8s ease",

    }

    const secondSpanIconClick = isSecondSpanClick ? {

        transform: "rotate(-50deg) translate(8px, -5px)",
        width: "35px",
        transition: "all 0.8s ease"

    } : {

        transfrom: "rotate(0deg) translate(0px, 0px)",
        width: "30px",
        transition: "all 0.8s ease",

    }

    const [scrollHeaderStyle, setScrollHeaderStyle] = useState({

        transform: "translateY(-100px)",
        opacity: "0",
        filter: "blur(10px)"

    });

    const scrollSideMenuMainBox = isActiveSideMainMenuBox ? {

        transform: "translateX(0px)",
        transition: 'all 1.5s ease',
        opacity: "1"

    } : {

        transform: "translateX(2000px)",
        transition: "all 1.5s ease 0.3s",
        opacity: "0"

    }

    const scrollSideMenuInnerBox = isActiveSideInnerMenuBox ? {

        transfrom: "translateX(0px)",
        transition: 'all 1.5s ease 0.1s',
        opacity: "1",

    } : {

        transform: "translateX(1000px)",
        transition: "all 1.5s ease",
        opacity: "0",

    }

    const scrollOnWheelEvent = useCallback((e) => {

        if (e.deltaY < 0) {
            
            setScrollHeaderStyle({

                transfrom: "translateY(0px)",
                transition: 'all 0.8s ease',
                opacity: "1",
                filter: "blur(0px)"

            })

        } else {
            
            setScrollHeaderStyle({

                transform: "translateY(-100px)",
                transition: "all 0.8s ease",
                opacity: "0",
                filter: "blur(10px)",

            })

        }

    },[]) 

    const scrollHeaderEvent = useCallback((e) => {

        if (window.scrollY > 1000) {
            
            scrollOnWheelEvent();
            e.preventDefault();

        }else {
            
            setScrollHeaderStyle({

                transform: "translateY(-100px)",
                transition: "all 0.8s ease",
                filter: "blur(10px)",
                opacity: "0",

            })

        }

    }, [scrollOnWheelEvent])

    useEffect(() => {

        window.addEventListener("wheel", scrollOnWheelEvent);
        window.addEventListener("scroll", scrollHeaderEvent);
        
    }, [scrollOnWheelEvent, scrollHeaderEvent]);

    return(

        <>
        
            <header className={ScrollBasedHeaderStyle.scrollHeader} onWheel={scrollOnWheelEvent} style={scrollHeaderStyle} onScroll={scrollHeaderEvent}>

                <div className={ScrollBasedHeaderStyle.scrollHeaderLogo}>

                    <NavLink to="/"><h1> Pixelgence </h1></NavLink>

                </div>

                <div className={ScrollBasedHeaderStyle.scrollNavMenu}>

                    <nav>

                        <ul>

                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                            <li><NavLink to="/blog">BLOG</NavLink></li>
                            <li><NavLink to="/contact">CONTACT</NavLink></li>

                        </ul>

                    </nav>

                </div>

                <div className={ScrollBasedHeaderStyle.headerMenuIcon}>

                    <div className={ScrollBasedHeaderStyle.menuIcon} onClick={handelSpanClick}>

                        <span style={firstSpanIconClick}></span>
                        <span style={secondSpanIconClick}></span>

                    </div>

                </div>

                <div className={ScrollBasedHeaderStyle.scrollSideMenu} style={scrollSideMenuMainBox}>

                    <div className={ScrollBasedHeaderStyle.scrollInnerSubMenu} style={scrollSideMenuInnerBox}>


                    </div>

                </div>

            </header>
            
        </>

    );

}

export default Scrollbasedheader;