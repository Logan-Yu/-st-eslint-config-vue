module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: [
    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "prettier/vue",
  ],
  plugins: ["eslint-comments", "vue"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "no-unused-vars": "off",
      },
    },
  ],
  globals: {
    my: true,
    wx: true,
    uni: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: true,
    global: true,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },
  rules: {
    // General
    "comma-dangle": [1, "always-multiline"], // allow or disallow trailing commas
    "no-cond-assign": 1, // disallow assignment in conditional expressions
    "no-console": 0, // disallow use of console (off by default in the node environment)
    "no-const-assign": 2, // disallow assignment to const-declared variables
    "no-constant-condition": 0, // disallow use of constant expressions in conditions
    "no-control-regex": 1, // disallow control characters in regular expressions
    "no-debugger": 1, // disallow use of debugger
    "no-dupe-class-members": 2, // Disallow duplicate name in class members
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-empty": 0, // disallow empty statements
    "no-ex-assign": 1, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1, // disallow unnecessary semicolons
    "no-func-assign": 1, // disallow overwriting functions written as function declarations
    "no-inner-declarations": 0, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 1, // disallow invalid regular expression strings in the RegExp constructor
    "no-negated-in-lhs": 1, // disallow negation of the left operand of an in expression
    "no-obj-calls": 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 1, // disallow multiple spaces in a regular expression literal
    "no-reserved-keys": 0, // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 1, // disallow sparse arrays
    "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1, // disallow comparisons with the value NaN
    "valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 1, // Ensure that the results of typeof are compared against a valid string

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

    "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0, // require return statements to either always or never specify values
    curly: 1, // specify curly brace conventions for all control statements
    "default-case": 0, // require default case in switch statements (off by default)
    "dot-notation": 1, // encourages use of dot notation whenever possible
    eqeqeq: [1, "allow-null"], // require the use of === and !==
    "guard-for-in": 0, // make sure for-in loops have an if statement (off by default)
    "no-alert": 1, // disallow the use of alert, confirm, and prompt
    "no-caller": 1, // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 0, // disallow else after a return in an if (off by default)
    "no-eq-null": 0, // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2, // disallow use of eval()
    "no-extend-native": 1, // disallow adding to native types
    "no-extra-bind": 1, // disallow unnecessary function binding
    "no-fallthrough": 1, // disallow fallthrough of case statements
    "no-floating-decimal": 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 1, // disallow use of eval()-like methods
    "no-labels": 1, // disallow use of labeled statements
    "no-iterator": 1, // disallow usage of __iterator__ property
    "no-lone-blocks": 1, // disallow unnecessary nested blocks
    "no-loop-func": 0, // disallow creation of functions within loops
    "no-multi-str": 0, // disallow use of multiline strings
    "no-native-reassign": 0, // disallow reassignments of native objects
    "no-new": 1, // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 2, // disallow use of new operator for Function object
    "no-new-wrappers": 1, // disallows creating new instances of String,Number, and Boolean
    "no-octal": 1, // disallow use of octal literals
    "no-octal-escape": 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-proto": 1, // disallow usage of __proto__ property
    "no-redeclare": 0, // disallow declaring the same variable more then once
    "no-return-assign": 1, // disallow use of assignment in return statement
    "no-script-url": 1, // disallow use of javascript: urls.
    "no-self-compare": 1, // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 1, // disallow use of comma operator
    "no-unused-expressions": 0, // disallow usage of expressions in statement position
    "no-void": 1, // disallow use of void operator (off by default)
    "no-warning-comments": 0, // disallow usage of configurable warning terms in comments": 1,                        // e.g. TODO or FIXME (off by default)
    "no-with": 1, // disallow use of the with statement
    radix: 1, // require use of the second argument for parseInt() (off by default)
    "semi-spacing": 1, // require a space after a semi-colon
    "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions

    // Variables
    // These rules have to do with variable declarations.

    "no-catch-shadow": 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 1, // disallow deletion of variables
    "no-label-var": 1, // disallow labels that share a name with a variable
    "no-shadow": 1, // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1, // disallow shadowing of names such as arguments
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 0, // disallow use of undefined variable (off by default)
    "no-undef-init": 1, // disallow use of undefined when initializing variables
    "no-unused-vars": [
      1,
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ], // disallow declaration of variables that are not used in the code
    "no-use-before-define": 0, // disallow use of variables before they are defined

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    "handle-callback-err": 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 1, // restrict usage of specified node modules (off by default)
    "no-sync": 0, // disallow use of synchronous methods (off by default)

    // ESLint Comments Plugin
    // The following rules are made available via `eslint-plugin-eslint-comments`
    "eslint-comments/no-aggregating-enable": 1, // disallows eslint-enable comments for multiple eslint-disable comments
    "eslint-comments/no-unlimited-disable": 1, // disallows eslint-disable comments without rule names
    "eslint-comments/no-unused-disable": 1, // disallow disables that don't cover any errors
    "eslint-comments/no-unused-enable": 1, // // disallow enables that don't enable anything or enable rules that weren't disabled

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    "key-spacing": 0,
    "keyword-spacing": 1, // enforce spacing before and after keywords
    "jsx-quotes": [1, "prefer-double"], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
    "comma-spacing": 0,
    "no-multi-spaces": 0,
    "brace-style": 0, // enforce one true brace style (off by default)
    camelcase: 0, // require camel case names
    "consistent-this": 1, // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0, // require function expressions to have a name (off by default)
    "func-style": 0, // enforces use of function declarations or expressions (off by default)
    "new-cap": 0, // require a capital letter for constructors
    "new-parens": 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
    "no-array-constructor": 1, // disallow use of the Array constructor
    "no-empty-character-class": 1, // disallow the use of empty character classes in regular expressions
    "no-lonely-if": 0, // disallow if as the only statement in an else block (off by default)
    "no-new-object": 1, // disallow use of the Object constructor
    "no-spaced-func": 1, // disallow space between function identifier and application
    "no-ternary": 0, // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
    quotes: [1, "single", "avoid-escape"], // specify whether double or single quotes should be used
    "quote-props": 0, // require quotes around object literal property names (off by default)
    semi: 0, // require or disallow use of semicolons instead of ASI
    "sort-vars": 0, // sort variables within the same declaration block (off by default)
    "space-in-brackets": 0, // require or disallow spaces inside brackets (off by default)
    "space-in-parens": 0, // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 1, // require spaces around operators
    "space-unary-ops": [1, { words: true, nonwords: false }], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "max-nested-callbacks": 0, // specify the maximum depth callbacks can be nested (off by default)
    "one-var": 0, // allow just one var statement per function (off by default)
    "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)

    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.

    "max-depth": 0, // specify the maximum depth that blocks can be nested (off by default)
    "max-len": 0, // specify the maximum length of a line in your program (off by default)
    "max-params": 0, // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 1, // disallow use of bitwise operators (off by default)
    "no-plusplus": 0, // disallow use of unary operators, ++ and -- (off by default)

    // Vue Plugin
    // The following rules are made available via `eslint-plugin-vue`.

    "vue/custom-event-name-casing": 0, //This rule enforces using kebab-case custom event names.
    "vue/no-arrow-functions-in-watch": 2, //This rules disallows using arrow functions to defined watcher.
    "vue/no-async-in-computed-properties": 2, //This rule is aimed at preventing asynchronous methods from being called in computed properties.
    "vue/no-dupe-keys": 2, //This rule is aimed at preventing duplicated property names.
    "vue/no-dupe-v-else-if": 2, //This rule disallows duplicate conditions in the same v-if / v-else-if chain.
    "vue/no-duplicate-attributes": 2, //This rule reports duplicate attributes. v-bind:foo directives are handled as the attributes foo.
    "vue/no-mutating-props": 2, //This rule reports mutation of component props.
    "vue/no-parsing-error": 0, // ???
    "vue/no-reserved-keys": 2, //This rule prevents to use reserved names (opens new window)to avoid conflicts and unexpected behavior.
    "vue/no-shared-component-data": 2, //When the value of data is an object, it’s shared across all instances of a component.
    "vue/no-side-effects-in-computed-properties": 2, //This rule is aimed at preventing the code which makes side effects in computed properties.
    "vue/no-template-key": 2, //This rule reports the <template> elements which have key attribute.
    "vue/no-textarea-mustache": 2, //This rule reports mustaches in <textarea>.
    "vue/no-unused-components": 2, //This rule reports components that haven't been used in the template.
    "vue/no-unused-vars": 2, //This rule report variable definitions of v-for directives or scope attributes if those are not used.
    "vue/no-use-v-if-with-v-for": 2, //This rule is aimed at preventing the use of v-for directives together with v-if directives on the same element.
    "vue/require-component-is": 2, //This rule reports the <component> elements which do not have v-bind:is attributes.
    "vue/require-prop-type-constructor": 2, //This rule reports prop types that can't be presumed as constructors.
    "vue/require-render-return": 2, //This rule aims to enforce render function to always return value
    "vue/require-v-for-key": 2, //This rule reports the elements which have v-for and do not have v-bind:key with exception to custom components.
    "vue/require-valid-default-prop": 2, //This rule checks whether the default value of each prop is valid for the given type. It should report an error when default value for type Array or Object is not returned using function.
    "vue/valid-v-else-if": 2, //This rule reports v-else-if directives in the following cases:
    "vue/valid-v-else": 2, //This rule reports v-else directives in the following cases:
    "vue/valid-v-on": 2, //This rule reports v-on directives in the following cases
    "vue/return-in-computed-property": [
      "error",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
  },
};
