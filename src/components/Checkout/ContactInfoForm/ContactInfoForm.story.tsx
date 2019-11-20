import React from 'react'
import ContactInfoForm from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ContactInfoForm', module).add('Default', () => {
    return (
        <ContactInfoForm
            edit={boolean('edit', false)}
            fields={{
                email: {
                    label: 'Email',
                },
                firstName: {
                    label: 'First Name',
                },
                lastName: {
                    label: 'Last Name',
                },
                company: {
                    label: 'Company (optional)',
                },
                address1: {
                    label: 'Address',
                },
                address2: {
                    label: 'Apt, Suite, Unit, etc (optional)',
                },
                city: {
                    label: 'City',
                },
                country: {
                    label: 'Country',
                    items: [
                        {
                            text: 'United States',
                            value: 'US',
                        },
                        {
                            text: 'Venezuela',
                            value: 'VE',
                        },
                    ],
                },
                region: {
                    type: 'text',
                    label: 'State',
                },
                postalCode: {
                    label: 'Postal Code',
                },
                phone: {
                    label: 'Phone Number',
                },
            }}
            submitButton={{
                text: 'Save & Continue',
            }}
            editButton={{
                text: 'Edit',
            }}
            onSubmit={() => {
                throw Error('Oops!. There was an error... `cause your are just testing ;)')
            }}
            onEdit={action('onEdit')}
        />
    )
})