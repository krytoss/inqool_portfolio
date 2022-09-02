import { FC } from 'react'

import Button from './Button'

type Props = {
    nextSlide: () => void,
    prevSlide: () => void,
    slide: number,
    slides: number,
    setSlide: (slide: number) => void
}

const SliderControls : FC<Props> = ({ nextSlide, prevSlide, slide, slides, setSlide }) => {

    return (
        <div className='slider__controls'>
            <Button
                className='circle link slider__controls__arrow slider__controls__prev'
                onClick={() => prevSlide()}
                style={{
                    width: '60px',
                    height: '60px'
                }}
            >
                <img src={process.env['PUBLIC_URL'] + '/img/right-arrow.svg'} alt="" />
            </Button>
            <Button
                className='circle link slider__controls__arrow slider__controls__next'
                onClick={() => nextSlide()}
                style={{
                    width: '60px',
                    height: '60px'
                }}
            >
                <img src={process.env['PUBLIC_URL'] + '/img/right-arrow.svg'} alt="" />
            </Button>
            <div className='slider__controls__dots'>
                {
                    [...Array(slides)].map((_, i) => (
                        <button key={i}
                            className={`link slider__controls__dot ${ slide === i && 'slider__controls__dot--active' }`}
                            onClick={() => setSlide(i)}
                        />
                    ))
                }
            </div>
            <div className='slider__controls__numbers'>
                <span className='slider__controls__numbers--active__slide'>
                    { slide + 1 }
                </span>
                / { slides }
            </div>
        </div>
    )

}

export default SliderControls