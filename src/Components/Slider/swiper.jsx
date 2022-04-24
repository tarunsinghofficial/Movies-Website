import React from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Scrollbar, Lazy, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css"
import 'swiper/components/navigation/navigation.scss';
// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, Lazy, Mousewheel]);

function Carousel({ children, loop = true }) {

    return (
        <>
            <Swiper
                watchSlidesProgress={true}
                watchSlidesVisibility={true}
                preloadImages={true}
                breakpoints={{
                    // when window width is >= 320
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    // when window width is >= 380px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 1
                    },
                    // when window width is >= 480px

                    480: {
                        slidesPerView: 3,
                        spaceBetween: 3
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 3
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 0
                    },
                }}
                loop={loop}
                scrollbar={{ draggable: true }}
                grabCursor={true}
                navigation
                lazy={true}
            >

                {

                    typeof (children) != 'undefined' ?
                        children.length > 1 ?
                            children.map((child, index) => {
                                return (
                                    <SwiperSlide key={index} className="swiper-lazy"   >
                                        {child}
                                        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>*/}
                                    </SwiperSlide>
                                )
                            }) : <SwiperSlide key={0} className="swiper-lazy"   >
                                {children}

                            </SwiperSlide>



                        : <div className="wrapper" ><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></div>

                }

            </Swiper>
        </>
    )
}

export default Carousel;