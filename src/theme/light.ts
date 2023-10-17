import themeBase from './base'

export const themeLight = {
  ...themeBase,
  backgroundLight: '#FFFFFF',
  gray: '#EFEFEF',
  blue: '#625FFB',
  boxShadow: ' 0px 4px 16px rgba(0, 0, 0, 0.05)',

  borderColor: '#D3D7DB',

  colors: {
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#EFEFEF',
    gray: '#E5E5E5',

    text: '#020407',
    textSecondary: '#5C5C5C',
    textTertiary: '#858585',
    textInverted: '#E5E7EB',
    textDisabled: '#CECECE',
    textSubtitle: '#808080',
    textSubtitleSecondary: '#8C8C8D',
    textNotSelected: '#D3D7DB',

    buttonDisabled: '#D8D8D8',
    buttonDisalbedSecondary: '#505050',

    border: '#D3D7DB',
    borderShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
    borderSencodary: '#EFEFEF',

    bnb: '#F3BA2F',
    senior: '#AFA3FD',
    equity: '#C5F07F',
    blue: '#625FFB',
    green: '#B2F042',
    success: '#61C454',
    warning: '#EE6A5F',

    modalDisabled: '#B0B0B0',
    modalGray: '#858585',
    modalDisabledButton: '#D9D9D9',

    seniorGradient:
      'linear-gradient(134.33deg, #7BF2E9 1.14%, #64E8DE 1.15%, #B65EBA 100%)',
    equityGradient: 'linear-gradient(91.24deg, #83FF8F -3.05%, #C5F07F 99.34%)',
  },
} as const
