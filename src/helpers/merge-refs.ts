import * as React from 'react';

export const mergeRefs =
  <T>(
    ...refs: (
      | React.ForwardedRef<T | null>
      | React.MutableRefObject<T | undefined>
    )[]
  ) =>
  (node: T) => {
    if (node) {
      refs.forEach((ref) => {
        if (ref instanceof Function) {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      });
    }
  };
