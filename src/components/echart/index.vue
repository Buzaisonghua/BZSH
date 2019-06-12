<template>
    <div class="echart">
        <EchartComponents />
    </div>
</template>
<script>
import EchartComponents from './components/index'
export default {
  data () {
    return {
      users: ''
    }
  },
  components: {
    EchartComponents
  }
}
</script>

<style lang="scss" scoped>
    .echart{
        padding: 20px;
    }
</style>
