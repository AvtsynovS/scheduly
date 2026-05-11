export const getSelectTokens = (cssVar: (name: string) => string) => ({
  paddingBlock: 4,
  optionSelectedBg: cssVar('--color-control-bg-primary-active'),
});
