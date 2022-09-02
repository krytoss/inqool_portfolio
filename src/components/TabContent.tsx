import { FC } from "react"

type Props = {
    tab: number,
    currentTab: number,
    children: React.ReactNode
}

const TabContent : FC<Props> = ({ tab, currentTab, children }) => {
    return (
        <div className={ 'tabs__content__tab' + (currentTab === tab ? '' : ' hide') }>
            <div className='container'>
                { children }
            </div>
        </div>
    )
}

export default TabContent