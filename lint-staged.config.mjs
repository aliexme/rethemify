export default {
  '*.{js,mjs,.jsx,.ts,.tsx}': [() => 'yarn ts:check', 'yarn lint:check'],
}
