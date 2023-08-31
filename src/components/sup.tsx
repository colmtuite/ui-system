import classNames from 'classnames';
import * as React from 'react';

interface SupProps extends React.ComponentPropsWithRef<'sup'> {}

export const Sup = React.forwardRef<HTMLElement, SupProps>(
  ({ className, ...props }, forwardedRef) => (
    <sup
      ref={forwardedRef}
      className={classNames(className, 'Sup')}
      {...props}
    />
  ),
);

Sup.displayName = 'Sup';
