import React from 'react';
import NavBar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

function Rootlayouts() {
    
    return (

        <>
        
            <NavBar />

            <div style={{width: "100%", height: "100%"}}>

                <Outlet />

            </div>
            
        </>

    );

}

export default Rootlayouts;