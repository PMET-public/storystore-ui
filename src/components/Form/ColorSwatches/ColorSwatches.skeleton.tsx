import React from 'react'
import Skeleton from '../../Skeleton'

export const ColorSwatchesSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={518} height={86.1} {...props} style={{ width: '100%', ...props.style }}>
            <circle cx="20" cy="20" r="20" />
            <circle cx="69.1" cy="20" r="20" />
            <circle cx="118.4" cy="20" r="20" />
        </Skeleton>
    )
}
