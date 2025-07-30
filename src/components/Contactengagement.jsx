import React from 'react';
import { SlArrowRight } from "react-icons/sl";

function Contactengagement({ContactStyle}) {
    
    return (

        <>
            
            <div className={ContactStyle.contactEngagementBox}>

                    <div className={ContactStyle.joinTeam}>

                        <div className={ContactStyle.textSection}>

                            <h3> Join Our Team </h3>
                            <p>Unlock your potential—collaborate, innovate, and grow with our visionary digital marketing team.</p>
                        
                        </div>
                        <div className={ContactStyle.iconSection}>
                        
                            <div className={ContactStyle.rightArrowIcon}>
                            
                                <SlArrowRight />

                            </div>

                        </div>

                    </div>

                    <div className={ContactStyle.newsLetter}>

                        <div className={ContactStyle.textSection}>
                        
                            <h3> Our Newsletter </h3>
                            <p>Stay ahead with insights, trends, and innovations. Subscribe to our creative digital marketing newsletter today.</p>

                        </div>
                    
                        <div className={ContactStyle.iconSection}>
                        
                            <div className={ContactStyle.rightArrow}>
                            
                                <SlArrowRight />

                            </div>

                        </div>

                    </div>

            </div>

        </>

    );

}

export default Contactengagement;