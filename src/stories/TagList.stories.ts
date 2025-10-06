import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import TagList from "../components/TagList";

const meta = {
  title: "List/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "object",
      description: "태그 리스트",
      defaultValue: ["Tag 1", "Tag 2", "Tag 3"],
    },
    onTagClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { tagList: ["Tag 1", "Tag 2", "Tag 3"], onTagClick: fn() },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["Tag 1", "Tag 2", "Tag 3"],
    onTagClick: fn(),
  },
};
