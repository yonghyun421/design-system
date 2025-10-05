import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
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
    title: {
      control: "text",
      description: "네비게이션 바의 타이틀",
      defaultValue: "Default NavigationBar",
    },
    showBackButton: {
      control: "boolean",
      description: "네비게이션 바의 뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "네비게이션 바의 닫기 버튼 표시 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "네비게이션 바의 타이틀 표시 여부",
      defaultValue: true,
    },
    onBackButtonClick: {
      action: "clicked",
      description: "네비게이션 바의 뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "네비게이션 바의 닫기 버튼 클릭 이벤트",
    },
    isDark: {
      control: "boolean",
      description: "네비게이션 바의 다크 모드 여부",
      defaultValue: false,
    },
  },
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default NavigationBar",
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
    isDark: false,
  },
};
