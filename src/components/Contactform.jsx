import React from 'react';

function Contactform({ContactStyle}) {
    
    return (

        <>
        
            <form className={ContactStyle.formStyle}>

                <input type="text" placeholder='Your name'/>
                <input type="email" placeholder='Your email'/><br />
                <textarea cols={64} rows={6} placeholder='Your message'></textarea>
                <button>SEND</button>

            </form>
            
        </>

    );

}

export default Contactform;