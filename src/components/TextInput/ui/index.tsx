import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { TextInputProps, TextInputRootProps } from "./interfaces";

function TextInputRoot(props: TextInputRootProps) {
  <div
    className={
      "flex items-center gap-3 py-4 px-3 rounded bg-gray800 w-full focus-within:ring-2 ring-cyan300"
    }
  >
    {props.children}
  </div>;
}

function TextInputIcon() {}

function TextInput(props: TextInputProps) {
  return (
    <input
      {...props}
      className=" flex-1 text-gray100 text-xs   outline-none  placeholder:tex-gray-400"
    />
  );
}

export const TextInputs = {
  Input: TextInput,
  Icon: TextInputIcon,
  Root: TextInputRoot,
};
