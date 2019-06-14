import React, { FunctionComponent } from 'react'
import Icon from '../Icon'
import { getbem } from '../../lib/helpers'

export type TabBarProps = {
    items: Array<{
        count?: number
        isActive?: boolean
        label: string
        src: string
        iconSrc: string
    }>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ items }) => (
    <nav className="tab-bar">
        {items.map(({ count, iconSrc, isActive, label, src }, i) => (
            <a className={getbem('tab-bar__link', ['active', !!isActive])}
                href={src}
            >
                <Icon className="tan-bar__link__icon" 
                    src={iconSrc} 
                    label={label} 
                    count={count} 
                />
            </a>
        ))}
    </nav>
)
