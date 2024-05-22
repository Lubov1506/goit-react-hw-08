import clsx from "clsx";

export const buildActiveClass = (isActive, classname) => {
  return clsx(isActive && classname);
};
