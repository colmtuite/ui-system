import classNames from "classnames";
import * as React from "react";
import { Margin, withMargin } from "../helpers";

interface BadgeOwnProps {
  size?: "1" | "2";
  color?: "gray" | "purple" | "blue" | "green" | "yellow" | "red";
}

interface BadgeProps
  extends Omit<React.ComponentPropsWithRef<"span">, "color">,
    BadgeOwnProps,
    Margin {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      size = "1",
      color = "gray",
      className,
      ...props
    },
    forwardedRef
  ) => (
    <span
      ref={forwardedRef}
      className={classNames(
        className,
        "Badge",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        {
          "size-1": size === "1",
          "size-2": size === "2",
          gray: color === "gray",
          purple: color === "purple",
          blue: color === "blue",
          green: color === "green",
          yellow: color === "yellow",
          red: color === "red",
        }
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
