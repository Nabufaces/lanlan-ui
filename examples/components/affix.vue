<template>
  <article>
    <h1>NPM安装</h1>

    <h2 style="margin-top: 40px">全局引入</h2>
    <pre v-highlight>
      <code class="javascript">
        $ npm install lanlan-ui --save

        import 'lanlan-ui/dist/lanlanui.css'

        import lanlanui from 'lanlan-ui'

        Vue.use(lanlanui);
      </code>
    </pre>

    <h2>按需引入</h2>
    <pre v-highlight>
      <code class="javascript">
        $ npm install lanlan-ui --save

        import 'lanlan-ui/dist/lanlanui.css'

        import { lanButton } from 'lanlan-ui'

        new Vue({
          el: '#app',
          components: {
            lanButton
          }
        })
      </code>
    </pre>
  </article>
</template>

<script>
  export default {
    name: 'affix'
  }
</script>
