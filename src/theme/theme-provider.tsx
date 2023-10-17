import React from 'react'
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { themeLight } from './light'

export const ThemeProvider: FC<PropsWithChildren<{ theme: any }>> = ({
  theme = themeLight,
  children,
  ...rest
}) => {
  return (
    <StyledThemeProvider theme={theme} {...rest}>
      {children}
    </StyledThemeProvider>
  )
}
