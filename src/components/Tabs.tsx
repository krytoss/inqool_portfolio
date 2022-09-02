import { FC, useEffect, useRef, useState } from 'react'

import '../scss/tabs.scss'
import CupcakeIpsum from './CupcakeIpsum'

import Tab from './Tab'
import TabContent from './TabContent'

const Tabs : FC = () => {

    const [ currentTab, setCurrentTab ] = useState(0)
    const headerRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    const checkScroll = () => {
        if (headerRef.current !== null && menuRef.current !== null) {
            if (menuRef.current?.scrollLeft + headerRef.current?.offsetWidth >= menuRef.current?.scrollWidth - 20) {
                headerRef.current?.classList.add('scrolled-right')
            } else {
                headerRef.current?.classList.remove('scrolled-right')
            }
            if (menuRef.current?.scrollLeft <= 20) {
                headerRef.current?.classList.add('scrolled-left')
            } else {
                headerRef.current?.classList.remove('scrolled-left')
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            checkScroll()
        })
        return () => {
            window.removeEventListener('resize', () => {
                checkScroll()
            })
        }
    }, [])

    useEffect(() => {
        checkScroll()
    }, [])

    return (
        <div className='tabs'>
            <div className="container">
                <div className='tabs__header scrolled-left scrolled-right' ref={headerRef}>
                    <div className='tabs__menu' onScroll={() => checkScroll()} ref={menuRef}>
                        <ul className="tabs__menu__links">
                            <Tab currentTab={currentTab} tab={0} setCurrentTab={setCurrentTab}>
                                HTML
                            </Tab>
                            <Tab currentTab={currentTab} tab={1} setCurrentTab={setCurrentTab}>
                                CSS
                            </Tab>
                            <Tab currentTab={currentTab} tab={2} setCurrentTab={setCurrentTab}>
                                JS
                            </Tab>
                            <Tab currentTab={currentTab} tab={3} setCurrentTab={setCurrentTab}>
                                React
                            </Tab>
                            <Tab currentTab={currentTab} tab={4} setCurrentTab={setCurrentTab}>
                                Perl
                            </Tab>
                            <Tab currentTab={currentTab} tab={5} setCurrentTab={setCurrentTab}>
                                PHP
                            </Tab>
                            <Tab currentTab={currentTab} tab={6} setCurrentTab={setCurrentTab}>
                                Laravel
                            </Tab>
                            <Tab currentTab={currentTab} tab={7} setCurrentTab={setCurrentTab}>
                                Symfony
                            </Tab>
                            <Tab currentTab={currentTab} tab={8} setCurrentTab={setCurrentTab}>
                                Yii
                            </Tab>
                            <Tab currentTab={currentTab} tab={9} setCurrentTab={setCurrentTab}>
                                Node.js
                            </Tab>
                        </ul>
                    </div>
                    <div className='tabs__header__gradient left'>&lt;</div>
                    <div className='tabs__header__gradient right'>&gt;</div>
                </div>
                <div className='tabs__content'>
                    <TabContent tab={0} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/html.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                HTML<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={1} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/css.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                CSS<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={2} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/js.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                JS<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={3} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon skill__icon--rotate' src={process.env['PUBLIC_URL'] + '/img/icons/react.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                React<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={4} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/perl.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                Perl<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={5} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/php.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                PHP<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={6} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/laravel.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                Laravel<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={7} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/symfony.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                Symfony<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={8} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/yii.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                Yii<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent tab={9} currentTab={currentTab}>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <img className='skill__icon' src={process.env['PUBLIC_URL'] + '/img/icons/node.png'} alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                Node<br/>
                                <CupcakeIpsum />
                            </div>
                        </div>
                    </TabContent>
                </div>
            </div>
        </div>
    )

}

export default Tabs