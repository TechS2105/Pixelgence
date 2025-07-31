import React, {useState} from 'react';
import NavStyle from '../../public/styles/Navbar.module.css';
import { NavLink } from 'react-router-dom';
import ScrollBasedHeader from '../components/Scrollbasedheader';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideMenuOpen, setSideNavBackSection] = useState(false);

    const handleMenuIcon = () => {

        setIsMenuOpen(prev => !prev);
        setSideNavBackSection(prev => !prev);

    }

    const menuIcon1 = isMenuOpen ? {

        transform: "translateY(2px) rotate(50deg)",
        width: "30px",
        transition: "all 0.8s ease",
        backgroundColor: "#292929",

    } : {

        transform: "translateY(0px) rotate(0deg)",
        width: "50px",
        transition: "all 0.8s ease",

    }

    const menuIcon2 = isMenuOpen ? {

        transform: "translateY(-5px) rotate(-50deg)",
        width: "30px",
        transition: "all 0.8s ease",
        backgroundColor: "#292929"

    } : {

        transform: "translateY(0px) rotate(0deg)",
        width: "30px",
        transition: "all 0.8s ease",

    }

    const sideNavBackSection = isSideMenuOpen ? {

        opacity: "1",
        transform: "translateX(0)",
        transition: "all 1s ease",

    } : {

        opacity: "0",
        transform: "translateX(2000px)",
        transition: "all 1s ease 0.2s",

    }

    const sideNavMenuBox = isSideMenuOpen ? {

        opacity: "1",
        transform: "translateX(0px)",
        transition: "all 1s ease",

    } : {

        opacity: "0",
        transform: "translateX(1000px)",
        transition: "all 1s ease",

    }
    
    return (

        <>
            
            <ScrollBasedHeader />
            <header>

            <div className={NavStyle.logodiv}>

                <h1> Pixelgence </h1>
                
            </div>

            <div className={NavStyle.navmenu}>

                <nav>

                    <ul>

                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                        <li><NavLink to="/blog">BLOG</NavLink></li>
                        <li><NavLink to="/contact">CONTACT</NavLink></li>

                    </ul>

                    <div className={NavStyle.navMenuIcon} onClick={handleMenuIcon}>

                        <span style={menuIcon1}></span>
                        <span style={menuIcon2}></span>

                    </div>
                    
                </nav>

            </div>

            <div className={NavStyle.sideMenuBox} style={sideNavBackSection}>

                <div className={NavStyle.sideMenu} style={sideNavMenuBox}>
                    
                    <div className={NavStyle.sideNavMenuContent}>

                        <h2> Elevating <br /> Brands Through <br /> Innovation </h2>
                        
                        <p>

                            We transform brands with AI, full-stack development, bold design, and inventive marketing to shape tomorrow’s digital future.

                        </p>

                        <NavLink to="#">pixelgence@businessemail.com</NavLink>

                    </div>

                    <div className={NavStyle.sideMenuSocialLlinks}>

                        <NavLink to="#">FACEBOOK</NavLink>
                        <NavLink to="#">TWITTER</NavLink>
                        <NavLink to="#">LINKEDIN</NavLink>

                    </div>

                </div>
                        
            </div>

            </header>

        </>

    );

}

export default Navbar;