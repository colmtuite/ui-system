import classNames from 'classnames';
import * as React from 'react';
import { Margin, Responsive, withBreakpoints, withMargin } from '../helpers';

interface ContainerOwnProps {
  size?: Responsive<'1' | '2' | '3'>;
}

interface ContainerProps
  extends React.ComponentPropsWithRef<'div'>,
    ContainerOwnProps,
    Margin {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { m, mx, my, mt, mr, mb, ml, size = '3', className, ...props },
    forwardedRef,
  ) => (
    <div
      ref={forwardedRef}
      className={classNames(
        className,
        'Container',
        withMargin({ m, mx, my, mt, mr, mb, ml }),
        withBreakpoints(size, 'size'),
      )}
      {...props}
    />
  ),
);

Container.displayName = 'Container';
