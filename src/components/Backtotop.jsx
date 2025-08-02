import React from 'react';
import BackToTopStyle from '../../public/styles/Backtotop.module.css';

function Backtotop({handleClickEvent, styleState}) {
    
    return (
        
        <div className={BackToTopStyle.backToTopButton} onClick={handleClickEvent} style={styleState}>

            <span> Back To Top  </span>

        </div>

    )

}

export default Backtotop;