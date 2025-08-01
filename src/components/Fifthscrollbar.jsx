import React from 'react';
import FifthScrollBarStyle from '../../public/styles/Fifthscrollbar.module.css'

function Fifthscrollbar(){

    return (

        <div className={FifthScrollBarStyle.fifthScrollBarStyle} data-scroll data-scroll-speed={0.5}>

            <span></span>

        </div>

    );

}

export default Fifthscrollbar;