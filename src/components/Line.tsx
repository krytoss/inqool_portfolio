import { FC } from 'react'

import '../scss/line.scss'

type Props = {
    className: string,
    width: number,
    height: number
}

const Line : FC<Props> = ({ className, width, height }) => (
    <span className={`line ` + className} style={{
        width: `${width}px`,
        height: `${height}px`
    }}>

    </span>
)

export default Line