import React from 'react';
import styled from 'styled-components';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const StyledToggleButton = styled(ToggleButton)`
    &&&& {
        padding: .15rem .15rem;
        border-radius: .25rem;
        border: 1px solid ${props => props.theme.colors.secondaryBorder};
        background-color: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.onSurface};
        white-space: nowrap;
        user-select: none;
        &:hover {
            border: 1px solid ${props => props.theme.colors.secondary};
            box-shadow: inset 0 0 .5rem ${props => props.theme.colors.secondary}
                , 0 0 .1rem ${props => props.theme.colors.secondary};
        }
        &.active {
            background-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.onSecondary};
        }
        &.focus {
            box-shadow: none;
        }
    }
`
export const MyToggleButton = ({
    className,
    children,
    type,
    checked,
    onChange,
    value
}) => {
    return (
        <StyledToggleButton
            className={className}
            type={type}
            value={value}
            checked={checked}
            onChange={onChange}
        >
            {children}
        </StyledToggleButton>
    )
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    display: grid;
    gap: .5rem;
    ${props => Object.entries(props.$layoutConfig).map(entry => (
        `@media screen and (min-width: ${entry[0]}px) {
            grid-template-columns: repeat(${entry[1]}, 1fr);
        }
        `
    ))}
`
export default function MyToggleButtonGroup(props) {
    return (
        <StyledToggleButtonGroup
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            $layoutConfig={props.layoutConfig}
        >
            {props.children}
        </StyledToggleButtonGroup>
    )
}