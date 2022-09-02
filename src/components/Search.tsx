import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import Input from './Input'

import '../scss/search.scss'

type Props = {

}

const Search : FC<Props> = ({}) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ value, setValue ] = useState<string>('')

    const ref = useRef<HTMLFormElement>(null)

    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsOpen(false)
        }
    }

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert('Hľadať: ' + value)
        setValue('')
    }, [ value ])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        window.addEventListener('click', handleClick)
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('click', handleClick)
            window.addEventListener('keydown', handleKeyDown)
        }
    }, [ handleClick ])

    return (
        <form
            className='search'
            ref={ref}
            onSubmit={handleSubmit}
        >
            {
                isOpen &&
                <Input
                    className='search__input'
                    type='text'
                    name='search'
                    placeholder='Hľadať...'
                    value={value}
                    onChange={handleChange}
                />
            }
            <button
                className='search__button'
                onClick={(event) => {
                    if (!isOpen) {
                        event.preventDefault()
                        setIsOpen(true)
                    }
                }}
            >
                <img className='search__button__img' src={process.env['PUBLIC_URL'] + '/img/search.png'} alt="" />
            </button>
        </form>
    )
}

export default Search