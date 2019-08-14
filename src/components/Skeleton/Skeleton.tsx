import React from 'react'
import { Element, Component, Props, classes } from '../../lib'
import { useTheme } from '../../theme'

export type SkeletonProps = Props<{ 
    shape?: 'rectangle' | 'circle'
    loading?: boolean
    lines?: number
    width?: string
    height?: string
}>

export const Skeleton: Component<SkeletonProps> = ({ 
    height = '1em',
    lines = 1,
    shape = 'rectangle',
    width = '100%',
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element as="span" {...props} className={classes('skeleton', props.className)}>
            {new Array(lines).fill(null).map((_, index) => (
                <span className={classes('skeleton__line', `--${shape}`)}
                    aria-disabled
                    key={index}
                    style={{ width, height }}
                >
                    &zwnj;
                </span>
            ))}

            <style jsx global>{`
                .skeleton {
                    display: grid;
                    grid-gap: 0.5rem;
                }

                .skeleton__line {
                    animation: shimmer 1.5s linear infinite;
                    background: ${colors.onSurface15};
                    background: linear-gradient(to right, ${colors.onSurface25} 4%, ${colors.onSurface15} 25%, ${colors.onSurface25} 36%);
                    border-radius: 0.4rem;
                    display: inline-block;
                    line-height: 1;
                    opacity: 0.5;

                    &.--circle {
                        border-radius: 50%;
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-size: 200% 100%;
                        background-position: 100% 0;
                    }
                    100% {
                        background-size: 200% 100%;
                        background-position: -100% 0;
                    }
                }
            `}</style>
        </Element>
    )
}
