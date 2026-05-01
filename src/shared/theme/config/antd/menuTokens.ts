export const getMenuTokens = (cssVar: (name: string) => string) => ({
  itemBg: cssVar('--menu'),
  itemHoverBg: cssVar('--primary-hover'),
});
