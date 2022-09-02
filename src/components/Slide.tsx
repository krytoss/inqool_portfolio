import { FC } from 'react'

type Props = {
    image: string,
    children: React.ReactNode
}

const Slide : FC<Props> = ({ image, children }) => {
    return (
        <div
            className='slider__slide'
            style={{
                fontSize: '20px',
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }}
        >
            { children }
        </div>
    )
}

export default Slide