import { HTMLProps } from "react";

export type IconElementProps = HTMLProps<HTMLSpanElement>;

export interface IconProps extends IconElementProps {
    children?: any;
    icon?: string;
    size?: number;
    color?: string;
    type?: "outlined" | "solid";
    className?: string;
};
