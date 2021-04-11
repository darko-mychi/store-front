import { useCallback, useEffect, useState } from "react";
import { BreakPoints, GridTest } from "./@types/screen";

export const breakpoints: BreakPoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

export const width = window.innerWidth;

export const useScreen = () => {
    const [size, setSize] = useState(window.innerWidth);
    
    const handleResize = useCallback(() => {
        const width = window.innerWidth;

        if (size !== width) {
            setSize(width);
        }
    }, [size]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        const cancel = () => window.removeEventListener("resize", handleResize);

        return cancel;
    }, [handleResize]);

    return size;
}

export const xs: GridTest = (size = width) => {
    return (size < breakpoints.sm);
}

export const smDown: GridTest = (size = width) => {
    return (size < breakpoints.md);
};

export const sm: GridTest = (size = width) => {
    return (size >= breakpoints.sm && width < breakpoints.md);
};

export const smUp: GridTest = (size = width) => {
    return (size >= breakpoints.sm);
};

export const mdDown: GridTest = (size = width) => {
    return (size < breakpoints.lg);
};

export const md: GridTest = (size = width) => {
    return (size >= breakpoints.md && width < breakpoints.lg);
};

export const mdUp: GridTest = (size = width) => {
    return (size >= breakpoints.md);
};

export const lgDown: GridTest = (size = width) => {
    return (size < breakpoints.xl);
};

export const lg: GridTest = (size = width) => {
    return (size >= breakpoints.lg && width < breakpoints.xl);
};

export const lgUp: GridTest = (size = width) => {
    return (size >= breakpoints.lg);
};

export const xlDown: GridTest = (size = width) => {
    return (size < breakpoints.xxl);
};

export const xl: GridTest = (size = width) => {
    return (size >= breakpoints.xl && width < breakpoints.xxl);
};

export const xlUp: GridTest = (size = width) => {
    return (size >= breakpoints.xl);
};

export const xxl: GridTest = (size = width) => {
    return (size > breakpoints.xxl);
};
