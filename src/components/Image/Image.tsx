import React from 'react'
import { Component } from '../../lib'
import { LazyImageFull, ImageState, ImageProps as LazyImageProps } from 'react-lazy-images'
import { Root } from './Image.styled'

export type ImageProps = LazyImageProps & {
    vignette?: boolean
    lazy?: boolean
}

export const ImageComponent: Component<ImageProps> = ({ vignette, lazy = true, ...props }) => {
    return (
        <LazyImageFull {...props} loadEagerly={!lazy}>
            {({ imageProps, imageState, ref }) => {
                const loaded = imageState === ImageState.LoadSuccess

                return (
                    <Root
                        ref={ref}
                        $loaded={loaded}
                        $vignette={vignette}
                        {...imageProps}
                        src={loaded ? imageProps.src : 'data:image/gif;base64,R0lGODlhBAAFAPAAANbW1gAAACH5BAAAAAAALAAAAAAEAAUAAAIEhI+ZBQA7'}
                    />
                )
            }}
        </LazyImageFull>
    )
}
