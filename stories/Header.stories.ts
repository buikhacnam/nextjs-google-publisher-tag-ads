import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
    title: 'Example/Header',
    component: Header,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

export const MainHeader: Story = {
    args: {
        logo: 'https://via.placeholder.com/150',
    },
}
