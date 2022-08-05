import styled from 'styled-components'

import { IconColors } from '../../types/colors'

interface IconProps {
  color: IconColors,
  height?: number,
  width?: number,
}

export const Icon = styled.button<IconProps>`
  cursor:pointer;
  display:flex;
  aling-items:center;
  justify-content: center;
  width: ${props => props.width || 24 + 'px'};
  height: ${props => props.height || 24 + 'px'};

  & > svg {
    flex-shrink: 0;
    fill: ${props => props.theme.colors[props.color]};
  }

  &:hover svg {
    fill ${props => props.theme.colors.accent}
  }
`