import { themeLight } from '../../theme'
import { LidoComponentProps } from '../../utils'

export const colorMap = {
  silver: 'silver',
  green: 'green',
  red: 'red',
  live: '#ee6a5f',
  close: '#b2f042',
  blue: themeLight.blue,
} as const

export type Colors = keyof typeof colorMap

export type DotProps = LidoComponentProps<
  'div',
  {
    color?: Colors
    size?: number
    customColor?: string
  }
>
