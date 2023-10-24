import { themeLight } from '../../theme'
import { LidoComponentProps } from '../../utils'

export const colorMap = {
  silver: 'silver',
  green: 'green',
  red: 'red',
  live: '#ee6a5f',
  closed: '#b2f042',
  stopped: '#8c8c8d',
  seniorclosed: '#625ffb',
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
