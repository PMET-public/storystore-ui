import styled from 'styled-components'

export const Item = styled.span`
    position: relative;

    & > label {
        border-radius: 50%;
        padding: 0.2rem;
        cursor: pointer;
        align-items: center;
        display: flex;
        transition: all 305ms ease;
        opacity: 0.75;
        border: 0.1rem solid transparent;

        & > span {
            border-radius: 50%;
            width: 5rem;
            height: 5rem;
            filter: contrast(0.85);
            will-change: filter;
            transform: translateZ(0);
        }
    }

    & > input {
        position: absolute;
        opacity: 0;
    }

    & > input:checked + label {
        border-color: ${props => props.theme.colors.onSurface};
        opacity: 1;
    }

    & > input:disabled + label {
        opacity: 0.15;
        cursor: not-allowed;
    }

    &:hover > input:not(:disabled):not(:checked) + label {
        border-color: ${props => props.theme.colors.onSurface50};
        opacity: 1;

        & > span {
            filter: contrast(1);
        }
    }
`
