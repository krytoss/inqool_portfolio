import { FC } from "react"

type Props = {
    tab: number,
    currentTab: number,
    setCurrentTab: (tab: number) => void,
    children: React.ReactNode
}

const Tab : FC<Props> = ({ tab, currentTab, setCurrentTab, children }) => {
    return (
        <li className={ 'tabs__menu__tab' + ( currentTab === tab ? ' active' : '' )}>
            <a
                href={`#tab-${tab}`}
                className='tabs__menu__link'
                onClick={
                    (event) => {
                        event.preventDefault()
                        setCurrentTab(tab)
                    }
                }
            >
                { children }
            </a>
        </li>
    )
}

export default Tab