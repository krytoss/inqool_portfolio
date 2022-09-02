import { FC } from 'react'

import '../scss/button.scss'

type Props = {
	id?: string,
    className?: string,
    onClick?: () => void,
    style?: React.CSSProperties,
    children: React.ReactNode,
}

const Button : FC<Props> = ({ id, className, onClick, style, children, }) => (
        <button id={id}
            className={`button ${className ? className : ''}`}
            onClick={onClick}
            style={style}
        >
            <span className='text'>
                {children}
            </span>
        </button>
)

export default Button;