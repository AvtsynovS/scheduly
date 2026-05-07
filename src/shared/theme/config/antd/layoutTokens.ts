export const getLayoutTokens = (cssVar: (name: string) => string) => ({
  siderBg: cssVar('--color-bg-sidebar'),
  bodyBg: cssVar('--color-bg-body'),
  footerBg: cssVar('--color-bg-footer'),
  footerPadding: '8px 12px',
});
