<template>
  <i class="iconfont" :class="`icon-${name} ${customClass}`"></i>
</template>
<script>

  export default {
    name: 'lan-icon',
    props: {
      name: String,
      customClass: String
    }
  };
</script>
