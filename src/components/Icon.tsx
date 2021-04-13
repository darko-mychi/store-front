import { IconElementProps, IconProps } from "./@types/Icon";

const Icon: React.FC<IconProps> = ({
    type = "solid",
    children,
    icon,
    size,
    color,
    className,
    ...rest
}) => {
    let iconData;

    if (children) {
        iconData = children;
    } else {
        iconData = icon;
    }

    let others: IconElementProps = {};

    if (size) {
        const style = {
            fontSize: size,
        };

        others = {...style, ...rest};
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