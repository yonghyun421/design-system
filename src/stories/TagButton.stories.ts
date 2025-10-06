import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import TagButton from "../components/TagButton";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: "Tag Button",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isChecked: {
      control: "boolean",
      description: "버튼의 체크 여부",
      defaultValue: false,
    },
  },
  args: { children: "Tag Button", onClick: fn(), isChecked: false },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tag Button",
    isChecked: false,
  },
};
