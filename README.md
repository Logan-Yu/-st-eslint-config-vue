## 安装

```
yarn add -D @zainli/eslint-config-vue
```

`需要npm` 3+

## 使用

Add to your eslint config (.eslintrc.js)

```js
module.exports = {
  root: true,
  extends: ["@zain/vue", "plugin:prettier/recommended", "prettier/vue"],
};
```
