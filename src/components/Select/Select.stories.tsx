import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta = {
  title: 'components/Select',
  component: Select,
} satisfies Meta

export default meta

export const Basic = () => {
  const [text, setText] = useState('test1')
  return (
    <div>
      <Select
        texts={['test1']}
        text={text}
        onClickHandler={(text: string) => setText(text)}
      />
    </div>
  )
}
export const SelectBox = () => {
  const [text, setText] = useState('test1')
  return (
    <div>
      <Select
        texts={['test1', 'test2', 'test3']}
        text={text}
        onClickHandler={(text: string) => setText(text)}
      />
    </div>
  )
}
