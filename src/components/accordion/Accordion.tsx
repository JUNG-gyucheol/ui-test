import React from 'react'
import {
  AccordionArrowStyle,
  AccordionContentStyle,
  AccordionContentWrapStyle,
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionTitleStyle,
} from './AccordionStyles'
import { useCollapse } from 'react-collapsed'
import { AccordionProps } from './types'

const Accordion = ({
  summary,
  arrowColor,
  defaultExpanded = false,
  children,
  ...rest
}: AccordionProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <AccordionStyle {...rest}>
      <AccordionSummaryStyle {...getToggleProps()}>
        <AccordionTitleStyle>{summary}</AccordionTitleStyle>
        <AccordionArrowStyle $isExpended={isExpanded} $color={arrowColor} />
      </AccordionSummaryStyle>
      <AccordionContentWrapStyle {...getCollapseProps()}>
        <AccordionContentStyle {...getCollapseProps()}>
          {children}
        </AccordionContentStyle>
      </AccordionContentWrapStyle>
    </AccordionStyle>
  )
}

export default Accordion
