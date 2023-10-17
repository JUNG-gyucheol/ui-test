import { Meta, StoryObj } from '@storybook/react'
import Box from './Box'
import Flex from './Flex'
import React from 'react'

const meta = {
  title: 'components/Box',
  component: Box,
} satisfies Meta

type Story = StoryObj<typeof Box>

export default meta

export const Basic: Story = {
  render: () => <Box border="1px solid black" width="30px" height="30px" />,
}

export const FlexCenter: Story = {
  render: () => (
    <Flex>
      <Box border="1px solid black" width="30px" height="30px" />
      <Box border="1px solid black" width="30px" height="30px" />
    </Flex>
  ),
}
export const FlexSapceBetween: Story = {
  render: () => (
    <Flex
      justifyContent="space-between"
      width="300px"
      height="50px"
      border="2px solid red">
      <Box border="1px solid black" width="30px" height="30px" />
      <Box border="1px solid black" width="30px" height="30px" />
    </Flex>
  ),
}
export const FlexColumn: Story = {
  render: () => (
    <Flex
      flexDirection="column"
      width="300px"
      height="50px"
      border="2px solid red">
      <Box border="1px solid black" width="30px" height="30px" />
      <Box border="1px solid black" width="30px" height="30px" />
    </Flex>
  ),
}
