import React from 'react';
import ContactEngagementScrollBarStyle from '../../public/styles/Contactengagementscrollbar.module.css';

function Contactengagementscrollbar() {
    
    return (

        <>
        
            <div className={ContactEngagementScrollBarStyle.scrollbar} data-scroll data-scroll-speed={0.2}>

                <span></span>

            </div>
            
        </>

    );

}

export default Contactengagementscrollbar;