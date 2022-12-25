import {ComponentStory, ComponentMeta} from '@storybook/react';
import {App} from "@app/App";

export default {
    title: 'App/App',
    component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App/>;

export const View = Template.bind({});
