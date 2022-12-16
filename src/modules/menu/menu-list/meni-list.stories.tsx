import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MeniList } from './meni-list.component';
import pizzaMenu from '@app/mocks/pizza.json'

export default {
    title: 'Menu/Menu List',
    component: MeniList,
} as ComponentMeta<typeof MeniList>;

const Template: ComponentStory<typeof MeniList> = (args) => <MeniList {...args}/>;

export const View = Template.bind({});
View.args = {items: pizzaMenu}