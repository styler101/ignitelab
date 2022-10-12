import React, { StrictMode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { HeadingProps } from "./interfaces";

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("text-gray100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
