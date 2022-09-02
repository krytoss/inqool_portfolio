import { FC, useCallback, useRef } from "react"
import Button from "./Button"

import '../scss/modal.scss'
import { useEffect } from "react"

type Props = {
    openModal: boolean,
    setOpenModal: (open : boolean) => void,
    children: React.ReactNode
}

const Modal : FC<Props> = ({ openModal, setOpenModal, children }) => {

    const overlayRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setOpenModal(false)
        }
    }, [ setOpenModal ])

    const handleClick = useCallback((event: MouseEvent) => {
        console.log(openModal)
        if (ref.current && overlayRef.current
                && overlayRef.current.contains(event.target as Node)
                && !ref.current?.contains(event.target as Node)
        ) {
            setOpenModal(false)
        }
    }, [openModal, setOpenModal])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        openModal && window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('keypress', handleKeyDown)
            window.removeEventListener('click', handleClick)
        }
    }, [ openModal, setOpenModal, handleKeyDown, handleClick ])

    return (
        <div className='modal__overlay' ref={overlayRef}>
            <div className='modal__window' ref={ref}>
                <div className='modal__window__header'>
                    <Button className="button--no__bg" onClick={() => setOpenModal(false)}>
                        &#215;
                    </Button>
                </div>
                <div className='modal__window__body'>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal