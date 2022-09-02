import { ChangeEvent, useState } from "react"
import { FC } from "react"

import Input from './Input'
import Tag from "./Tag"

import '../scss/taginput.scss'

type Props = {
    tags: Array<string>,
    setTags: (tags: Array<string>) => void
}

const TagInput : FC<Props> = ({ tags, setTags }) => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        setValue(val)
        if (val[val.length - 1] === ' ') {
            const valWithoutSpace = val.slice(0, val.length - 1)
            if (!tags.includes(valWithoutSpace)) {
                setTags([...tags, valWithoutSpace]);
            }
            setValue('');
        } 
    }

    const removeTag = (tag: string) => {
        setTags([...tags.filter(el => el !== tag)])
    }

    return (
        <div className="input--tag">
            <Input
                label='Štítky'
                className='input--tag__input'
                type='text'
                value={value}
                name='tags'
                onChange={changeHandler}
                placeholder='Pridajte štítky oddelené medzerou..'
            >
                {tags.map((tag, k) => <Tag key={k} name={tag} x={true} onClick={() => removeTag(tag)}/>)}
            </Input>
        </div>
    )
}

export default TagInput