export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    };
  },
  mounted () {
    this.updateValue();
  },
  methods: {
    change (label) {
      this.currentValue = label;
      this.updateValue();
      this.$emit('onChange', label);
    }
  },
  watch: {
    value () {
      this.updateValue();
    }
  }
};
