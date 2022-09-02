import { FC, useEffect } from 'react'

import Slide from './Slide'

type Props = {
    setSlides: (slides: number) => void,
    slide: number
}

const SliderContentWrapper : FC<Props> = ({ setSlides, slide }) => {

    // Number of slides in slider
    const slides = 6

    useEffect(() => {
        setSlides(slides)
    }, [ setSlides ]);

    return (
        <div id='slider__content' style={{
            transform: `translateX( ${slide * 100 * -1}vw )`,
            width: `${slides * 100}vw`,
        }}>
            <Slide image={process.env['PUBLIC_URL'] + '/img/bg_only.png'}>
                <h2 className='slider__slide__text'>
                    Lorem ipsum
                </h2>
                <img className='slider__slide__image--small slider__slide__image--bounce' src={process.env['PUBLIC_URL'] + '/img/website.png'} alt="" />
            </Slide>
            <Slide image={process.env['PUBLIC_URL'] + '/img/bg.png'}>
                <h2 className='slider__slide__text'>
                    inQool portfolio
                </h2>
            </Slide>
            <Slide image={process.env['PUBLIC_URL'] + '/img/bg3.png'}>
            </Slide>
            <Slide image={process.env['PUBLIC_URL'] + '/img/slide3.png'}>
            </Slide>
            <Slide image={process.env['PUBLIC_URL'] + '/img/slide3.png'}>
            </Slide>
            <Slide image={process.env['PUBLIC_URL'] + '/img/slide3.png'}>
            </Slide>
        </div>
    )
}

export default SliderContentWrapper