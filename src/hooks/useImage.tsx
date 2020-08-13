import { useMemo } from 'react'

import { useResize } from './useResize'

export type ImgSrc =
    | string
    | {
          mobile?: string
          desktop: string
      }
    | undefined

export const useImage = (src: ImgSrc) => {
    const { breakpoints } = useResize()

    return useMemo(() => {
        if (typeof src === 'object') {
            if (breakpoints.medium) {
                return src.desktop
            } else {
                return src.mobile || src.desktop
            }
        }

        return src
    }, [src, breakpoints])
}
