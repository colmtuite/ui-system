import * as React from "react";
import classNames from "classnames";
import { Switch as RACSwitch } from "react-aria-components";
import type { SwitchProps as RACSwitchProps } from "react-aria-components";
import { Margin, withMargin } from "../helpers";

interface SwitchOwnProps {
  color?: "gray" | "blue" | "green" | "red";
  size?: "1" | "2" | "3";
}

interface SwitchProps
  extends Omit<RACSwitchProps, "children" | "color" | "disabled">,
    SwitchOwnProps,
    // children: React.ReactNode,
    Margin {}

export const Switch = React.forwardRef<RACSwitch, SwitchProps>(
  (
    {
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      size = "2",
      color = "blue",
      className,
      children,
      ...props
    },
    forwardedRef
  ) => (
    <RACSwitch
      className={classNames(
        className,
        "Switch",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        {
          "size-1": size === "1",
          "size-2": size === "2",
          "size-3": size === "3",
          gray: color === "gray",
          blue: color === "blue",
          green: color === "green",
          red: color === "red",
        }
      )}
      {...props}
    >
      <div className="SwitchIndicator" />
      {children}
    </RACSwitch>
  )
);
