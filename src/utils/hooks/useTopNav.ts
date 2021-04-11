import { useCallback, useEffect, useState } from "react";
import { TopNavOptions } from "./@types/useTopNav";

const defaultOptions: TopNavOptions = {
    open: false,
    active: false,
    hidden: false,
    hideOnScroll: false,
    scrollEffects: false,
    stickyAt: 0,
    hiddenAt: 100,
};

const useTopNav = (options: Partial<TopNavOptions> = defaultOptions) => {
    const [open, setOpen] = useState(options.open || false);
    const [active, setActive] = useState(options.active || false);
    const [hidden, setHidden] = useState(options.hidden || false);

    const toggleOpen = () => setOpen(!open);

    let prevScroll = 0;

    const handleScroll = useCallback(() => {
        const currentScroll = window.scrollY;

        if (currentScroll > (options.stickyAt || 10)) {
            if (!active) {
                setActive(true);
            }

            if (options.hideOnScroll) {
                if (
                    currentScroll > (options.hiddenAt || 100) &&
                    prevScroll < currentScroll
                ) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }

                // eslint-disable-next-line react-hooks/exhaustive-deps
                prevScroll = currentScroll;
            }
        } else {
            setActive(false);
        }
    }, [active]);

    useEffect(() => {
        if (options.scrollEffects) {
            document.addEventListener("scroll", handleScroll);

            const cancel = () => document.removeEventListener("scroll", handleScroll);

            return cancel;
        }
    }, [handleScroll, options]);

    return {
        open,
        setOpen,
        active,
        setActive,
        hidden,
        setHidden,
        toggleOpen,
    };
};
 
export default useTopNav;
