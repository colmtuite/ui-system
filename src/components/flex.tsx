import classNames from "classnames";
import * as React from "react";
import {
  Margin,
  Padding,
  Responsive,
  withBreakpoints,
  withMargin,
  withPadding,
} from "../helpers";

interface FlexOwnProps {
  display?: Responsive<"none" | "inline-flex" | "flex">;
  direction?: Responsive<"row" | "column" | "row-reverse" | "column-reverse">;
  align?: Responsive<"start" | "center" | "end" | "baseline" | "stretch">;
  justify?: Responsive<"start" | "center" | "end" | "between">;
  wrap?: Responsive<"nowrap" | "wrap" | "wrap-reverse">;
  gap?: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
}

interface LayoutProps {
  position?: Responsive<
    "static" | "relative" | "absolute" | "fixed" | "sticky"
  >;
  height?: Responsive<
    "auto" | "100%" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  >;
  width?: Responsive<
    "auto" | "100%" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  >;
  inset?: Responsive<"auto" | "0" | "100%">;
  top?: Responsive<"auto" | "0" | "100%">;
  bottom?: Responsive<"auto" | "0" | "100%">;
  left?: Responsive<"auto" | "0" | "100%">;
  right?: Responsive<"auto" | "0" | "100%">;
  shrink?: Responsive<"0" | "1">;
  grow?: Responsive<"0" | "1">;
}

interface FlexProps
  extends React.ComponentPropsWithRef<"div">,
    FlexOwnProps,
    LayoutProps,
    Margin,
    Padding {}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      direction,
      align,
      justify = "start",
      gap,
      wrap = "nowrap",
      display,
      position,
      width,
      height,
      inset,
      top,
      bottom,
      left,
      right,
      shrink,
      grow,
      className,
      ...props
    },
    forwardedRef
  ) => (
    <div
      ref={forwardedRef}
      className={classNames(
        className,
        "Flex",
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        withPadding({ p, px, py, pt, pr, pb, pl }),
        withBreakpoints(direction, "fd"),
        withBreakpoints(align, "ai"),
        withBreakpoints(justify, "jc", { between: "space-between" }),
        withBreakpoints(wrap, "fw"),
        withBreakpoints(gap, "ds-gap"),
        withBreakpoints(display, "display"),
        withBreakpoints(position, "position"),
        withBreakpoints(shrink, "fs"),
        withBreakpoints(grow, "fg"),
        withBreakpoints(width, "ds-w"),
        withBreakpoints(height, "ds-h"),
        withBreakpoints(inset, "ds-inset"),
        withBreakpoints(top, "ds-top"),
        withBreakpoints(bottom, "ds-bottom"),
        withBreakpoints(left, "ds-left"),
        withBreakpoints(right, "ds-right")
      )}
      {...props}
    />
  )
);

Flex.displayName = "Flex";
