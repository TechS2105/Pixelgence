import React from 'react';
import PortfolioScrollBarStyle from '../../public/styles/Portfolioscrollbar.module.css';

function Portfolioscrollbar() {
    
    return (

        <>
        
            <div className={PortfolioScrollBarStyle.scrollBarStyle} data-scroll data-scroll-speed={0.3}>

                <span></span>

            </div>
            
        </>

    );

}

export default Portfolioscrollbar;