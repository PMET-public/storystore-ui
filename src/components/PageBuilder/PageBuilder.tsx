/**
 * ☢️ Experimental
 */

import React, { Suspense, useMemo } from 'react'
import { Component } from '../../lib'
import { Root } from './PageBuilder.styled'
import { ErrorBoundary } from '../../lib'
import { htmlToProps } from './lib/parser'

export type PageBuilderProps = {
    html: string
}

type PageBuilderFactoryProps = {
    name: string
    items: Array<any>
    props: {
        [prop: string]: any
    }
}

const renderComponent = (Component: React.ComponentType<any>, props: any, items: any[]) => {
    return (
        <Component {...props}>
            {items.map((itemProps, index) => (
                <PageBuilderFactory key={index} {...itemProps} />
            ))}
        </Component>
    )
}

const PageBuilderFactory: Component<PageBuilderFactoryProps> = ({ name, items, props }) => {
    const component = useMemo(() => React.lazy(() => import(`./ContentTypes/${name}/index`)), [name])

    return component ? (
        <Suspense fallback={''}>
            <ErrorBoundary>{renderComponent(component, props, items)}</ErrorBoundary>
        </Suspense>
    ) : null
}

export const PageBuilder: Component<PageBuilderProps> = ({ html, ...props }) => {
    const data: PageBuilderFactoryProps = useMemo(() => htmlToProps(html), [html])

    return (
        <Root {...props}>
            {data.items.map((contentType, index) => (
                <PageBuilderFactory key={index} {...contentType} />
            ))}
        </Root>
    )
}
