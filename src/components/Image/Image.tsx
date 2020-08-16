import React, { useState, useRef, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Img } from './Image.styled'
import { defaultBreakpoints } from '../../theme/layout'

export type ImgSrc = {
    mobile?: string
    desktop: string
}

export type ImageProps = {
    vignette?: boolean
    src: string | ImgSrc
    alt?: string
    height?: number
    width?: number
    title?: string
    lazy?: boolean
}

export const ImageComponent: Component<ImageProps> = ({ src: _src, vignette, width, height, lazy = true, ...props }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const [loaded, setLoaded] = useState(false)

    const [error, setError] = useState(false)

    const loading = lazy ? 'lazy' : undefined

    const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII='

    useEffect(() => {
        /** Check if Image has already been loaded (cache) */
        if (loaded === false && imageRef.current?.complete) setLoaded(true)
    }, [loaded, imageRef])

    const src =
        typeof _src === 'string'
            ? {
                  desktop: error ? placeholder : _src,
              }
            : {
                  desktop: error ? placeholder : _src.desktop,
                  mobile: error ? placeholder : _src.mobile,
              }

    return (
        <Root onLoad={() => setLoaded(true)} onError={() => setError(true)} $loaded={loaded} $error={error} $vignette={vignette}>
            {/* Mobile Image */}
            {src.mobile && (
                <>
                    <source media={defaultBreakpoints.smallOnly} srcSet={`${src.mobile}`} />
                </>
            )}

            {/* Desktop */}
            <source media={defaultBreakpoints.medium} srcSet={`${src.desktop}`} />

            <Img ref={imageRef} $loaded={loaded && !error} {...props} loading={loading} width={width} height={height} src={src.mobile || src.desktop} />
        </Root>
    )
}
