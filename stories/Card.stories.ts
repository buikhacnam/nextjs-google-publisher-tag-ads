import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof Card>

export const MainCard: Story = {
    args: {
        title: 'Card Title',
        subTitle: 'Card Subtitle',
        imageSrc: 'https://via.placeholder.com/150',
        author: 'Author',
        date: '2022-12-15T08:13:54Z',
        id: '1',
        imgQuality: 50
    },
}
