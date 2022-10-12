import React, { InputHTMLAttributes } from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: React.ReactNode;
}
