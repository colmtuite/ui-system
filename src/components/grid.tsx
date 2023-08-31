import classNames from 'classnames';
import * as React from 'react';
import {
  Margin,
  Padding,
  Responsive,
  withBreakpoints,
  withMargin,
  withPadding,
} from '../helpers';

interface GridOwnProps {
  display?: Responsive<'none' | 'inline-grid' | 'grid'>;
  columns?: Responsive<'1' | '2' | '3' | '4'>;
  flow?: Responsive<'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'>;
  align?: Responsive<'start' | 'center' | 'end' | 'baseline' | 'stretch'>;
  justify?: Responsive<'start' | 'center' | 'end' | 'between'>;
  gap?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  gapX?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  gapY?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
}

interface LayoutProps {
  position?: Responsive<
    'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  >;
  height?: Responsive<
    'auto' | '100%' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  >;
  width?: Responsive<
    'auto' | '100%' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  >;
  inset?: Responsive<'auto' | '0' | '100%'>;
  top?: Responsive<'auto' | '0' | '100%'>;
  bottom?: Responsive<'auto' | '0' | '100%'>;
  left?: Responsive<'auto' | '0' | '100%'>;
  right?: Responsive<'auto' | '0' | '100%'>;
  shrink?: Responsive<'0' | '1'>;
  grow?: Responsive<'0' | '1'>;
}

interface GridProps
  extends React.ComponentPropsWithRef<'div'>,
    GridOwnProps,
    LayoutProps,
    Margin,
    Padding {}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
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
      columns,
      flow,
      align = 'stretch',
      justify = 'start',
      gap,
      gapX,
      gapY,
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
    forwardedRef,
  ) => (
    <div
      ref={forwardedRef}
      className={classNames(
        className,
        'Grid',
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        withPadding({ p, px, py, pt, pr, pb, pl }),
        withBreakpoints(columns, 'gtc'),
        withBreakpoints(flow, 'gaf'),
        withBreakpoints(align, 'ai'),
        withBreakpoints(justify, 'jc', { between: 'sb' }),
        withBreakpoints(gap, 'ds-gap'),
        withBreakpoints(gapX, 'cg'),
        withBreakpoints(gapY, 'rg'),
        withBreakpoints(display, 'display'),
        withBreakpoints(position, 'position'),
        withBreakpoints(shrink, 'fs'),
        withBreakpoints(grow, 'fg'),
        withBreakpoints(width, 'ds-w'),
        withBreakpoints(height, 'ds-h'),
        withBreakpoints(inset, 'ds-inset'),
        withBreakpoints(top, 'ds-top'),
        withBreakpoints(bottom, 'ds-bottom'),
        withBreakpoints(left, 'ds-left'),
        withBreakpoints(right, 'ds-right'),
      )}
      {...props}
    />
  ),
);

Grid.displayName = 'Grid';
