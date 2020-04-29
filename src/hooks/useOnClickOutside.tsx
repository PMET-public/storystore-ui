import { useEffect, MutableRefObject, useCallback } from 'react'

export const useOnClickOutside = (ref: MutableRefObject<any>, fn: (props?: any) => any) => {
    const current = ref.current

    const handleClick = useCallback(
        (e: Event) => {
            if (!current.contains(e.target)) {
                fn(e)
            }
        },
        [current, fn]
    )

    useEffect(() => {
        if (!current) return

        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick)
        }
    }, [current, fn, handleClick])
}
