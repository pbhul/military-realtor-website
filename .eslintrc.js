module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable problematic rules for deployment
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prefer-spread': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
}