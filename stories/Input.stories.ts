import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: {
                type: 'range',
                min: 100,
                max: 500,
                step: 10,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Input>

export const SearchInput: Story = {
    args: {
        width: 200,
        placeholder: 'Search',
    },
}
