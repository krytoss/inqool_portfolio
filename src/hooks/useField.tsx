import { useCallback } from 'react'
import { useState } from 'react'
import { ChangeEvent } from 'react'

const useField = (id: string, required?: boolean) => {

    const [value, setValue] = useState<string>('')

    const error = required && !value

    return [
        value,
        {
            id,
            value,
            onChange: useCallback(
                (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                    console.log('zmena')
                    setValue(e.target.value)
                },
                []
            ),
            required,
            error,
            helperText: error ? 'Required' : undefined
        }
    ] as const

}

export default useField