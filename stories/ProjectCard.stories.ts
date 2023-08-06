import { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
    title: 'Example/ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof ProjectCard>

export const MainCard: Story = {
    args: {}
}
