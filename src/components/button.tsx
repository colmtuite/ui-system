"use client";
import classNames from "classnames";
import * as React from "react";
import { Margin, withMargin } from "../helpers";

interface ButtonOwnProps {
  color?: "gray" | "blue" | "green" | "red";
  size?: "1" | "2" | "3";
  state?: "normal" | "disabled" | "loading";
  ghost?: boolean;
}

interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<"button">, "color" | "disabled">,
    ButtonOwnProps,
    Margin {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      state = "normal",
      className,
      onClick,
      onSubmit,
      ...props
    },
    forwardedRef
  ) => (
    <button
      ref={forwardedRef}
      aria-disabled={state !== "normal"}
      aria-label={state === "loading" ? "Loading, please wait." : undefined}
      aria-live="assertive"
      className={classNames(
        className,
        "reset-button",
        "Button",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        {
          ghost,
          "state-normal": state === "normal",
          "state-disabled": state === "disabled",
          "state-loading": state === "loading",
          "size-1": size === "1",
          "size-2": size === "2",
          "size-3": size === "3",
          gray: color === "gray",
          blue: color === "blue",
          green: color === "green",
          red: color === "red",
        }
      )}
      onClick={(event) =>
        event.currentTarget.ariaDisabled === "true"
          ? event.stopPropagation()
          : onClick?.(event)
      }
      onSubmit={(event) =>
        event.currentTarget.ariaDisabled === "true"
          ? event.stopPropagation()
          : onSubmit?.(event)
      }
      {...props}
    />
  )
);

Button.displayName = "Button";
