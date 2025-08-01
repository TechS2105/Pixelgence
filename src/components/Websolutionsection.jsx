import React from 'react';
import WebSolutionStyle from '../../public/styles/Websolution.module.css'
import ThirdScrollBar from '../components/Thirdscrollbar';

let img="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function Websolutionsection() {
    
    return (

        <>
            
            <div className={WebSolutionStyle.webSolutionDiv}>

                <ThirdScrollBar />

                <img src={img} alt="office view" data-scroll data-scroll-speed={ -0.5 } />

                <div className={WebSolutionStyle.overlayDiv} >

                    <div className={WebSolutionStyle.webSolutionContent} data-scroll data-scroll-speed={0.2} data-scroll-direction={'horizontal'}>

                        <h2> For All Your Web Solutions </h2>
                        <p>Delivering innovative, reliable, and scalable web solutions tailored to elevate your digital presence.</p>
                        <button> View More </button>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Websolutionsection;