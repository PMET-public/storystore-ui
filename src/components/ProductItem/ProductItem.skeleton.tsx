import React, { FunctionComponent } from 'react'
import Skeleton from '../Skeleton'

type ProductItemSkeletonProps = {
    width?: number
    height?: number
}

export const ProductItemSkeleton: FunctionComponent<ProductItemSkeletonProps> = ({ width = 600, height = 600 }) => {
    return (
        <Skeleton width={width} height={height + 70} style={{ width: '100%', height: '100%' }}>
            <rect x="16" y={height + 10} rx="4" ry="4" width="60%" height="16" />
            <rect x="16" y={height + 30} rx="4" ry="4" width="30%" height="15" />
            <rect x="16" y={height + 50} rx="4" ry="4" width="10%" height="15" />
            <rect x="0" y="0" rx="5" ry="5" width={width} height={height} />
        </Skeleton>
    )
}
