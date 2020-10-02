import React, { useState, ImgHTMLAttributes, useRef, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Placeholder, Picture, Img } from './Image.styled'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    vignette?: boolean
    lazy?: boolean
    sources?: JSX.Element[]
    originalWidthAndHeight?: boolean
}

export const ImageComponent: Component<ImageProps> = ({ vignette, sources, src, width: _width, height: _height, originalWidthAndHeight = false, lazy = true, ...props }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const [loaded, setLoaded] = useState(imageRef.current?.complete ?? false)

    const width = originalWidthAndHeight ? imageRef.current?.naturalWidth || imageRef.current?.width || _width : _width

    const height = originalWidthAndHeight ? imageRef.current?.naturalHeight || imageRef.current?.height || _height : _height

    const placeholderBase64 = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`

    useEffect(() => {
        if (imageRef.current?.complete && !loaded) {
            setLoaded(true)
        }
    }, [imageRef.current?.complete, loaded])

    return (
        <Root $loaded={loaded} $vignette={vignette} style={props.style}>
            <Picture>
                {sources?.map((source, key) => (
                    <React.Fragment key={key}>{source}</React.Fragment>
                ))}

                <Img
                    decoding="async"
                    loading={lazy ? 'lazy' : 'eager'}
                    ref={imageRef}
                    $loaded={loaded}
                    {...props}
                    src={src}
                    width={width}
                    height={height}
                    onLoad={() => {
                        if (!loaded) setLoaded(true)
                    }}
                />
            </Picture>

            <Placeholder $loaded={loaded} loading="eager" role="presentation" width={width} height={height} {...props} alt={null} title={undefined} src={placeholderBase64} />
        </Root>
    )
}
