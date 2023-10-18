import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Dot from './Dot'

const meta = {
  title: 'components/Dot',
  component: Dot,
} satisfies Meta

type Story = StoryObj<typeof Dot>

export default meta

export const Basic: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Dot size={10} color="silver" />
      <Dot size={20} color="blue" />
      <Dot size={30} color="close" />
      <Dot size={40} color="live" />
      <Dot size={50} color="red" />
      <Dot size={60} color="green" />
    </div>
  ),
}
export const CustomColor: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Dot size={10} customColor="Black" />
      <Dot size={20} customColor="gray" />
      <Dot size={30} customColor="yellow" />
    </div>
  ),
}
