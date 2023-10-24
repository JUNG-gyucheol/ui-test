import { ReactNode } from 'react'
import { LidoComponentProps } from '../../utils/types'

export type SelectProps = LidoComponentProps<
  'div',
  {
    texts: string[]
    text: string
    isBold?: boolean
    fontSize?: string | string[]
    isSmall?: boolean
    onClickHandler: (text: any) => void
  }
>
