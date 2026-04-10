type ColorType = {
  primary: string;
  secondary: string;
  accent: string;
  default: string;
  success: string;
  warning: string;
  error: string;
  disabled: string;
};

type BgColorType = ColorType;

export type SizeType = {
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export type FontSizeType = {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export type BoxShadowType = {
  top: string;
  medium: string;
  bottom: string;
  rightBottom: string;
  center: string;
  theme: string;
};

export type BorderRadiusType = SizeType;

export type BorderType = {
  default: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
};

type ControlItemType = Partial<{
  primary: string;
  secondary: string;
  accent: string;
  ghost: string;
  link: string;
  hover: string;
  active: string;
  focus: string;
  disabled: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  selected?: string;
}> & { default: string };

type ComponentControlType = {
  bg: ControlItemType;
  color: ControlItemType;
  border: ControlItemType;
};

export type LineHeightType = {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

type ControlKeyType = 'avatar' | 'card' | 'button' | 'themeSwitcher';

type ControlType = Record<ControlKeyType, ComponentControlType>;

export interface AppThemeType {
  colors: ColorType;
  bg: BgColorType;
  spaces: SizeType;
  borders: BorderType;
  fontSize: FontSizeType;
  controls: ControlType;
  borderRadius: BorderRadiusType;
  boxShadows: BoxShadowType;
  lineHeight: LineHeightType;
}
