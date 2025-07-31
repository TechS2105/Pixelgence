import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import EngagementContent from '../components/Engagementcontent';
import ContactEngagementScrollBar from '../components/Contactengagementscrollbar';

function Contactengagement({ContactStyle}) {
    
    return (

        <>

            <div className={ContactStyle.contactEngagementBox}>

                <ContactEngagementScrollBar />

                    <div className={ContactStyle.joinTeam}>

                        <div className={ContactStyle.textSection} data-scroll data-scroll-speed={0.3}>

                            <EngagementContent
                            
                                title="Join Our Team"
                                content="Unlock your potential—collaborate, innovate, and grow with our visionary digital marketing team."
                                
                            />
                        
                        </div>
                        <div className={ContactStyle.iconSection}>
                        
                            <div className={ContactStyle.rightArrowIcon} data-scroll data-scroll-speed={0.3}>
                            
                                <SlArrowRight />

                            </div>

                        </div>

                    </div>

                    <div className={ContactStyle.newsLetter}>

                        <div className={ContactStyle.textSection} data-scroll data-scroll-speed={0.3}>
                        
                            <EngagementContent
                            
                                title="Our Newsletter"
                                content="Stay ahead with insights, trends, and innovations. Subscribe to our creative digital marketing newsletter today."
                                
                            />
                        
                        </div>
                    
                        <div className={ContactStyle.iconSection}>
                        
                            <div className={ContactStyle.rightArrow} data-scroll data-scroll-speed={0.3}>
                            
                                <SlArrowRight />

                            </div>

                        </div>

                    </div>

            </div>

        </>

    );

}

export default Contactengagement;