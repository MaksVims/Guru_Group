import React, { FC } from 'react'
import styled from 'styled-components'

import { ReactComponent as Car } from '../../assets/car.svg';
import { ReactComponent as Shield } from '../../assets/shield.svg';
import { IconColors } from '../../types/colors';

import { Icon, Icons } from '../shared';

interface ProductIconsContentProps {
  seen: boolean
}

const IconsInfo = styled(Icons)`
  gap: 13px;
`

export const ProductIconsContent: FC<ProductIconsContentProps> = ({ seen }) => {
  return (
    <IconsInfo>
      <Icon color={seen ? IconColors.accent : IconColors.grey}>
        <Car />
      </Icon>
      <Icon color={seen ? IconColors.accent : IconColors.grey}>
        <Shield />
      </Icon>
    </IconsInfo>
  )
}
