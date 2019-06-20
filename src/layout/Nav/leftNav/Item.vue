<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    let vnodes = []

    if (icon) {
      vnodes.push(<i class={icon}/>)
    }

    return vnodes
  }
}
</script>
