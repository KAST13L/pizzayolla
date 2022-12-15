import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MeniList } from './meni-list.component';

export default {
    title: 'Menu/Menu List',
    component: MeniList,
} as ComponentMeta<typeof MeniList>;

const Template: ComponentStory<typeof MeniList> = () => <MeniList/>;

export const View = Template.bind({});
