import styled from 'styled-components'

export const Items = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin: -1rem 0 0 -1rem;
    width: calc(100% + 1rem);
`

export const Item = styled.span`
    position: relative;
    margin: 1rem 0 0 1rem;

    & > label {
        cursor: pointer;
        align-items: center;
        background-color: ${props => props.theme.colors.surface};
        border-radius: 0.5rem;
        border: 0.1rem solid ${props => props.theme.colors.onSurface25};
        color: ${props => props.theme.colors.onSurface};
        display: flex;
        justify-content: center;
        padding: 1rem;
        transition: all 305ms ease;
    }

    & > input {
        position: absolute;
        opacity: 0;
    }

    & > input:checked + label {
        background-color: ${props => props.theme.colors.onSurface};
        color: ${props => props.theme.colors.surface};
    }

    & > input:disabled + label {
        opacity: 0.35;
    }

    &:hover > input:not(:disabled) + label {
        border-color: ${props => props.theme.colors.onSurface75};
    }
`
