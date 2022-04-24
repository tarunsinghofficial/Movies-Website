import React from 'react'
import Slider from './slider'
import Swiper from './swiper'

function Carousel({ movies }, loop = true) {

    return (
        <>
            <Swiper>
                {
                    movies.map((mov, index) => {
                        return (
                            <Slider {...mov} key={index}  />
                        )
                    })
                }

            </Swiper>
        </>
    )
}

export default Carousel;