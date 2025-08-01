import React from 'react';
import SixthScrollBarStyle from '../../public/styles/Sixthscrollbar.module.css';

function Sixthscrollbar() {
    
    return (

        <div className={SixthScrollBarStyle.scrollBar} data-scroll data-scroll-speed={0.2}>

            <span></span>

        </div>

    );

}

export default Sixthscrollbar;