export const getLayoutTokens = (cssVar: (name: string) => string) => ({
  siderBg: cssVar('--sidebar'),
  bodyBg: cssVar('--body'),
  footerBg: cssVar('--footer'),
  footerPadding: '8px 12px',
});
