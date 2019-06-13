<template>
    <div class="main-components-box">
        <div class="box-header">
            111
        </div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6">1</el-col>
            <el-col :xs="24" :sm="12" :md="6">1</el-col>
            <el-col :xs="24" :sm="12" :md="6">1</el-col>
            <el-col :xs="24" :sm="12" :md="6">1</el-col>
        </el-row>
    </div>
</template>

<script>
export default{
  name: 'MainComponentsBox',
  data () {
    return {
      boxData: ''
    }
  },
  beforeCreate () {
    this.axios.get('http://localhost:8080/static/newView.json').then((data) => {
      this.boxData = data.data
      console.log(data.data[0].phone[0].phoneName)
      for (let i = 0; i < data.data.length; i++) {
        for (let j = 0; j < data.data[i].length; j++) {
          console.log(data.data[i].phone[j].phoneName)
        }
      }
    }).catch(() => {
      console.log('newView.json请求失败')
    })
  }
}
</script>

<style lang="scss" scoped>
    .main-components-box{
        .box-header{
           height: 120px;
        }
        .el-col{
            height: 110px;
        }
    }
</style>
