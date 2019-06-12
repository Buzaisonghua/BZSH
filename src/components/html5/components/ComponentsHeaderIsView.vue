<template>
    <div class="ComponentsHeader">
        <div class="isView">
            <el-popover
                    placement="top-start"
                    :title="isView?isViewOpen:isViewClose"
                    width="150"
                    trigger="hover"
                   >
                    <span slot="reference" class="el-icon-loading" @click="changeView()"></span>
            </el-popover>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isViewOpen: '点击开启全屏',
      isViewClose: '点击关闭全屏'
    }
  },
  methods: {
    changeView () {
      this.$store.commit('changeIsView')
    }
  },
  computed: {
    ...mapState({
      isView: 'isView'
    })
  }
}
</script>

<style lang="scss" scoped>
    .ComponentsHeader{
        float: right;
        height: 100%;
        padding-right: 20px;
        display: inline-block;
        .isView{
            height: 100%;
            display: inline-block;
            display: flex;
            align-items: center;
        }
    }
</style>
