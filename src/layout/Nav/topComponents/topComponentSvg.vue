<template>
    <div class="topComponentSvg" @click="changeNa">
        <span :class="isNav?classA:classB"></span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isOpen: true,
      classA: 'el-icon-s-unfold',
      classB: 'el-icon-s-fold'
    }
  },
  computed: {
    ...mapState({
      isNav: 'isNav'
    })
  },
  methods: {
    changeNa () {
      this.$store.commit('changeNav')
    }
  }
}
</script>

<style lang="scss">
    .topComponentSvg{
        display: inline-block;
        height: 100%;
        line-height: 50px;
        span{
            font-size: 20px;
            padding: 0 10px;
        }
    }
</style>
