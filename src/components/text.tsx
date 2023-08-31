import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import * as React from "react";
import {
  As,
  Margin,
  Responsive,
  withBreakpoints,
  withMargin,
} from "../helpers";

interface TextOwnProps {
  align?: Responsive<"left" | "center" | "right">;
  color?: Responsive<"gray" | "purple" | "blue" | "green" | "yellow" | "red">;
  size?: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
  weight?: Responsive<"1" | "2">;
}

type TextProps = As<"span", "div", "p"> & TextOwnProps & Margin;

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      align,
      as: Tag = "span",
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      size = "3",
      color,
      weight,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => (
    <Slot
      ref={forwardedRef}
      className={classNames(
        className,
        "Text",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        withBreakpoints(color),
        withBreakpoints(align, "ta"),
        withBreakpoints(size, "size"),
        withBreakpoints(weight, "weight")
      )}
      {...props}
    >
      <Tag>{children}</Tag>
    </Slot>
  )
);

Text.displayName = "Text";
