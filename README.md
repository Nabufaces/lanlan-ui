<p align="center">
    <img width="200" src="./static/img/logo.png">
</p>

## lanlan-ui

#### A UI Toolkit built on Vue.js.

> This branch is for Vue.js 2.x.

### Install

Using npm:
```
  npm install lanlan-ui --save
```

Install for global use:
```js
  import 'lanlan-ui/dist/lanlanui.css'
  import lanlanui from 'lanlan-ui'
  import Vue from 'vue'
  Vue.use(lanlanui)
```

Install for local use:
```js
  import 'lanlan-ui/dist/lanlanui.css'
  import { lanButton } from 'lanlan-ui'
  import Vue from 'vue'
  new Vue({
    el: '#app',
    components: {
      lanButton
    }
  })
```

### Usage
```vue
  <template>
      <lan-input v-model="value" />
  </template>
  <script>
      export default {
          data () {
              return {
                  value: ''
              }
          }
      }
  </script>
```
