import { useCallback, useRef } from 'react'
import { FC, useState, useEffect } from 'react'

import '../scss/nav.scss'

import NavLink from './NavLink'
import Hamburger from './Hamburger'
import Search from './Search'

const Nav : FC = () => {

    const [ scrollDown, setScrollDown ] = useState<boolean>(false)
    const [ hasScrolled, setHasScrolled ] = useState<boolean>(false)
    const [ lastScrollTop, setLastScrollTop ] = useState<number>(window.scrollY)
    const [ showNav, setShowNav ] = useState<boolean>(false)
    const [ scrolledToTop, setScrolledToTop ] = useState<boolean>(true)
    const menuRef = useRef<HTMLDivElement>(null)

    const checkScroll = useCallback(() => {
        setScrolledToTop(window.scrollY < 100)
        if (Math.abs(lastScrollTop - window.scrollY) >= 15) {
            if (lastScrollTop < window.scrollY) {
                if (window.scrollY > 150) {
                    setLastScrollTop(window.scrollY)
                    setScrollDown(true)
                }
            } else {
                setLastScrollTop(window.scrollY)
                setScrollDown(false)
            }
        }
    }, [ lastScrollTop ])

    const showHideResponsiveNav = () => {
        setShowNav(!showNav)
    }

    const handleScroll = () => {
        setHasScrolled(true)
    }

    const handleResize = () => {
        if (window.outerWidth > 768) {
            setShowNav(false)
        }
    }

    const handleClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowNav(false)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (hasScrolled) {
                checkScroll()
                setHasScrolled(false)
            }
        }, 100);
        return () => clearInterval(interval);
    }, [ hasScrolled, checkScroll ]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('click', handleClick)
        }
    }, [])
    
    return (
        <nav
            id='header__nav'
            className={
                ( scrolledToTop ? 'scrolled-top' : '') +
                ( scrollDown ? ' hide' : '' ) +
                ( showNav ? ' show-nav' : '' )
            }
            ref={menuRef}
        >
            <img className='nav__logo' src={process.env['PUBLIC_URL'] + '/img/logo.png'} alt="" />
            <ul className='nav'>
                <NavLink anchor='portfolio'>
                    Portfolio
                </NavLink>
                <NavLink anchor='skills'>
                    Skills
                </NavLink>
                <li>
                    <Search />
                </li>
            </ul>
            <Hamburger onClick={showHideResponsiveNav} />
        </nav>
    )

}

export default Nav