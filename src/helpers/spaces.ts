import { Responsive, withBreakpoints } from './breakpoints';

const marginVals = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '-1',
  '-2',
  '-3',
  '-4',
  '-5',
  '-6',
  '-7',
  '-8',
  '-9',
] as const;

export interface Margin {
  m?: Responsive<typeof marginVals[number]>;
  mx?: Responsive<typeof marginVals[number]>;
  my?: Responsive<typeof marginVals[number]>;
  mt?: Responsive<typeof marginVals[number]>;
  mr?: Responsive<typeof marginVals[number]>;
  mb?: Responsive<typeof marginVals[number]>;
  ml?: Responsive<typeof marginVals[number]>;
}

export const withMargin = (props: Margin) =>
  [
    withBreakpoints(props.m, 'ds-m'),
    withBreakpoints(props.mx, 'ds-mx'),
    withBreakpoints(props.my, 'ds-my'),
    withBreakpoints(props.mt, 'ds-mt'),
    withBreakpoints(props.mr, 'ds-mr'),
    withBreakpoints(props.mb, 'ds-mb'),
    withBreakpoints(props.ml, 'ds-ml'),
  ]
    .filter(Boolean)
    .join(' ');

const paddingVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export interface Padding {
  p?: Responsive<typeof paddingVals[number]>;
  px?: Responsive<typeof paddingVals[number]>;
  py?: Responsive<typeof paddingVals[number]>;
  pt?: Responsive<typeof paddingVals[number]>;
  pr?: Responsive<typeof paddingVals[number]>;
  pb?: Responsive<typeof paddingVals[number]>;
  pl?: Responsive<typeof paddingVals[number]>;
}

export const withPadding = (props: Padding) =>
  [
    withBreakpoints(props.p, 'ds-p'),
    withBreakpoints(props.px, 'ds-px'),
    withBreakpoints(props.py, 'ds-py'),
    withBreakpoints(props.pt, 'ds-pt'),
    withBreakpoints(props.pr, 'ds-pr'),
    withBreakpoints(props.pb, 'ds-pb'),
    withBreakpoints(props.pl, 'ds-pl'),
  ]
    .filter(Boolean)
    .join(' ');
