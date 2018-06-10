# vue-structure

> Reasonable file structure of a vue project.

```
src
├── api  functions used to fetch data from server
│   └── goods.js
├── App.vue
├── assets
│   └── logo.png
├── components  component can't be divide further like atom.
├── config
│   └── config.js
├── layouts  layout is arrangement of components like molecular.
│   └── BasicLayout.vue
├── main.js  entry
├── router  font-end router
│   └── index.js
├── store  vuex store examples
│   ├── index.js
│   └── modules
│       ├── goods.js
│       └── index.js
└── utils
    └── request.js  intercept all request here.
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
