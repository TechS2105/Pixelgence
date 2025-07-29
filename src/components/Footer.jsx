import React from 'react';
import FooterStyle from '../../public/styles/Footer.module.css';
import SeventhScrollBar from '../components/Seventhscrollbar';
import { NavLink } from 'react-router-dom';
import NewsLetterForm from '../components/Newsletterform';

let date = new Date().getFullYear();

function Footer() {
    
    return (

        <>
        

            <footer className={FooterStyle.footer}>

                <SeventhScrollBar />

                <div className={FooterStyle.firstFooterBox}>

                    <div className={FooterStyle.footerMenuBox}>

                        <div className={FooterStyle.footerheading}>

                            <h2> Pixelgence </h2>

                        </div>

                        <div className={FooterStyle.footerMenuSection}>

                            <div className={FooterStyle.menuBox}>

                                <ul>

                                    <li>A: 75 3rd Ave, New York, NY 10003, USA</li>
                                    <li>T: +1 212-479-4006</li>
                                    <li>E: pixelgence@businessemail.com</li>
                                    <li>T: +1 88 83 78 20 36</li>

                                </ul>

                            </div>
                            <div className={FooterStyle.menuBox}>

                                <ul>

                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/career">Career</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>

                                </ul>

                            </div>
                            <div className={FooterStyle.menuBox}>

                                <ul>

                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                    <li><NavLink to="#">Terms & Condition</NavLink></li>
                                    <li><NavLink to="#">Services</NavLink></li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className={FooterStyle.footerCopyRight}>

                        <p>&copy; {date} | Powered By <NavLink to="https://ssd-lsr3.onrender.com/" target="_blank">SSD</NavLink> | All Rights Reserved</p>

                    </div>

                </div>
                
                <div className={FooterStyle.secondFooterBox}>

                    <div className={FooterStyle.secondFooterNewsletter}>

                        <div className={FooterStyle.newsletterForm}>

                            <h2> Our Newsletter </h2>

                            <NewsLetterForm
                            
                                FooterStyle={FooterStyle}
                                
                            />

                        </div>


                    </div>

                </div>

            </footer>
            
        </>

    );

}

export default Footer;