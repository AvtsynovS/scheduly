export const getLayoutTokens = (cssVar: (name: string) => string) => ({
  siderBg: cssVar('--sidebar'),
  footerPadding: '8px 12px',
});
