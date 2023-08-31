import classNames from "classnames";
import * as React from "react";
import { Margin, withMargin } from "../helpers";

interface StatusOwnProps {
  size?: "1" | "2";
  color?: "gray" | "green" | "yellow" | "red" | "white";
}

interface StatusProps
  extends Omit<React.ComponentPropsWithRef<"span">, "color">,
    StatusOwnProps,
    Margin {}

export const Status = React.forwardRef<HTMLSpanElement, StatusProps>(
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
        "Status",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        {
          "size-1": size === "1",
          "size-2": size === "2",
          gray: color === "gray",
          green: color === "green",
          yellow: color === "yellow",
          red: color === "red",
          white: color === "white",
        }
      )}
      {...props}
    />
  )
);

Status.displayName = "Status";
