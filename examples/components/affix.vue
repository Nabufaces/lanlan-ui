<template>
  <article>
    <h1>NPM安装</h1>

    <h2>全局引入</h2>
    <pre v-highlight>
      <code class="javascript">
        $ npm install lanlan-ui@0.0.10 --save

        import lanlanui from 'lanlan-ui'

        Vue.use(lanlanui);
      </code>
    </pre>

    <h2>按需引入</h2>
    <pre v-highlight>
      <code class="javascript">
        $ npm install lanlan-ui@0.0.10 --save

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

  }
</script>
