import React, { useState, ImgHTMLAttributes, useRef } from 'react'
import { Component } from '../../lib'
import { Root, Placeholder, Picture, Img } from './Image.styled'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    vignette?: boolean
    lazy?: boolean
    sources?: JSX.Element[]
}

export const ImageComponent: Component<ImageProps> = ({ vignette, sources, src, width: _width, height: _height, lazy = true, ...props }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const [loaded, setLoaded] = useState(imageRef.current?.complete ?? false)

    const width = _width ?? (imageRef.current?.naturalWidth || imageRef.current?.width || 0)

    const height = _height ?? (imageRef.current?.naturalHeight || imageRef.current?.height || 0)

    const placeholderBase64 = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`

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

            <Placeholder $loaded={loaded} loading="eager" role="presentation" width={width} height={height} {...props} alt={null} title={undefined} src={placeholderBase64} />
        </Root>
    )
}
