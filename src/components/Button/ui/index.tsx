import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonProps } from "./interfaces";

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        " font-sans py-3 px-3 h-11 bg-cyan500 rounded font-semibold text-black text-sm w-full flex align-middle justify-center transition-colors hover:bg-cyan-300  focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}
