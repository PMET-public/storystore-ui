import { RefObject, useEffect } from 'react'
import { useScroll } from './useScroll'
import { useResize } from './useResize'

type UseFetchMoreOnScrollingOptions = {
    hasNextPage: boolean
    loading?: boolean
    delay?: number
    threshold?: number
    scrollContainer?: RefObject<Element>
}
export const useFetchMoreOnScrolling = ({ loading, hasNextPage, delay, scrollContainer: container, threshold = 0 }: UseFetchMoreOnScrollingOptions, onLoadMore: CallableFunction) => {
    const disabled = hasNextPage === false || loading

    const { scrollY, scrollHeight } = useScroll({ delay, container, disabled })

    const { height } = useResize()

    return useEffect(() => {
        if (disabled || !height || !scrollHeight) return

        if (scrollY + height >= scrollHeight - threshold) {
            onLoadMore()
        }
    }, [scrollY, height, scrollHeight, onLoadMore, threshold, disabled])
}
