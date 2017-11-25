<template>
  <i class="iconfont" :class="`icon-${name}`"></i>
</template>
<script>

  export default {
    name: 'lan-icon',
    props: {
      name: String
    }
  };
</script>
