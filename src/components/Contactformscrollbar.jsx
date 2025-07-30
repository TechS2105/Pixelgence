import React from 'react'; 
import ContactFromScrollBarStyle from '../../public/styles/Contactfromscrollbar.module.css'

function Contactformscrollbar() {
    
    return (

        <>
        
            <div className={ContactFromScrollBarStyle.contactFromScrollBar} data-scroll data-scroll-speed={0.2}>
                
                <span></span>

            </div>
            
        </>

    );

}

export default Contactformscrollbar;