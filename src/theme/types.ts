import { themeLight } from './light'

export type Theme = typeof themeLight

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
