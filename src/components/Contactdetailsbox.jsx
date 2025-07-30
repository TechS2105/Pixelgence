import React from 'react';

function Contactdetailsbox({styleState, heading, mobile, email, location, image, imageTitle}) { 

    return (

        <>
        
            <div className={styleState.contactDetailsBox1} data-scroll data-scroll-speed={0.5}>
            
                <div className={styleState.flipBoxInner}>

                    <div className={styleState.flipBoxFont}>
                        
                        <h2> {heading} </h2>
                        <address>
                    
                            {mobile}<br/>
                            {email}<br/>
                            {location}<br/>
            
                        </address>
                        
                    </div>

                    <div className={styleState.flipBoxBack}>

                        <img src={image} alt={imageTitle} />

                    </div>

                </div>
            
            </div>
            
        </>

    );

}

export default Contactdetailsbox;
