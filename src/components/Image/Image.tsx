import React, { useState } from 'react'
import { Component } from '../../lib'
import { LazyImageFull, ImageState, ImageProps as LazyImageProps } from 'react-lazy-images'
import { Root } from './Image.styled'

export type ImageProps = LazyImageProps & {
    vignette?: boolean
    lazy?: boolean
}

export const ImageComponent: Component<ImageProps> = ({ vignette, lazy = true, ...props }) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <LazyImageFull {...props} loadEagerly={!lazy}>
            {({ imageProps, imageState, ref }) => (
                <Root
                    ref={ref}
                    $loaded={imageState === ImageState.LoadSuccess && loaded}
                    $vignette={vignette}
                    {...imageProps}
                    src={imageState === ImageState.LoadSuccess && loaded ? imageProps.src : 'data:image/gif;base64,R0lGODlhBAAFAPAAANbW1gAAACH5BAAAAAAALAAAAAAEAAUAAAIEhI+ZBQA7'}
                    onLoad={() => setLoaded(true)}
                />
            )}
        </LazyImageFull>
    )
}
