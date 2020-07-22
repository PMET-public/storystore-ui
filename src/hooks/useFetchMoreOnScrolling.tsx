import { RefObject, useEffect } from 'react'
import { useScroll } from './useScroll'
import { useResize } from './useResize'
import { useMeasure } from './useMeasure'

type UseFetchMoreOnScrollingOptions = {
    disabled?: boolean
    delay?: number
    threshold?: number
    contentRef: RefObject<HTMLElement>
    scrollContainerRef?: RefObject<Element>
}
export const useFetchMoreOnScrolling = (onLoadMore: CallableFunction, { disabled, delay, contentRef, scrollContainerRef: container, threshold = 0 }: UseFetchMoreOnScrollingOptions) => {
    const { height: productListHeight } = useMeasure(contentRef)

    const { scrollY } = useScroll({ disabled, container, delay })

    const { height: viewportHeight } = useResize()

    useEffect(() => {
        if (disabled || !productListHeight || !scrollY || !viewportHeight) return

        if (scrollY + viewportHeight >= productListHeight - threshold) {
            onLoadMore()
        }
    }, [scrollY, viewportHeight, productListHeight, disabled, threshold, onLoadMore])
}
