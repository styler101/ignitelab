import { Meta, StoryObj } from "@storybook/react";

import { TextInputs } from "../ui";
import { TextInputProps, TextInputRootProps } from "../ui/interfaces";

export default {
  title: "ComponenTextInput",
  component: TextInputs.Root,
  args: {
    children: <TextInputs.Input placeholder="Type your e-mail address" />,
  },
  argTypes: {},
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
