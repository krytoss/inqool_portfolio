import { FC, useState, useEffect, useCallback } from 'react'

import '../scss/slider.scss'
import SliderArrow from './SliderArrow'

import SliderContentWrapper from './SliderContentWrapper'
import SliderControls from './SliderControls'

const Slider : FC = () => {
    const [ slide, setSlide ] = useState<number>(0)
    const [ slides, setSlides ] = useState<number>(0)

    const nextSlide = useCallback(() => {
        setSlide( slide => ( slide + 1 ) % slides )
    }, [ slides ])

    const prevSlide = useCallback(() => {
        setSlide( slide => ( slide - 1 ) < 0 ? slides - 1 : slide - 1 )
    }, [ slides ])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [ slide, nextSlide ]);

    return (
        <div id='slider'>
            <SliderContentWrapper setSlides={setSlides} slide={slide}/>
            <SliderControls nextSlide={nextSlide} prevSlide={prevSlide} slide={slide} slides={slides} setSlide={setSlide}/>
            <SliderArrow href='#portfolio' />
        </div>
    )

}

export default Slider