import classNames from 'classnames';
import * as React from 'react';

interface EmProps extends React.ComponentPropsWithRef<'em'> {}

export const Em = React.forwardRef<HTMLElement, EmProps>(
  ({ className, ...props }, forwardedRef) => (
    <em ref={forwardedRef} className={classNames(className, 'Em')} {...props} />
  ),
);

Em.displayName = 'Em';
