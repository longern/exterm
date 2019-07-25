module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    "plugin:vue/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Vue: 'readonly',
    Vuetify: 'readonly',
    httpVueLoader: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
