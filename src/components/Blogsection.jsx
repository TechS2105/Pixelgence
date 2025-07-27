import React, {useState} from 'react';
import BlogSectionStyle from '../../public/styles/Blogsection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Blogs from '../../custom objects/blog.js';
import ForuthScrollBar from '../components/Fourthscrollbar.jsx';

function Blogsection() { 

    const [activeIndex, setActiveIndex] = useState();

    return (

        <>
            <ForuthScrollBar />

            <div className={BlogSectionStyle.blogSection} data-scroll data-scroll-speed={0.2}>

                <Swiper className={BlogSectionStyle.swiperSection}
                
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    speed={1500}
                    autoplay={{

                        delay: 2500

                    }}

                    navigation={{

                        nextEl: '#nextArrow',
                        prevEl: '#prevArrow',

                    }}
                    
                    modules={[Autoplay, Navigation]}
                    
                >

                    {Blogs.map((blogItem, idx) => {

                        return (

                            <SwiperSlide className={BlogSectionStyle.swiperBox} key={idx} onMouseOver={() => setActiveIndex(idx)} onMouseOut={() => setActiveIndex()}>

                                <NavLink to="#">

                                    <div className={BlogSectionStyle.swiperImage}>

                                        <img src={blogItem.image} alt={blogItem.title} className={activeIndex === idx ? BlogSectionStyle.zoomImage : ''} />
                                                                            
                                    </div>
                                    
                                    <div className={BlogSectionStyle.swiperContent}>

                                        <p><span> {blogItem.date} </span> / <span> {blogItem.category} </span></p>
                                        <h2>{blogItem.title}</h2>
                                        <NavLink to="#" className={(activeIndex === idx ? BlogSectionStyle.beforeAnimation : "")}> READ More </NavLink>

                                    </div>

                                </NavLink>
                                

                            </SwiperSlide>

                        );

                    })}
                    

                </Swiper>

                <div className={BlogSectionStyle.swiperNavigationSection}>

                    <div className={BlogSectionStyle.swiperNavigation}>

                        <div id="prevArrow" className={BlogSectionStyle.prevArrow}>

                            <MdOutlineKeyboardArrowLeft/>
                            
                        </div>

                        <div id="nextArrow" className={BlogSectionStyle.nextArrow}>

                            <MdKeyboardArrowRight/>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Blogsection;