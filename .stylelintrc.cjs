// stylelint.config.js (or .stylelintrc.js)
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [true, {
        ignoreAtRules: [
            'tailwind', 'apply', 'variants', 'responsive', 'screen'
        ]
    }],
  }
};