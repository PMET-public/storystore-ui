import styled from 'styled-components'
import { Error } from '../Form/Form.styled'
import ToggleIconSvg from 'remixicon/icons/System/arrow-down-s-line.svg'
import { Wrapper as Checkboxes } from '../Form/Checkbox/Checkbox.styled'

export const Root = styled.div``

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.bold};
    font-size: 2rem;
    margin-bottom: 2rem;
`

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
`

export const Group = styled.div`
    display: grid;
    grid-gap: 1.6rem;
`

export const ListWrapper = styled.div<{ $duration: string }>`
    height: auto;
    overflow-y: hidden;
    transition: max-height ${props => props.$duration} ease;
`

export const List = styled.div`
    display: grid;
    grid-gap: 1.4rem;

    ${Error} {
        display: none;
    }

    ${Checkboxes} {
        grid-gap: 0.8rem;
    }
`

export const GroupLabel = styled.div`
    font-size: 1.6rem;
    font-family: ${props => props.theme.typography.body.family};
    font-weight: ${props => props.theme.typography.body.weight.semi};
`

export const Count = styled.span`
    opacity: 0.65;
    font-size: 0.9em;
`
export const ToggleIcon = styled(ToggleIconSvg)`
    fill: currentColor;
    height: 1.3em;
    margin-right: 0.5rem;
    transition: transform var(--transition-duration) ease;
    width: 1em;
`

export const ToggleButton = styled.button<{ $active?: boolean }>`
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    opacity: 0.65;
    font-size: 0.9em;

    ${ToggleIcon} {
        ${props => props.$active && 'transform: rotate(180deg);'}
    }
`
