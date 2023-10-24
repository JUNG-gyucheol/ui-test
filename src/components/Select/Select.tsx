import React, { useCallback } from 'react'
import { SelectContainer, SelectContent } from './SelectStyles'
import { SelectProps } from './types'
import { Text } from '../Text'

const Select = ({
  fontSize = '16px',
  onClickHandler,
  texts,
  isBold = true,
  text,
  isSmall = false,
  children,
  ...rest
}: SelectProps) => {
  const isSelected = useCallback(
    (value: string) => {
      return text === value
    },
    [text],
  )
  return (
    <SelectContainer {...rest}>
      {texts.map((value) => {
        return (
          <SelectContent
            onClick={() => onClickHandler(value)}
            $isSelected={isSelected(value)}
            $isSmall={isSmall}>
            <Text
              fontWeight={isBold ? '600' : '400'}
              color={isSelected(value) ? 'white' : 'black'}
              fontSize={fontSize}>
              {value}
            </Text>
          </SelectContent>
        )
      })}
    </SelectContainer>
  )
}

export default Select
