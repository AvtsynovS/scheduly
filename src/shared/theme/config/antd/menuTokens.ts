export const getMenuTokens = (cssVar: (name: string) => string) => ({
  itemBg: cssVar('--color-control-bg'),
  itemHoverBg: cssVar('--color-control-bg-primary-hover'),
});
