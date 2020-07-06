import { RefObject, useEffect, useState, useCallback, useRef } from 'react'

import { useDebounce } from './useDebounce'

type UseMeasure = {
    bottom: number
    height: number
    left: number
    right: number
    top: number
    width: number
    x: number
    y: number
}

const getValues = (rect: DOMRect): UseMeasure => {
    return {
        bottom: rect.bottom,
        height: rect.height,
        left: rect.y ? rect.y : rect.left,
        right: rect.right,
        top: rect.x ? rect.x : rect.top,
        width: rect.width,
        x: rect.x ? rect.x : rect.left,
        y: rect.y ? rect.y : rect.top,
    }
}

export const useMeasure = (ref: RefObject<HTMLElement | null>): UseMeasure => {
    const [values, setValues] = useState<UseMeasure>({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    })

    const handleContentRectUpdate = useCallback(
        (entries: ResizeObserverEntry[]) => {
            const [entry] = entries

            if (entry) {
                setValues(getValues(entry.target.getBoundingClientRect()))
            }
        },
        [setValues]
    )

    const debounced = useDebounce(handleContentRectUpdate, 250)

    const resizeObserver = useRef<ResizeObserver>()

    useEffect(() => {
        const current = ref.current

        if (typeof ResizeObserver === 'undefined' || !current) return

        resizeObserver.current = resizeObserver.current ?? new ResizeObserver(debounced)

        const ro = resizeObserver.current

        ro.observe(current, { box: 'border-box' })

        return () => {
            ro.unobserve(current)
        }
    }, [ref, debounced, setValues, resizeObserver])

    return values
}
