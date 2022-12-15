import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from './menu-item.component';
import carbonara from "/src/assets/pizza/carbonara.jpeg";

export default {
    title: 'Menu/Menu Item',
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args}/>;

export const View = Template.bind({});
View.args = {
    imagePath: carbonara,
    weight: 555,
    title: 'Піца Мангеттен',
    ingredients: '(подвійна порція грибів), Моцарела, Папероні, Соус Альфред',
    price: 255
}