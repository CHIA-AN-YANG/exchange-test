# Exchange Page - Mobile View

A mock that showcases an exchange process, constructed with Vue.js.

---

## Installation

You can clone this project from here: [github link](https://github.com/CHIA-AN-YANG/exchange-test.git)

### 1. Clone and install

Clone with HTTPs:

```bash
git clone https://github.com/CHIA-AN-YANG/exchange-test.git
```

Alternatively, clone with SSH:

```bash
git clone git@github.com:CHIA-AN-YANG/exchange-test.git
```

Run npm install to install required plugins.

```
npm install
```

---

## Usage

To use HTTP for localhost, comment out the HTTPS setting in `vue.config.js` accordingly:

```
//vue.config.js
//module.exports = { devServer: { https: true } }
```

### 1. Compile and minify for production

Since webpack comes with Vue-cli and does the minification, it does not require external task runners.

```
npm run build
```

### 2. Compile and hot-reload

```
npm run serve
```

---

## Unit Test

This mock uses **Vue Test Utils** - the official unit testing utility library for Vue.js.
Run the following script for unit testing:

```
npm run test:unit
```

---

## Version Information

- vue: ^2.6.14
- Node.js: ^14.17.1
- npm: ^6.14.13
- vue-router: ^3.5.2
- vuex: ^3.6.2
- @vue-stripe/vue-stripe: ^4.2.5
- axios: ^0.21.1
- bootstrap-vue": ^2.21.2
- webpack: ^4.46.0 _Please note that, using webpack 5 may cause this project to crash_
- terser-webpack-plugin: ^4.2.3
- postcss: ^2.2.6,
- postcss-loader: ^2.1.6,

## Contributing

Drop me an email, leave a comment, or make a pull request if you have any suggestion for improvement. I would greatly appreciate it!
My email address is: chiaan.y.creativeworker@gmail.com
