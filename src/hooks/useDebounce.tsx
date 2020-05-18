import { useRef, useCallback } from 'react'

export const useDebounce = (fn: any, delay = 100, trail?: boolean) => {
    const timeout = useRef<any>(null)

    return useCallback(
        (...args: any) => {
            if (!timeout.current && trail) fn(...args)

            if (timeout.current) timeout.current = clearTimeout(timeout.current)

            timeout.current = setTimeout(() => fn(...args), delay)

            return () => {
                timeout.current = clearTimeout(timeout.current)
            }
        },
        [fn, delay, trail]
    )
}
