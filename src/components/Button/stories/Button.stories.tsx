import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../ui";
import { ButtonProps } from "../ui/interfaces";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Create Account",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
