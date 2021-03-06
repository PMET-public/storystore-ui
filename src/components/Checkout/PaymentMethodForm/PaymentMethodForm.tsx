import React, { useEffect, useCallback, useRef, useReducer, Reducer } from 'react'
import { Component } from '../../../lib'
import { Root, Card, CardIcon, CardType, CardNumber } from './PaymentMethodForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload as Payload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form, { FormProps, FormError } from '../../Form'
import { useTheme } from '../../../theme/useTheme'
import { PaymentMethodFormSkeleton } from './PaymentMethodForm.skeleton'

export type Braintree = Dropin

export type PaymentMethodPayload = Payload

export type PaymentMethodFormProps = FormProps<PaymentMethodPayload> & {
    loading?: boolean
    submitting?: boolean
    error?: string
    submitButton: ButtonProps
    editButton: ButtonProps
    braintree: Omit<Options, 'container'>
    onSubmit: (payload: PaymentMethodPayload) => any
}

type ReducerState = {
    instance: Braintree | null
    loading: boolean
    formError?: string | null
    editable: boolean
    paymentInfo?: Payload
}

type ReducerActions =
    | {
          type: 'setInstance'
          payload: Braintree
      }
    | {
          type: 'unsetInstance'
      }
    | {
          type: 'setLoader'
          payload: boolean
      }
    | {
          type: 'setEditable'
      }
    | {
          type: 'unsetEditable'
      }
    | {
          type: 'setFormError'
          payload: string
      }
    | {
          type: 'unsetFormError'
      }
    | {
          type: 'setPaymentInfo'
          payload: Payload
      }

const initialState: ReducerState = {
    instance: null,
    loading: false,
    formError: null,
    editable: true,
    paymentInfo: undefined,
}

const reducer: Reducer<ReducerState, ReducerActions> = (state, action) => {
    switch (action.type) {
        case 'setInstance':
            return {
                ...state,
                instance: action.payload,
            }
        case 'unsetInstance':
            return {
                ...state,
                instance: null,
            }
        case 'setLoader':
            return {
                ...state,
                loading: action.payload,
            }
        case 'setEditable':
            return {
                ...state,
                editable: true,
            }

        case 'setFormError':
            return {
                ...state,
                formError: action.payload,
            }
        case 'unsetFormError':
            return {
                ...state,
                formError: null,
            }
        case 'setPaymentInfo':
            return {
                ...state,
                paymentInfo: action.payload,
                editable: false,
                instance: null,
            }

        default:
            throw `Reducer action: ${action.type} not valid.`
    }
}

export const PaymentMethodForm: Component<PaymentMethodFormProps> = ({ loading: _loading, submitting, error, braintree, submitButton, editButton, onSubmit, ...props }) => {
    const { colors } = useTheme()

    const containerElem = useRef(null)

    const authorization = braintree?.authorization

    const [{ instance, editable, loading, formError, paymentInfo }, dispatch] = useReducer(reducer, initialState)

    const createBraintreeInstance = useCallback(async () => {
        try {
            const payload = await BraintreeWebDropIn.create({
                container: '[data-braintree-dropin]',
                card: {
                    overrides: {
                        fields: {
                            number: {
                                maskInput: {
                                    showLastFour: true, // Only show last four digits on blur.
                                },
                            },
                        },
                        styles: {
                            input: {
                                color: colors.onSurface,
                            },
                            ':focus': {
                                color: colors.onSurface,
                            },
                        },
                    },
                },
                ...braintree,
            })

            dispatch({ type: 'setInstance', payload })
        } catch (error) {
            dispatch({ type: 'unsetInstance' })
            console.error(error)
        }
    }, [braintree, colors.onSurface])

    useEffect(() => {
        if (!loading && !!authorization && editable && !instance && containerElem.current) {
            createBraintreeInstance()
            console.log('💳 Creating Braintree Instance')
        }
    }, [instance, editable, createBraintreeInstance, loading, authorization])

    const handleOnEdit = useCallback(
        async (e: Event) => {
            e.preventDefault()
            createBraintreeInstance()
            dispatch({ type: 'setEditable' })
        },
        [createBraintreeInstance]
    )

    const handleOnSubmit = useCallback(async () => {
        dispatch({ type: 'setLoader', payload: true })
        dispatch({ type: 'unsetFormError' })

        async function _submit() {
            if (!instance) return
            const payload = await instance.requestPaymentMethod()
            dispatch({ type: 'setPaymentInfo', payload })
            await onSubmit(payload)
        }

        try {
            await _submit()
        } catch (error) {
            dispatch({ type: 'setFormError', payload: error.message })
        }

        dispatch({ type: 'setLoader', payload: false })
    }, [onSubmit, instance])

    return (
        <Root as={Form} onSubmit={handleOnSubmit}>
            {editable ? (
                <React.Fragment>
                    {_loading || !authorization ? <PaymentMethodFormSkeleton /> : <div ref={containerElem} data-braintree-dropin {...props} style={{ minHeight: 297, ...props.style }} />}
                </React.Fragment>
            ) : (
                paymentInfo?.type === 'CreditCard' && (
                    <Card>
                        <CardIcon />
                        <CardType>{(paymentInfo.details as any).cardType}</CardType>
                        <CardNumber>Ending in {(paymentInfo.details as any).lastFour}</CardNumber>
                    </Card>
                )
            )}

            {(error || formError) && <FormError>{error || formError}</FormError>}

            {submitting || loading || editable ? <Button type="submit" loading={submitting || loading} {...submitButton} /> : <Button outline onClick={handleOnEdit} {...editButton} />}
        </Root>
    )
}
