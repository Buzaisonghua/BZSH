<template>
    <div class="main-components-box">
        <div class="box" v-for="(boxData, index) in boxDatas" :key="index">
            <div class="box-header" :class="{boxHeaderStyle: isBoxHeaderStyle === index}" @mouseenter="isBoxHeaderStyle = index" @mouseleave="isBoxHeaderStyle = -1">
                <p>
                    {{ boxData.phone}}
                </p>
            </div>
            <div class="box-main">
                <el-row :gutter="40">
                    <el-col v-for="(item, index) in boxData.items" :key="index" :xs="24" :sm="12" :md="6">
                        <div class="el-col-box">
                            <p>{{item.phoneName}}</p>
                            <p>{{item.phoneMoney}}</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  name: 'MainComponentsBox',
  data () {
    return {
      boxDatas: [],
      isBoxHeaderStyle: -1
    }
  },
  methods: {
    changeBoxHeader () {
      console.log(11)
    }
  },
  beforeCreate () {
    this.axios.get('http://localhost:8080/static/newView.json').then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.boxDatas.push(data.data[i])
      }
    }).catch(() => {
      console.log('newView.json请求失败')
    })
  }
}
</script>

<style lang="scss" scoped>
    .main-components-box{
        .box{
            border: 1px solid #cccccc;
            padding: 20px;
            margin-top: 20px;
            .box-header{
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #cccccc;
                margin-bottom: 10px;
            }
            .boxHeaderStyle{
                border: none;
                background: #cccccc;
            }
            .el-col-box{
                width: 100%;
                height: 110px;
                border: #cccccc 1px solid;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                p:nth-child(1){
                    padding-bottom: 10px;
                }
            }
        }
    }
</style>
