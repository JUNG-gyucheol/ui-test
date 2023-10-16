import { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'
import React from 'react'

const meta = {
  //   title: 'Example/Button',
  component: Accordion,

  //   parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'centered',
  //   },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   decorators: [
  //     (Story: StoryFn<AccordionProps>) => (
  //       <ThemeProvider theme={theme}>
  //         <Story summary={undefined} />
  //       </ThemeProvider>
  //     ),
  //   ],
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} satisfies Meta

type Story = StoryObj<typeof Accordion>

export default meta

export const Basic: Story = {
  render: () => (
    <Accordion
      summary={'What are Senior Pool and Equity Pool?'}
      children={
        <p>
          The Senior Pool and Equity Pool are pools used by depositors to
          deposit cryptocurrencies for loans, and represent senior and
          subordinated tranche pools respectively. Senior Pool refers to a pool
          that can be repaid in a senior order when repaying loans, and Equity
          Pool refers to a pool that is repaid in a subordinated order when
          repaying loans, but can expect a relatively high rate of return.
        </p>
      }
    />
  ),
}

export const BasicArrowColor: Story = {
  render: () => (
    <Accordion
      summary={'What are Senior Pool and Equity Pool?'}
      children={
        <p>
          The Senior Pool and Equity Pool are pools used by depositors to
          deposit cryptocurrencies for loans, and represent senior and
          subordinated tranche pools respectively. Senior Pool refers to a pool
          that can be repaid in a senior order when repaying loans, and Equity
          Pool refers to a pool that is repaid in a subordinated order when
          repaying loans, but can expect a relatively high rate of return.
        </p>
      }
      arrowColor="#000000"
    />
  ),
}

export const List: Story = {
  render: () => (
    <>
      <Accordion
        summary={'What are Senior Pool and Equity Pool?'}
        children={
          <p>
            The Senior Pool and Equity Pool are pools used by depositors to
            deposit cryptocurrencies for loans, and represent senior and
            subordinated tranche pools respectively. Senior Pool refers to a
            pool that can be repaid in a senior order when repaying loans, and
            Equity Pool refers to a pool that is repaid in a subordinated order
            when repaying loans, but can expect a relatively high rate of
            return.
          </p>
        }
      />
      <Accordion
        summary={'What are Senior Pool and Equity Pool?'}
        children={
          <p>
            The Senior Pool and Equity Pool are pools used by depositors to
            deposit cryptocurrencies for loans, and represent senior and
            subordinated tranche pools respectively. Senior Pool refers to a
            pool that can be repaid in a senior order when repaying loans, and
            Equity Pool refers to a pool that is repaid in a subordinated order
            when repaying loans, but can expect a relatively high rate of
            return.
          </p>
        }
      />
      <Accordion
        summary={'What are Senior Pool and Equity Pool?'}
        children={
          <p>
            The Senior Pool and Equity Pool are pools used by depositors to
            deposit cryptocurrencies for loans, and represent senior and
            subordinated tranche pools respectively. Senior Pool refers to a
            pool that can be repaid in a senior order when repaying loans, and
            Equity Pool refers to a pool that is repaid in a subordinated order
            when repaying loans, but can expect a relatively high rate of
            return.
          </p>
        }
      />
      <Accordion
        summary={'What are Senior Pool and Equity Pool?'}
        children={
          <p>
            The Senior Pool and Equity Pool are pools used by depositors to
            deposit cryptocurrencies for loans, and represent senior and
            subordinated tranche pools respectively. Senior Pool refers to a
            pool that can be repaid in a senior order when repaying loans, and
            Equity Pool refers to a pool that is repaid in a subordinated order
            when repaying loans, but can expect a relatively high rate of
            return.
          </p>
        }
      />
    </>
  ),
}
