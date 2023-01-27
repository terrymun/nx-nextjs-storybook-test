import type { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLib from './my-lib';

const Story: ComponentMeta<typeof MyLib> = {
  component: MyLib,
  title: 'MyLib',
  parameters: {
    layout: 'centered',
  },
};
export default Story;

const PrimaryTemplate: ComponentStory<typeof MyLib> = () => {
  return <MyLib />
}

export const Primary = PrimaryTemplate.bind({});