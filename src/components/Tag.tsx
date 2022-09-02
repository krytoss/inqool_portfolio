import { FC } from "react"

import '../scss/tag.scss'

type Props = {
    name: string,
    small?: boolean,
    active?: boolean,
    x?: boolean,
    onClick?: () => void
}

const Tag : FC<Props> = ({ name, small, active, x, onClick }) => {
    return (
        <span
            className={
                `tag`
                + (small ? ' tag--small' : '')
                + (onClick ? ' tag--clickable' : '')
                + (active ? ' tag--active' : '')
            }
            onClick={onClick}>
            <span className="text">
                {name}
                { x &&
                    <span className='tag__cancel'>&#215;</span>
                }
                { onClick && active && (<> &#10004;</>) }
            </span>
        </span>
    )
}

export default Tag