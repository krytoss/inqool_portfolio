import { FC } from 'react'

type Props = {
    anchor: string,
    children: string
}

const NavLink : FC<Props> = ({ anchor, children }) => {

    const scrollTo = (event: React.MouseEvent) => {
        event.preventDefault()
		document.getElementById(anchor)?.scrollIntoView({
			behavior: 'smooth',
		});
	};

    return (
        <li className='header__nav__item'>
            <a href={`#${anchor}`} className='header__nav__item__link' onClick={(event) => scrollTo(event)}>
                {children}
            </a>
        </li>
    )
}

export default NavLink