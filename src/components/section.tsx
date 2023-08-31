import classNames from 'classnames';
import * as React from 'react';
import { Margin, Responsive, withBreakpoints, withMargin } from '../helpers';

interface SectionOwnProps {
  size?: Responsive<'1' | '2' | '3'>;
  color?:
    | 'gray-1'
    | 'gray-2'
    | 'purple-1'
    | 'purple-2'
    | 'blue-1'
    | 'blue-2'
    | 'green-1'
    | 'green-2'
    | 'yellow-1'
    | 'yellow-2'
    | 'red-1'
    | 'red-2';
}

interface SectionProps
  extends Omit<React.ComponentPropsWithRef<'div'>, 'color'>,
    SectionOwnProps,
    Margin {}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    { m, mx, my, mt, mr, mb, ml, size = '3', color, className, ...props },
    forwardedRef,
  ) => (
    <section
      ref={forwardedRef}
      className={classNames(
        className,
        'Section',
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        withBreakpoints(size, 'size'),
        {
          'gray-1': color === 'gray-1',
          'gray-2': color === 'gray-2',
          'purple-1': color === 'purple-1',
          'purple-2': color === 'purple-2',
          'blue-1': color === 'blue-1',
          'blue-2': color === 'blue-2',
          'green-1': color === 'green-1',
          'green-2': color === 'green-2',
          'yellow-1': color === 'yellow-1',
          'yellow-2': color === 'yellow-2',
          'red-1': color === 'red-1',
          'red-2': color === 'red-2',
        },
      )}
      {...props}
    />
  ),
);

Section.displayName = 'Section';
