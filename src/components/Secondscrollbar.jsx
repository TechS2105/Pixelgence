import React from 'react';
import SecondScrollBarStyle from '../../public/styles/Secondscrollbar.module.css';

function Secondscrollbar() {
    
    return (

        <div className={SecondScrollBarStyle.scrollBarStyle} data-scroll data-scroll-speed={0.2}>

            <span></span>

        </div>

    );

}

export default Secondscrollbar;