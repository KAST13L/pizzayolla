import {ComponentStory, ComponentMeta} from '@storybook/react';
import {FooterLink} from "@app/common/components/Fotter-Link/footer-link.component";

export default {
    title: 'Common/Footer Link',
    component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (<ul><FooterLink {...args}/></ul>);

export const View = Template.bind({});
View.args = {
    href: "tel:+0508791762",
    children: '+38 (050) 87-91-762'
}
