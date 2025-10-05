import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "default-text-field",
    },
    iconPath: {
      control: "text",
      description: "텍스트 필드의 아이콘 경로",
      defaultValue: "",
    },
    iconAlt: {
      control: "text",
      description: "텍스트 필드의 아이콘 대체 텍스트",
      defaultValue: "icon",
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메세지",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 플레이스홀더",
      defaultValue: "Default TextField",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "텍스트 필드의 에러 상태",
      defaultValue: false,
    },
  },
  args: { onChange: fn(), onIconClick: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-text-field",
    iconPath: "https://via:placeholder.com/24",
    iconAlt: "icon",
    onChange: fn(),
    onIconClick: fn(),
    errorMessage: "에러 메세지",
    placeholder: "Default TextField",
    value: "",
    isError: false,
  },
};
