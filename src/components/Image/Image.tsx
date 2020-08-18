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
        height?: number
        width?: number
        vignette?: boolean
        lazy?: boolean
    }
>

export const ImageComponent: Component<ImageProps> = ({ vignette, lazy = true, ...props }) => {
    if (!props.src) return null

    return (
        <LazyImageFull loadEagerly={!lazy} {...props}>
            {({ imageProps, imageState, ref }) => (
                <Img
                    $vignette={vignette}
                    $loaded={imageState === ImageState.LoadSuccess}
                    ref={ref}
                    {...imageProps}
                    src={
                        imageState === ImageState.LoadSuccess
                            ? imageProps.src
                            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII='
                    }
                />
            )}
        </LazyImageFull>
    )
}
