import { ReactNode } from 'react'
import { LidoComponentProps } from '../../utils/types'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: ReactNode
    arrowColor?: string
  }
>
