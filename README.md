## 懒懒UI库

### NPM安装

#### 全局引入
      $ npm install lanlan-ui@0.1.2 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import lanlanui from 'lanlan-ui'
      Vue.use(lanlanui);
  
#### 按需引入
      $ npm install lanlan-ui@0.1.2 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import { lanButton } from 'lanlan-ui'
      new Vue({
        el: '#app',
        components: {
          lanButton
        }
      })
