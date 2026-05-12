export const getSegmentedTokens = (cssVar: (name: string) => string) => ({
  trackPadding: 4,
  trackBg: cssVar('--color-bg-segmented'),
  itemHoverBg: cssVar('--color-bg-segmented-hover'),
  itemActiveBg: cssVar('--color-bg-segmented-active'),
  itemSelectedBg: cssVar('--color-bg-segmented-selected'),
});
