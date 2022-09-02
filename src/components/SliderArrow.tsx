import { FC } from "react"

import '../scss/sliderarrow.scss'

type Props = {
    href: string
}

const SliderArrow : FC<Props> = ({ href }) => {
    return (
        <a href={href} className='slider__arrow'>
            <span></span>
        </a>
    )
}

export default SliderArrow