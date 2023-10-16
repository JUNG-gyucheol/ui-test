import { ReactNode } from 'react'
import { LidoComponentProps } from './AccordionStyles'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: ReactNode
    arrowColor?: string
  }
>
