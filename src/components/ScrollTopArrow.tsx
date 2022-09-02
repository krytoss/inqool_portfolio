import { useEffect } from 'react';
import { useState } from 'react'

import '../scss/scrolltoparrow.scss'

import Button from './Button'

const ScrollTopArrow = () => {
    const [ showArrow, setShowArrow ] = useState<boolean>(false);
    const triggerOffset = 200;

    const checkTopOffset = () => {
        if ( !showArrow && window.pageYOffset >= triggerOffset ) {
            setShowArrow(true)
        } else if ( showArrow && window.pageYOffset < triggerOffset) {
            setShowArrow(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkTopOffset)
        return () => {
            window.removeEventListener('scroll', checkTopOffset)
        }
    })

    return (
        <Button id='scrolltop__arrow' className={ showArrow ? '' : 'hide' } onClick={scrollToTop}>
        </Button>
    )
}

export default ScrollTopArrow