import { clsx } from "clsx";

export const cn = (...classes: (string | undefined | boolean | null)[]) => {
  return clsx(...classes);
};
