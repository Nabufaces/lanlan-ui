<template>

</template>

<script>
  export default{
    name: 'lan-table-column',
    props: {
      prop: String,
      label: {
        type: [Number,String],
        require: true
      },
      width: {
        type: Number
      },
      align: {
        type: String,
        default: 'left',
        validator: function (value) {
          return ['left', 'center', 'right'].indexOf(value) !== -1;
        }
      }
    }
  }
</script>

