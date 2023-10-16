import { ReactNode } from 'react'
import { css, styled } from 'styled-components'

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

export const AccordionStyle = styled.div`
  margin: 0 0 ${({ theme }) => theme.spaceMap.sm}px 0;
  background-color: ${({ theme }) => theme.backgroundLight};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.md}px;
`

export const AccordionSummaryStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.xl}px
    ${({ theme }) => theme.spaceMap.xxl}px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const AccordionTitleStyle = styled.b`
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  flex-grow: 1;
`
export const AccordionArrowStyle = styled.div<{
  $isExpended: boolean
  $color?: string
}>`
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-right: 2px solid
    ${({ theme, $color }) => ($color ? $color : theme.blue)};
  border-bottom: 2px solid
    ${({ theme, $color }) => ($color ? $color : theme.blue)};
  transition: all 0.3s ease;
  transform: ${({ $isExpended }) =>
    $isExpended ? 'rotate(45deg)' : 'rotate(-135deg)'};
`

export const AccordionContentWrapStyle = styled.div``
export const AccordionContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;
  padding-bottom: ${({ theme }) => theme.spaceMap.xl}px;
  > p {
    margin: 0;
  }
`
