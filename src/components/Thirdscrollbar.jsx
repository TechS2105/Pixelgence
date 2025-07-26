import React from 'react';
import ThirdScrollBarStyle from '../../public/styles/Thirdscrollbar.module.css';

function Thirdscrollbar() {
    
    return (

        <div className={ThirdScrollBarStyle.scrollBar} data-scroll data-scroll-speed={0.2}>

            <span></span>

        </div>

    );

}

export default Thirdscrollbar;