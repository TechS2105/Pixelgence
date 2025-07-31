import React from 'react';
import ScrollBasedHeaderStyle from '../../public/styles/Scrollbasedheader.module.css';
import { NavLink } from 'react-router-dom';

function Scrollbasedheader(){

    return(

        <>
        
            <header className={ScrollBasedHeaderStyle.scrollHeader}>

                <div className={ScrollBasedHeaderStyle.scrollHeaderLogo}>

                    <NavLink to="/"><h1> Pixelgence </h1></NavLink>

                </div>

                <div className={ScrollBasedHeaderStyle.scrollNavMenu}>

                    

                </div>

            </header>
            
        </>

    );

}

export default Scrollbasedheader;