import React, {useState} from 'react';
import OurTeamStyle from '../../public/styles/Ourteam.module.css';
import OurTeamContent from '../../custom objects/ourteamcontent.js';
import FifthScrollBar from '../components/Fifthscrollbar.jsx';

function Ourteam() {

    const [activeIndex, setActiveIndex] = useState(null);

    function handleTitleClick(idx) {
        
        setActiveIndex(idx);

    }

    
    return (

        <>
        
            <div className={OurTeamStyle.ourTeamSection}>

                <FifthScrollBar />

                <div className={OurTeamStyle.ourTeamBox1} data-scroll data-scroll-speed={0.3}>

                    <img src="/images/our team image/img1.jpeg" alt="Our Team Image" />

                </div>

                <div className={OurTeamStyle.ourTeamBox2}  data-scroll data-scroll-speed={0.4}>

                    <div className={OurTeamStyle.teamBoxHeading}>

                        <p>EXPERTISE</p>
                        <h2>Achieve Success With Our Team</h2>

                    </div>

                    <div className={OurTeamStyle.teamBoxContent}>

                        <div className={OurTeamStyle.teamHeadingNames}>

                            <ul>

                                {["Design", "Marketing", "Devs"].map((name, idx) => {

                                    return (

                                        <li
                                            key={name}
                                            onClick={() => { handleTitleClick(idx) }}
                                            className={ activeIndex === idx ? OurTeamStyle.afterAnimation : ''}    
                                        
                                        >{name}</li>

                                    );

                                })}

                            </ul>
                            
                        </div>

                        {OurTeamContent.map((content, idx) => {

                            return (

                                <div className={activeIndex === idx ? OurTeamStyle.displayDiv : OurTeamStyle.teamContent} key={idx}>

                                    <p className={OurTeamStyle.displayDivPara}>{ content.contentPara }</p>

                                    <ul className={OurTeamStyle.displayDivUl}>

                                        <li>{content.bullet1}</li>
                                        <li>{content.bullet2}</li>
                                        <li>{content.bullet3}</li>
                                        <li>{content.bullet4}</li>

                                    </ul>

                                </div>

                            );

                        })}
                       

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Ourteam;