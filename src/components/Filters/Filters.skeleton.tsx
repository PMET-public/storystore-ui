import React from 'react'
import Skeleton from '../Skeleton'

export const FiltersSkeleton = ({ ...props }) => (
    <Skeleton {...props} width={142} height={648} style={{ ...props.style }}>
        <rect width="61" height="17" />

        <rect y="58" width="61" height="17" />
        <rect x="2" y="90" width="17" height="17" />
        <rect x="29" y="92" width="65" height="13" />
        <rect x="99" y="92" width="9" height="13" />
        <rect x="2" y="121" width="17" height="17" />
        <rect x="29" y="123" width="45" height="13" />
        <rect x="80" y="123" width="14" height="13" />
        <rect x="2" y="151" width="17" height="17" />
        <rect x="29" y="153" width="72" height="13" />
        <rect x="107" y="153" width="14" height="13" />
        <rect x="2" y="181" width="17" height="17" />
        <rect x="29" y="183" width="97" height="13" />
        <rect x="3" y="224" width="49" height="12" />
        <rect x="131" y="183" width="11" height="13" />

        <rect y="283" width="61" height="17" />
        <rect x="2" y="315" width="17" height="17" />
        <rect x="29" y="317" width="65" height="13" />
        <rect x="99" y="317" width="9" height="13" />
        <rect x="2" y="346" width="17" height="17" />
        <rect x="29" y="348" width="45" height="13" />
        <rect x="80" y="348" width="14" height="13" />
        <rect x="2" y="376" width="17" height="17" />
        <rect x="29" y="378" width="72" height="13" />
        <rect x="107" y="378" width="14" height="13" />
        <rect x="2" y="406" width="17" height="17" />
        <rect x="29" y="408" width="97" height="13" />
        <rect x="3" y="449" width="49" height="12" />
        <rect x="131" y="408" width="11" height="13" />

        <rect y="506" width="61" height="17" />
        <rect x="2" y="538" width="17" height="17" />
        <rect x="29" y="540" width="65" height="13" />
        <rect x="99" y="540" width="9" height="13" />
        <rect x="2" y="569" width="17" height="17" />
        <rect x="29" y="571" width="45" height="13" />
        <rect x="80" y="571" width="14" height="13" />
        <rect x="2" y="599" width="17" height="17" />
        <rect x="29" y="601" width="72" height="13" />
        <rect x="107" y="601" width="14" height="13" />
        <rect x="2" y="629" width="17" height="17" />
        <rect x="29" y="631" width="97" height="13" />
        <rect x="3" y="672" width="49" height="12" />
        <rect x="131" y="631" width="11" height="13" />
    </Skeleton>
)
