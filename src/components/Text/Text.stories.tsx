import { Meta, StoryObj } from '@storybook/react'
import Text from './Text'
import Bold from './Bold'
import React from 'react'

const meta = {
  title: 'components/Text',
  component: Text,
} satisfies Meta

type Story = StoryObj<typeof Text>

export default meta

export const Basic: Story = {
  render: () => (
    <Text fontSize={['14px', '20px', '24px']} color="senior">
      Hello World!
    </Text>
  ),
}
export const BoldText: Story = {
  render: () => <Bold color="black">Hello World!</Bold>,
}
