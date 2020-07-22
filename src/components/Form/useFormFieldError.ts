import { useEffect } from 'react'
import { useFormContext, FieldError } from 'react-hook-form'

const _get = (obj: { [key: string]: any }, name: string) => {
    let result: any

    name.split('.').forEach(key => {
        result = result ? result[key] : obj[key]
    })

    return result
}

export const useFormFieldError = (props: { name: string; error?: string }) => {
    const { name, error: _error } = props

    const { setError, clearErrors, errors } = useFormContext()

    useEffect(() => {
        if (_error) {
            setError(name, { type: 'server', message: _error })
        } else {
            clearErrors(name)
        }
    }, [_error, name, setError, clearErrors])

    return _get(errors, name) as FieldError
}
