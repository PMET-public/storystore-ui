import styled from 'styled-components'

export const Root = styled.span<{ $attention?: boolean }>`
    align-items: center;
    color: inherit;
    display: inline-flex;
    flex-direction: column;
    font-size: inherit;
    line-height: 0;
    position: relative;

    ${props =>
        props.$attention &&
        `
            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: 0.3em;
                height: 0.3em;
                border-radius: 50%;
                background-color: ${props.theme.colors.accent};
            }
        `}
`

export const Wrapper = styled.span<{ $hasCount?: boolean }>`
    position: relative;
    ${props => props.$hasCount && 'margin-right: 0.4em;'}

    & svg {
        fill: currentColor;
        height: 1em;
        width: auto;
    }
`

export const Label = styled.span<{ $hasCount?: boolean }>`
    color: inherit;
    font-size: 0.5em;
    font-weight: 600;
    text-overflow: ellipsis;
    line-height: 1.1;
    margin-top: 0.6rem;
    ${props => props.$hasCount && 'padding-right: 0.9em;'}
`

export const Count = styled.span`
    align-items: center;
    color: inherit;
    display: flex;
    font-size: 0.5em;
    justify-content: center;
    left: calc(100% + 0.2em);
    position: absolute;
    top: 0em;
`
