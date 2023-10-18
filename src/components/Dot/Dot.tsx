import React from 'react'
import { DotStyle } from './DotStyles'
import { DotProps } from './types'

const Dot = ({ size, color, customColor, ...rest }: DotProps) => {
  return (
    <DotStyle
      $size={size}
      $color={color || 'silver'}
      $customColor={customColor}
      {...rest}
    />
  )
}

export default Dot
