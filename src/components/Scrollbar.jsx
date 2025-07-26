import React from 'react';
import ScrollBarStyle from '../../public/styles/Scrollbar.module.css';

function Scrollbar() {
    
    return (

        <>
        
            <div className={ScrollBarStyle.scrollBar} data-scroll data-scroll-speed={0.2}></div>
            
        </>

    );

}

export default Scrollbar;