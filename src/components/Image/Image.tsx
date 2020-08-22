import React, { useState, ImgHTMLAttributes, useRef, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Placeholder, Picture, Img } from './Image.styled'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    vignette?: boolean
    lazy?: boolean
    sources?: JSX.Element[]
}

export const placeholderBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII='

export const ImageComponent: Component<ImageProps> = ({ vignette, sources, src, lazy = true, ...props }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (imageRef.current?.complete && !loaded) setLoaded(true)
    }, [imageRef])

    return (
        <Root style={props.style}>
            <Picture>
                {sources?.map((source, key) => (
                    <React.Fragment key={key}>{source}</React.Fragment>
                ))}

                <Img
                    loading={lazy ? 'lazy' : 'eager'}
                    ref={imageRef}
                    $loaded={loaded}
                    $vignette={vignette}
                    {...props}
                    src={src}
                    onLoad={() => {
                        if (!loaded) setLoaded(true)
                    }}
                />
            </Picture>

            <Placeholder $loaded={loaded} loading="eager" {...props} role="presentation" alt={null} title={undefined} src={placeholderBase64} />
        </Root>
    )
}
