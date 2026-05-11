export const getDropdownTokens = (cssVar: (name: string) => string) => ({
  paddingBlock: 4,
  boxShadowSecondary: cssVar('--shadow-dropdown'),
});
