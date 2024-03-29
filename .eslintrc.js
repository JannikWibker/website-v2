module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 140,
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ],
    'space-before-function-paren': 'off',
    // the behaviour of ternary operators is often more clear than using '||', '&&' or '??'
    'no-unneeded-ternary': 'off',
    // This rule has a small problem: when using jsx it is pretty common to wrap the (true / false) expressions in parentheses and have the "?" or ":" on the same line.
    // This isn't allowed with this rule as it would require an additional newline for "?" and ":".
    // As the rule doesn't really enforce anything useful (a lot of bad styles are still allowed, but some good ones as well; no real way to filter further) disabling it doesn't hurt.
    'multiline-ternary': 'off',
    'no-use-before-define': 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
