"use client";
import classNames from "classnames";
import * as React from "react";
import { Margin, withMargin } from "../helpers";
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";

interface ButtonOwnProps {
  color?: "gray" | "blue" | "green" | "red";
  size?: "1" | "2" | "3";
  ghost?: boolean;
}

interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<"button">, "color" | "disabled">,
    ButtonOwnProps,
    Margin {}

export const Button = React.forwardRef<RACButton, ButtonProps>(
  (
    {
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      ghost,
      size = "2",
      color = "gray",
      className,
      ...props
    },
    forwardedRef
  ) => (
    <RACButton
      ref={forwardedRef}
      className={classNames(
        className,
        "Button",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        {
          ghost,
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
    />
  )
);

Button.displayName = "Button";
