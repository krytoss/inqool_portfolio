import { FC } from 'react'
import Button from './Button'

type Props = {
    onClick: () => void,
    className?: string,
    children: React.ReactNode
}

const PortfolioArrow : FC<Props> = ({ onClick, className, children }) => (
    <Button className={`circle portfolio__arrow ` + className} onClick={onClick}>
        {children}
    </Button>
)

export default PortfolioArrow