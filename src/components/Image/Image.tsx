import React from 'react'
import { Component, Override } from '../../lib'
import { LazyImageFull, ImageState, ImageProps as LazyImageProps } from 'react-lazy-images'
import { Root } from './Image.styled'
import { useImage, ImgSrc } from '../../hooks/useImage'

export type ImageProps = Override<
    LazyImageProps,
    {
        vignette?: boolean
        src: ImgSrc
        alt?: string
        height?: string | number
        width?: string | number
        title?: string
        lazy?: boolean
    }
>

export const ImageComponent: Component<ImageProps> = ({ src: _src, vignette, width, height, lazy = true, ...props }) => {
    const src = useImage(_src)

    return lazy ? (
        <LazyImageFull src={src || ''} {...props}>
            {({ imageProps, imageState, ref }) => (
                <Root
                    $loaded={imageState === ImageState.LoadSuccess}
                    $vignette={vignette}
                    {...imageProps}
                    src={imageState === ImageState.LoadSuccess ? src : 'data:image/gif;base64,R0lGODlhBAAFAPAAANbW1gAAACH5BAAAAAAALAAAAAAEAAUAAAIEhI+ZBQA7'}
                    ref={ref}
                    width={width}
                    height={height}
                />
            )}
        </LazyImageFull>
    ) : (
        <Root $loaded $vignette={vignette} {...props} src={src} width={width} height={height} />
    )
}
