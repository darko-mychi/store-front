import { HTMLProps } from "react";

export type ButtonElementProps = HTMLProps<HTMLButtonElement>;

export interface ButtonProps extends ButtonElementProps {
  loading?: boolean;
  loader?: React.Component | React.FC | JSX.Element | string;
  variant?: "rounded" | "outlined" | "raised" | "fab";
  color?:
    | "red"
    | "transparent"
    | "blue"
    | "green"
    | "teal"
    | "gold"
    | "purple"
    | "black"
    | "default";
  icon?: React.Component | React.FC | JSX.Element | string;
  loaderColor?: string;
  loaderSize?: number;
  type?: "button" | "submit" | "reset";
}
