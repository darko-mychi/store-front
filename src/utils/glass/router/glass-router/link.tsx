import React, { FC } from "react";
import { GlassRouter } from "./index";
import { ILinkProps } from "../@types/link";

export const Link: FC<ILinkProps> = ({ to, noActive, children, ...rest }) => {
  const href = GlassRouter.getRoutePath(to);

  const isModifiedEvent = (event: any) => {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  };

  const onClick = (event: any) => {
    try {
      if (rest.onClick) rest.onClick(event);
    } catch (ex) {
      event.preventDefault();
      throw ex;
    }

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      (!rest.target || rest.target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();
      return GlassRouter.push(to);
    }
  };

  let className: string = rest.className || "";

  if (!noActive) {
    const path = window.$route.location.pathname;

    if (path === href) {
      className += ` ${GlassRouter.activeLink()}`;
    }
  }

  const props = {
    ...rest,
    href,
    onClick,
    className,
  };

  return <a {...props}>{children}</a>;
};
