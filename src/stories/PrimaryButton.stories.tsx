import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],

  argTypes: {
    children: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: "Primary Button",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    theme: {
      control: "select",
      description: "버튼의 테마",
      defaultValue: "dark",
      options: ["dark", "light", "social", "text"],
    },
    isDisabled: {
      control: "boolean",
      description: "버튼의 비활성화 여부",
      defaultValue: true,
    },
  },
  args: { onClick: fn(), children: "Primary Button" },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: { children: "Primary Button", theme: "dark", isDisabled: false },
};

export const Light: Story = {
  args: { children: "Primary Button", theme: "light", isDisabled: false },
};

export const Social: Story = {
  args: { children: "Primary Button", theme: "social", isDisabled: false },
};

export const Text: Story = {
  args: { children: "Primary Button", theme: "text", isDisabled: false },
};
