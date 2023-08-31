import * as React from 'react';

interface StrongProps extends React.ComponentPropsWithRef<'strong'> {}

export const Strong = React.forwardRef<HTMLElement, StrongProps>(
  (props, forwardedRef) => <strong ref={forwardedRef} {...props} />,
);

Strong.displayName = 'Strong';
