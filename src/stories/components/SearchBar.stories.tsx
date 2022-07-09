/*eslint-disable */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '../../components/SearchBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/SearchBar',
	component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	placeholder: 'Search By Name',
	onChange: () => { },
};

export const Secondary = Template.bind({});
Secondary.args = {
	placeholder: 'Search By Number',
	onChange: () => { },
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
	showSearchIcon: false,
	onChange: () => { },
};
/*eslint-enable */