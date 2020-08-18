import styled from 'styled-components'

import { Img } from '../../Image/Image.styled'

export const Item = styled.div`
    & ${Img} {
        border-radius: 0.5rem;
        overflow: hidden;
        transition: all 305ms ease;
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: brightness(98%) contrast(94%);
    }

    & > label {
        position: relative;
        display: block;
        cursor: pointer;
        transition: all 305ms ease;
        border: 0.1rem solid transparent;
        border-radius: 0.7rem;
        padding: 0.2rem;
        /* height: 100%; */
        width: 9rem;
        line-height: 0;
    }

    & > input[type='radio'] {
        opacity: 0;
        position: absolute;
    }

    & > input[type='radio']:checked + label,
    & > input[type='radio']:focus + label {
        border-color: ${props => props.theme.colors.onSurface} !important;
        & ${Img} {
            filter: brightness(100%) contrast(100%) !important;
        }
    }

    & > input[type='radio']:disabled + label {
        & ${Img} {
            filter: grayscale(100%) opacity(25%) contrast(90%);
        }
    }

    &:hover > input[type='radio']:not(:disabled) + label {
        border-color: ${props => props.theme.colors.onSurface50};
        & ${Img} {
            filter: brightness(98%) contrast(92%);
        }
    }
`
