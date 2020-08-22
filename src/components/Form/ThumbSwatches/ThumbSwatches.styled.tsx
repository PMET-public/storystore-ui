import styled from 'styled-components'

import ImageComponent from '../../Image'

export const Image = styled(ImageComponent)`
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 305ms ease;
    /* display: block; */
    filter: brightness(98%) contrast(94%);
    max-width: 100%;
    height: auto;
    object-fit: cover;
`

export const Item = styled.div`
    & > label {
        position: relative;
        display: block;
        cursor: pointer;
        transition: all 305ms ease;
        border: 0.1rem solid transparent;
        border-radius: 0.7rem;
        padding: 0.2rem;
        height: 100%;
        width: 100%;
        line-height: 0;
    }

    & > input[type='radio'] {
        opacity: 0;
        position: absolute;
    }

    & > input[type='radio']:checked + label,
    & > input[type='radio']:focus + label {
        border-color: ${props => props.theme.colors.onSurface} !important;
        & ${Image} {
            filter: brightness(100%) contrast(100%) !important;
        }
    }

    & > input[type='radio']:disabled + label {
        & ${Image} {
            filter: grayscale(100%) opacity(25%) contrast(90%);
        }
    }

    &:hover > input[type='radio']:not(:disabled) + label {
        border-color: ${props => props.theme.colors.onSurface50};
        & ${Image} {
            filter: brightness(98%) contrast(92%);
        }
    }
`
