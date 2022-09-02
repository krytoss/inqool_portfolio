import { FC } from 'react'

import Button from './Button'
import Line from './Line'

type Props = {
    onClick: () => void
}

const Hamburger : FC<Props> = ({ onClick }) => (
    <Button className='header__nav__hamburger' onClick={onClick}>
        <Line className='header__nav__hamburger__line--first' width={15} height={2} />
        <Line className='header__nav__hamburger__line--second' width={15} height={2} />
        <Line className='header__nav__hamburger__line--third' width={15} height={2} />
    </Button>
)

export default Hamburger