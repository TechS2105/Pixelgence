import React, {useState, useEffect} from 'react';
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
    
    const [swiperBlogBoxAnime, setSwiperBlogBoxAnime] = useState({

        transform: 'translateY(2000px)',
        opacity: "0",
        filter: "blur(50px)"

    });

    const [navigationArrow, setNavigationArrow] = useState({

        transform: 'translateX(1000px)',
        opacity: "0",
        filter: "blur(10px)"

    })

    function handleSwiperBlogScroll() {

       if(window.scrollY >= 2100){

            setSwiperBlogBoxAnime({

                opacity: "1",
                transform: "translateY(0px)",
                filter: "blur(0px)",
                transition: "all 1.5s ease",

            })
           
       } else {
           
           setSwiperBlogBoxAnime({
               
               opacity: "0",
               filter: "blur(50px)",
               transform: "translateY(2000px)",
               transition: "all 1.5s ease"
               
           })
           
       }

        if (window.scrollY >= 2400) {
           
            setNavigationArrow({

                transform: "translateX(0px)",
                transition: "all 1s ease",
                opacity: '1',
                filter: "blur(0px)",

            });

        } else {
            
            setNavigationArrow({

                transform: "translateX(1000px)",
                transition: 'all 1s ease',
                opacity: "0",
                filter: "blur(10px)",

            })

       }

    }

    useEffect(() => {

        window.addEventListener("scroll", handleSwiperBlogScroll)

    }, [])

    return (

        <>

            <div className={BlogSectionStyle.blogSection} data-scroll data-scroll-speed={0.2} onScroll={handleSwiperBlogScroll}>

                <ForuthScrollBar />

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
                    style={swiperBlogBoxAnime}
                    
                >

                    {Blogs.map((blogItem, idx) => {

                        return (

                            <SwiperSlide className={BlogSectionStyle.swiperBox} key={idx} onMouseOver={() => setActiveIndex(idx)} onMouseOut={() => setActiveIndex()}>

                                <a href="#">

                                    <div className={BlogSectionStyle.swiperImage}>

                                        <img src={blogItem.image} alt={blogItem.title} className={activeIndex === idx ? BlogSectionStyle.zoomImage : ''} />
                                                                            
                                    </div>
                                    
                                    <div className={BlogSectionStyle.swiperContent}>

                                        <p><span> {blogItem.date} </span> / <span> {blogItem.category} </span></p>
                                        <h2>{blogItem.title}</h2>
                                        <NavLink to="#" className={(activeIndex === idx ? BlogSectionStyle.beforeAnimation : "")}> READ More </NavLink>

                                    </div>

                                </a>
                                

                            </SwiperSlide>

                        );

                    })}
                    

                </Swiper>

                <div className={BlogSectionStyle.swiperNavigationSection}>

                    <div className={BlogSectionStyle.swiperNavigation} style={navigationArrow}>

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