import type { Meta, StoryObj } from "@storybook/react-vite";

import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "Example/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "errorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러메세지",
  },
};
