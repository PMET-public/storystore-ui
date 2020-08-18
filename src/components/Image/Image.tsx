import React from 'react'
import { Component, Override } from '../../lib'
import { LazyImageFull, ImageProps as LazyImageProps, ImageState } from 'react-lazy-images'
import { Img } from './Image.styled'

export type ImageProps = Override<
    LazyImageProps,
    {
        src: string
        srcSet?: string
        alt?: string
        height?: number | string
        width?: number | string
        vignette?: boolean
        lazy?: boolean
    }
>

const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII='

export const ImageComponent: Component<ImageProps> = ({ vignette, lazy = true, ...props }) => {
    if (!props.src) return null

    return (
        <LazyImageFull {...props}>
            {({ imageProps, imageState, ref }) => (
                <Img
                    $vignette={vignette}
                    $loaded={imageState === ImageState.LoadSuccess}
                    ref={ref}
                    {...imageProps}
                    src={imageState === ImageState.LoadSuccess || !lazy ? imageProps.src : placeholder}
                />
            )}
        </LazyImageFull>
    )
}
