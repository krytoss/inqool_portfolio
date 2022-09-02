import { ChangeEvent, FC } from 'react'

import '../scss/input.scss'

type Props = {
    type: string,
    label?: string,
    name: string,
    value?: string | undefined,
    placeholder?: string,
    className?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode
}

const Input : FC<Props> = ({ type, label, name, value, placeholder, className, onChange, children }) => (
    <div className='input__group'>
        {label &&
            <label className='input__label' htmlFor={name}>
                {label}
            </label>
        }
        { children }
        <input
            className={`input` + (className ? (' ' + className) : '')}
            type={type}
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
)

export default Input