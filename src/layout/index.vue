<template>
    <div class="layout">
        <el-container>
            <el-aside :width="isNav ? closeLeftNav:openLeftNav" >
                <LeftNav />
            </el-aside>

            <el-container>
                <el-header>
                    <Top />
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import LeftNav from './Nav/leftNav'
import Top from './Nav/top'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      openLeftNav: '210px',
      closeLeftNav: '54px'
    }
  },
  computed: {
    ...mapState({
      isNav: 'isNav'
    })
  },
  components: {
    LeftNav,
    Top
  }
}
</script>

<style lang="scss">
   .layout{
       width: 100%;
       height: 100%;
       min-width: 320px;
       min-height: 100%;
       .el-container{
           width: 100%;
           height: 100%;
           .el-aside{
               height: 100%;
               min-height: 100%;
               /*border-right: 1px solid rgba(0,0,0,.1);*/
           }
           .el-header{
               width: 100%;
               padding: 0;
               height: 50px!important;
               box-shadow: -1px 1px 4px rgba(0,21,41,.88);
           }
       }
       @media all and (max-width: 800px) {

       }
   }
</style>
