import React from 'react'
import { Component } from '../../../lib'
import Button, { ButtonProps } from '../../Button'
import Form, { FormError, FormSuccess, Input, patterns } from '../../Form'
import { Root, Title, Description } from './Login.styled'

export type LoginProps = {
    title?: JSX.Element | string
    description?: JSX.Element | string
    loading?: boolean
    error?: string
    success?: string
    buttons?: ButtonProps[]
    onSubmit: (...args: any) => any
}

export const Login: Component<LoginProps> = ({ title, description, loading, error, success, buttons, onSubmit, ...props }) => {
    return (
        <Root as={Form} onSubmit={onSubmit} {...props}>
            {title && <Title>{title}</Title>}

            {description && <Description>{description}</Description>}

            <Input
                autoFocus
                name="email"
                rules={{ required: 'Please enter your email address.', pattern: { value: patterns.email, message: 'Please enter a valid email address.' } }}
                disabled={loading}
                label="Email"
            />

            <Input
                name="password"
                rules={{
                    required: 'Please enter a password.',
                    minLength: { value: 8, message: 'Your password must have at least 8 characters.' },
                    maxLength: { value: 256, message: 'Your password must not have more than 256 characters.' },
                }}
                type="password"
                label="Password"
                disabled={loading}
            />

            {success && <FormSuccess>{success}</FormSuccess>}

            {error && <FormError>{error}</FormError>}

            {buttons?.map((button, key) => (
                <Button key={key} {...button} />
            ))}
        </Root>
    )
}
