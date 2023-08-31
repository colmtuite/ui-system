export type Breakpoints = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

/**
 * A helper to generate CSS classes that include WorkDS breakpoints.
 *
 * Examples:
 * ```
 * const marginTop = '1'
 * withBreakpoints(marginTop, 'mt') // returns 'mt-1'
 *
 * const padding = { initial: '1', xs: '2', md: '3' }
 * withBreakpoints(padding, 'p') // returns 'p-1 xs:p-1 md:p-3'
 *
 * const justifyContent = { initial: 'start', md: 'space-between' }
 * withBreakpoints(justifyContent, 'jc', { 'space-between': 'sb' }) // returns 'jc-start md:jc-sb'
 * ```
 */
export function withBreakpoints(
  value: Responsive<string> | undefined, // Value to check
  classPrefix = '', // CSS class prefix, e.g. "px" in "px-1" class
  valueMap?: Record<string, string>, // Optionally, an object to map prop values to a different CSS suffix
) {
  const classes: string[] = [];

  if (typeof value === 'object') {
    for (const bp of Object.keys(value) as Breakpoints[]) {
      if (bp in value) {
        const isNegative = value[bp]?.startsWith('-');
        const delimiter = classPrefix === '' ? '' : '-';
        const prefix = isNegative ? `-${classPrefix}` : classPrefix;
        const matchedValue = isNegative ? value[bp]?.substring(1) : value[bp];

        if (matchedValue === undefined) {
          continue;
        }

        const suffix = valueMap?.[matchedValue] ?? matchedValue;

        const className =
          bp === 'initial'
            ? `${prefix}${delimiter}${suffix}`
            : `${bp}:${prefix}${delimiter}${suffix}`;
        classes.push(className);
      }
    }
  }

  if (typeof value === 'string') {
    const isNegative = value.startsWith('-');
    const delimiter = classPrefix === '' ? '' : '-';
    const prefix = isNegative ? `-${classPrefix}` : classPrefix;
    const matchedValue = isNegative ? value.substring(1) : value;
    const suffix = valueMap?.[matchedValue] ?? matchedValue;
    classes.push(`${prefix}${delimiter}${suffix}`);
  }

  return classes.join(' ');
}
