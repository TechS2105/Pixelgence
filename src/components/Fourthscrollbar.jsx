import React from 'react';
import FourthScrollBarStyle from '../../public/styles/Fourthscrollbar.module.css';

function Fourthscrollbar() {
    
    return (

        <>
        
            <div className={FourthScrollBarStyle.fourthScroll} data-scroll data-scroll-speed={0.2}>

                <span></span>

            </div>
            
        </>

    );

}

export default Fourthscrollbar;