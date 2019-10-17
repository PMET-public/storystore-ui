import React from 'react'

/**
 * Error Boundary
 */
export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    // componentDidCatch(error) {
    //     // You can also log the error to an error reporting service
    // }

    render() {
        if (this.state.hasError) {
            return null
        }

        return this.props.children
    }
}

/**
 * Components Types
 */
// type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

// export type Props<P = {}> = Override<
//     React.AllHTMLAttributes<HTMLElement>,
//     {
//         as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
//     } & P
// >

export type Props<P = {}> = {
    [key: string]: any
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & P

export type Component<P = {}> = React.FunctionComponent<Props<P>>

/**
 * To camelCase
 */

export const toCamelCase = (string: string) =>
    string.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase()
    })

/**
 * To PascalCalse
 */

export const toPascalCase = (string: string) => {
    const camelCased = toCamelCase(string)
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}

/**
 * Styles as CSS Object
 */
export const getStyleAsObject = (style: CSSStyleDeclaration) => {
    const output = {}
    for (let i = 0; i < style.length; i++) {
        const name = style[i]
        const value = style.getPropertyValue(name)
        output[toCamelCase(name)] = value
    }
    return output
}

/**
 * Regext Dictionary
 */
export const regexDictionary = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}
