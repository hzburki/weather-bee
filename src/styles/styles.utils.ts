/**
 * Flex properties
 */
export type JustifyContentType =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

export type AlignItemsType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export type FontType = 'primary' | 'secondary';

export type ColorType = 'primary' | 'secondary' | 'tertiary' | 'placeholder';

export type FlexDirectionType = 'row' | 'column';
export interface MarginPaddingInterface {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
