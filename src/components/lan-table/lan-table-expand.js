export default {
  name: 'lan-table-expand',
  functional: true,
  props: {
    render: Function,
    index: Number,
    tr: Object,
    td: Object
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props);
  }
};
