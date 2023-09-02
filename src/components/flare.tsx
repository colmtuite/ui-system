import classNames from "classnames";
import * as React from "react";

interface FlareOwnProps {
  color?:
    | "gray"
    | "purple"
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "orange"
    | "gold"
    | "bronze";
  side?: "top" | "bottom";
}

interface FlareProps
  extends Omit<React.ComponentPropsWithRef<"div">, "color">,
    FlareOwnProps {}

export const Flare = React.forwardRef<HTMLDivElement, FlareProps>(
  (
    { color = "purple", side = "bottom", className, ...props },
    forwardedRef
  ) => (
    <div
      ref={forwardedRef}
      className={classNames(className, "Flare", {
        gray: color === "gray",
        purple: color === "purple",
        blue: color === "blue",
        green: color === "green",
        yellow: color === "yellow",
        red: color === "red",
        orange: color === "orange",
        gold: color === "gold",
        bronze: color === "bronze",
        "top-0": side === "top",
        "bottom-0": side === "bottom",
      })}
      {...props}
    />
  )
);

Flare.displayName = "Flare";
