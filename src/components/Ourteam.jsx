import React, {useState} from 'react';
import OurTeamStyle from '../../public/styles/Ourteam.module.css';

function Ourteam() {

    const [activeIndex, setActiveIndex] = useState(null);

    function handleTitleClick(idx) {
        
        setActiveIndex(idx);

    }

    
    return (

        <>
        
            <div className={OurTeamStyle.ourTeamSection}>

                <div className={OurTeamStyle.ourTeamBox1}>

                    <img src="../../public/images/our team image/img1.jpeg" alt="" />

                </div>

                <div className={OurTeamStyle.ourTeamBox2}>

                    <div className={OurTeamStyle.teamBoxHeading}>

                        <p>EXPERTISE</p>
                        <h2>Achive Success With Our Team</h2>

                    </div>

                    <div className={OurTeamStyle.teamBoxContent}>

                        <div className={OurTeamStyle.teamHeadingNames}>

                            <ul>

                                {["Design", "Marketing", "Devs"].map((name, idx) => {

                                    return (

                                        <li
                                            key={name}
                                            onClick={() => { handleTitleClick(idx) }}
                                            className={ activeIndex === idx ? OurTeamStyle.afterAnimation : ''}    
                                        
                                        >{name}</li>

                                    );
                                    

                                })}

                            </ul>
                            
                        </div>

                        <div className={OurTeamStyle.teamContent}>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsam. Inventore ut odit voluptatem reiciendis quas. Placeat repudiandae saepe.</p>

                            <ul>

                                <li>Lorem, ipsum dolor sit amet consectetur</li>
                                <li>Lorem, ipsum dolor consectetur</li>
                                <li>Lorem, ipsum dolor sit consectetur</li>
                                <li>Lorem, ipsum dolor sit amet </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Ourteam;