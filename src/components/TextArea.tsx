import { FC, ChangeEvent } from "react";

import '../scss/textarea.scss'

type Props = {
    label: string,
    name: string,
    cols: number,
    rows: number,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea : FC<Props> = ({ label, name, cols, rows, onChange }) => {
    return (
        <div className='textarea__group'>
            {
                label &&
                <label className='textarea__label' htmlFor={name}>
                    {label}
                </label>
            }
            <textarea className='textarea' name={name} id={name} cols={cols} rows={rows} onChange={onChange}></textarea>
        </div>
    )
}

export default TextArea