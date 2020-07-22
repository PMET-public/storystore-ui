import styled from 'styled-components'
import { Wrapper as ContainerWrapper } from '../Container/Container.styled'

export const Root = styled.div<{ $sticky?: boolean }>`
    background-color: ${props => props.theme.colors.surface};
    ${props =>
        props.$sticky &&
        `
            position: sticky;
            top: 0;
            z-index: 2;
        `}
`

export const Wrapper = styled(ContainerWrapper)`
    align-items: center;
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-template-columns: 1fr auto;
    height: 7rem;
`
