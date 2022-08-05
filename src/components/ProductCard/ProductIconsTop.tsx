import React from 'react'
import styled from 'styled-components'

import { IconColors } from '../../types/colors'

import { Icon, Icons } from '../shared'

import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Sravnit } from '../../assets/sravnit.svg';

const IconsTop = styled(Icons)`
  position: absolute;
  flex-direction: column;
  gap: 15px;
  right: 14px;
  bottom: 36px;
  z-index: 50;
`

export const ProductIconsTop = () => {
  return (
    <IconsTop>
      <Icon color={IconColors.white}>
        <Like />
      </Icon>
      <Icon color={IconColors.white}>
        <Sravnit />
      </Icon>
    </IconsTop>
  )
}
