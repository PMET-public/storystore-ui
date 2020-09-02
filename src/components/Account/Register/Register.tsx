import React from 'react'
import { Root, Title, Description } from './Register.styled'
import { Component } from '../../../lib'
import Button, { ButtonProps } from '../../Button'
import Form, { Input, Checkbox, FormError, FormSuccess, patterns } from '../../Form'

export type RegisterProps = {
    title?: JSX.Element | string
    description?: JSX.Element | string
    loading?: boolean
    error?: string
    success?: string
    buttons?: ButtonProps[]
    onSubmit: (...args: any) => any
}

export const Register: Component<RegisterProps> = ({ title, description, loading, error, success, buttons, onSubmit, ...props }) => {
    return (
        <Root as={Form} onSubmit={onSubmit} {...props}>
            {title && <Title>{title}</Title>}

            {description && <Description>{description}</Description>}

            <Input autoFocus name="firstname" rules={{ required: 'Please enter your first name.' }} disabled={loading} label="First Name" />

            <Input name="lastname" rules={{ required: 'Please enter your last name.' }} disabled={loading} label="Last Name" />

            <Input
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

            <Checkbox items={[{ label: 'Get email alerts about new promotions and exclusive offers.', value: 'yes' }]} disabled={loading} name="is_subscribed" />

            {success && <FormSuccess>{success}</FormSuccess>}

            {error && <FormError>{error}</FormError>}

            {buttons?.map((button, key) => (
                <Button key={key} {...button} />
            ))}
        </Root>
    )
}
