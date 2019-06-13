<template>
    <div class="newView">
        <el-container>
            <el-header>
                <div class="el-header-box">
                    <HeaderNav />
                </div>
            </el-header>
            <el-main>
                <div class="el-main-box">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import HeaderNav from './newViewComponents/HeaderNav'
export default{
  name: 'newView',
  components: {
    HeaderNav
  }
  // beforeCreate () {
  //   this.$confirm('为了更好的体验，即将进入全屏，是否继续', '提示', {
  //     confirmButtonText: '好的',
  //     cancelButtonText: '取消'
  //   }).then(() => {
  //     this.$message({
  //       type: 'success',
  //       message: '进入成功!'
  //     })
  //   }).catch(() => {
  //     this.$router.push({name: 'Home'})
  //     this.$message({
  //       type: 'success',
  //       message: '返回主页面!'
  //     })
  //   })
  // }
}
</script>

<style lang="scss" scoped>
    .newView{
        width: 100%;
        height:100%;
        min-width: 375px;
        .el-container{
            width: 100%;
            height: 100%;
            .el-header{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 80px!important;
                padding: 0;
                display: flex;
                justify-content: center;
                .el-header-box{
                    width: 1140px;
                    height: 100%;
                    border-bottom: 1px solid #dcdfe6;
                }
            }
            .el-main{
                margin-top: 80px;
                padding: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                .el-main-box{
                    width: 1140px;
                    height: 1140px;
                }
            }
        }
    }
</style>
