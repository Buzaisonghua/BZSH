<template>
    <div class="html5">
        <el-container style="height: 80px">
            <el-header>
                <ComponentsHeaderNav/>
                <ComponentsHeaderIsView />
            </el-header>
        </el-container>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import ComponentsHeaderIsView from './components/ComponentsHeaderIsView'
import ComponentsHeaderNav from './components/ComponentsHeaderNav'
export default{
  data () {
    return {
      showAside: ''
    }
  },
  components: {
    ComponentsHeaderIsView,
    ComponentsHeaderNav
  },
  methods: {
    changeAside (data) {
      this.showAside = data
    }
  }
}
</script>

<style lang="scss" scoped>
    .html5{
        width: 100%;
        height: 100%;
        .el-container{
            width: 100%;
            height: 100%;
            .el-header{
                width: 100%;
                height: 80px!important;
                padding: 0px;
                background: #cccccc;
            }
            .el-main{
                width: 100%;
                height: 100%;
                padding: 0px;
            }
        }
    }
</style>
