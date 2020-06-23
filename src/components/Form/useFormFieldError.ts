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

    const { setError, clearError, errors } = useFormContext()

    useEffect(() => {
        if (_error) {
            setError(name, 'server', _error)
        } else {
            clearError(name)
        }
    }, [_error, name, setError, clearError])

    return _get(errors, name) as FieldError
}
