import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** Для запрета приватных путей */
const PROHIBITED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  './modules/**',
  './common/*/*/**',
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/modules',
  '../**/common',
];

export default tseslint.config(
  { ignores: ['node_modules', 'dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.tsx'],
        },
        alias: {
          map: [
            ['@common/containers', './src/common/containers'],
            ['@common/ui-kit', './src/common/ui-kit/antd'],
            ['@common/types', './src/common/ui-kit/types'],
            ['@common/data-access', './src/common/data-access'],
            ['@shared', './src/shared'],
            ['@modules/auth', './src/modules/auth'],
            ['@modules/dashboard', './src/modules/dashboard'],
          ],
          extensions: ['.ts', '.js', '.tsx', '.json'],
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import-plugin': importPlugin,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import-plugin/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: ['./src/common'],
              from: ['./src/modules/**', './src/shared/**'],
              message: 'Импорт из модулей в common запрещен',
            },
            {
              target: ['./src/shared'],
              from: ['./src/app/**', './src/modules/**'],
              message: 'Импорт из модулей app и modules в shared запрещен',
            },
            {
              target: ['./src/modules/**', './src/shared/**'],
              from: ['./node_modules/antd'],
              message:
                'Импорт из пакета antd запрещен, используйте компоненты из @common/ui-kit',
            },
            {
              target: ['./src/modules/**', './src/shared/**'],
              from: ['./node_modules/@ant-design'],
              message:
                'Импорт из пакета @ant-design запрещен, используйте компоненты из @common/ui-kit',
            },
            {
              target: ['./src/modules/dashboard'],
              from: ['./src/modules/auth'],
              message:
                'Запрещено использовать импорт из любых модулей, за исключением @common и @shared.',
            },
            {
              target: ['./src/modules/auth'],
              from: ['./src/modules/dashboard'],
              message:
                'Запрещено использовать импорт из любых модулей, за исключением @common и @shared.',
            },
          ],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: PROHIBITED_PATH_GROUPS,
              message: 'Запрещено использовать приватные пути для импорта',
            },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@tanstack', '^[a-z]'],
            ['^@'],
            ['^\\.\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^styled-components$'],
            ['.*\\u0000$'],
          ],
        },
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let'], next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: ['const', 'let'] },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
);
