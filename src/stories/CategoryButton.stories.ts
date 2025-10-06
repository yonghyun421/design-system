import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "https://via:placeholder.com/24",
    },
    text: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn(), text: "Category Button" },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
    text: "카테고리",
  },
};

// iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
