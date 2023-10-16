// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { themeLight } from '../src/theme'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme: {
        ...themeLight,
      },
    },
    Provider: ThemeProvider,
  }),
]
