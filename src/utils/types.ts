import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BordersProps,
  PositionProps,
  ShadowProps,
  ButtonStyleProps,
} from 'styled-system'

export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  Props extends object = {},
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      // as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >

export interface StyledSystemProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BordersProps,
    PositionProps,
    ButtonStyleProps,
    ShadowProps {}
