export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: [String, Number]
  },
  data() {
    return {
      currentValue: this.value,
      group: false
    }
  },
  methods: {
    change (event) {
      this.currentValue = event.target.checked;
      if (!this.group) {
        this.$emit('change', this.currentValue);
      }

      if (this.group && this.label !== undefined) {
        this.$parent.change(this.label, this.currentValue);
      }
    }
  }
}
