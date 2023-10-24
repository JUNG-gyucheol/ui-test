import React from 'react'
import { FC, PropsWithChildren } from 'react'
import isPropValid from '@emotion/is-prop-valid'
import {
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { themeLight } from './light'

export const ThemeProvider: FC<PropsWithChildren<{ theme: any }>> = ({
  theme = themeLight,
  children,
  ...rest
}) => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledThemeProvider theme={theme} {...rest}>
        {children}
      </StyledThemeProvider>
    </StyleSheetManager>
  )
}
