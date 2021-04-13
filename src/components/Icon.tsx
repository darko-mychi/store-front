import { HTMLProps } from "react";
import { IconProps } from "./@types/Icon";

const Icon: React.FC<IconProps> = ({
    type = "solid",
    children,
    icon,
    size,
    color,
    className,
}) => {
    let iconData;

    if (children) {
        iconData = children;
    } else {
        iconData = icon;
    }

    const others: HTMLProps<HTMLSpanElement> = {};

    if (size) {
        others.style = {
            fontSize: size,
        };
    }

    return (
        <span
            className={`
                my-icon
                material-icons${(type === "outlined")? "-outlined" : ""}
                ${color && ("-color-" + color)}
                ${className}
            `}
            {...others}
        >
            {iconData}
        </span>
    );
}
 
export default Icon;