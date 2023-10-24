import { css, styled } from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  margin: 24px 0px;
  > * + * {
    margin-left: 10px;
  }
`

export const SelectContent = styled.div<{
  $isSelected: boolean
  $isSmall: boolean
}>`
  padding: 16px 32px;
  transition: all 0.1s linear;
  border-radius: 10px;
  cursor: pointer;
  ${(props) =>
    props.$isSmall &&
    css`
      ${props.theme.mediaQueries.sm} {
        padding: 8px 24px;
      }
    `}
  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.black : 'none'};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.black};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.black};
    > span {
      color: ${({ theme: { colors } }) => colors.white};
    }
  }
`
