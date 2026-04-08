import { AppThemeType } from './common/themes/types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppThemeType {}
}
