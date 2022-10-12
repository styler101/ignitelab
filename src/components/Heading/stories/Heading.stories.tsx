import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../ui";
import { HeadingProps } from "../ui/interfaces";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h2> Testing with h2 tag</h2>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
