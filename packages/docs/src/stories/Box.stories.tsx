import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@lobstr-ui/react'
import '@lobstr-ui/react/dist/output.css'

const BoxStory: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default BoxStory

export const Primary: StoryObj<BoxProps> = {}
