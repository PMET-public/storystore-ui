import React from 'react'
import { Component } from '../../../lib'
import { Root, Title, Description } from './ForgotPassword.styled'
import Form, { Input, patterns, FormError, FormSuccess } from '../../Form'
import Button, { ButtonProps } from '../../Button'

export type ForgotPasswordProps = {
    title?: JSX.Element | string
    description?: JSX.Element | string
    loading?: boolean
    error?: string
    success?: string
    buttons?: ButtonProps[]
    onSubmit: (...args: any) => any
}

export const ForgotPassword: Component<ForgotPasswordProps> = ({ title, description, loading, error, success, onSubmit, buttons, ...props }) => {
    return (
        <Root as={Form} onSubmit={onSubmit} {...props}>
            {title && <Title>{title}</Title>}

            {description && <Description>{description}</Description>}

            <Input
                autoFocus
                name="email"
                rules={{ required: 'Please enter your email address.', pattern: { value: patterns.email, message: 'Please enter a valid email address.' } }}
                loading={loading}
                label="Email"
            />

            {success && <FormSuccess>{success}</FormSuccess>}

            {error && <FormError>{error}</FormError>}

            {buttons?.map((button, key) => (
                <Button key={key} {...button} />
            ))}
        </Root>
    )
}
