import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ImageProps = Props<{
    alt?: string
    height?: string | number
    src: string
    width?: string | number
    vignette?: number
}>

export const ImageComponent: Component<ImageProps> = ({
    alt,
    children,
    height,
    src,
    width,
    vignette = 0,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('image', props.className)}>
            <figure className="image__figure">
                <div className={classes('image__wrapper', ['--vignette', !!vignette])}
                    style={{
                        ['--vignette' as any]: `${vignette}rem`,
                    }}
                >
                    <img className="image__img image__tag"
                        src={src}
                        {...{alt, width, height}}
                    />
                    <img className="image__img image__placeholder"
                        aria-hidden="true"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        {...{width, height}}
                    />
                </div>

                {children && (
                    <figcaption className="image__caption">
                        {children}
                    </figcaption>
                )}
            </figure>

            <style jsx global>{`
                .image {
                    display: inherit;
                }

                .image__figure {
                    display: inherit;
                }

                .image__wrapper {
                    position: relative;
                    display: inherit;
                    line-height: 0;
                    
                    &.--vignette {
                        position: relative;

                        &::after {
                            bottom: 0;
                            box-shadow: inset 0 0 var(--vignette) rgba(0, 0, 0, 0.1);
                            content: "";
                            left: 0;
                            pointer-events: none;
                            position: absolute;
                            right: 0;
                            top: 0;
                            
                        }
                    }
                }

                .image__tag {
                    position: absolute;
                    min-height: 100%;
                }

                .image__img {
                    background-color: ${colors.onSurface.fade(0.95)};
                    object-fit: cover;
                    object-position: center;                    
                    
                }

                .image__placeholder {
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    animation-name: pulsate;
                }

                @keyframes pulsate {
                    0% {
                        background-color: ${colors.onSurface.fade(0.95)};
                    }
                    50% {
                        background-color: ${colors.onSurface.fade(0.85)};
                    }
                    100 {
                        background-color: ${colors.onSurface.fade(0.95)};
                    }
                }
            `}</style>
        </Element>
    )
}
