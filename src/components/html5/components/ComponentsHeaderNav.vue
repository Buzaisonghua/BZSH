<template>
    <div class="HeaderNav">
        <ul class="nav">
            <li v-for="(isNav, index) in isNavs" class="el-nav" @click="changeBorder(index)" :key="index">
                <router-link :to="isNav.navLink">
                    <span :class="{spanBorder: index === isShowBorder}">{{isNav.navName}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShowBorder: -1,
      isNavs: [
        {
          navName: 'one',
          navLink: {name: 'ONE'}
        },
        {
          navName: 'two',
          navLink: {name: 'TWO'}
        },
        {
          navName: 'three',
          navLink: {name: 'THREE'}
        }
      ]
    }
  },
  methods: {
    changeBorder (index) {
      this.isShowBorder = index
    }
  }
}
</script>

<style lang="scss" scoped>
    .HeaderNav{
        display: inline-block;
        height: 80px;
        a{
            text-decoration: none;
            color: #ffffff;
        }
        a:hover{
            color: mediumseagreen;
        }
        .nav{
            padding-left: 30px;
            list-style: none;
            height: 100%;
            .el-nav{
                display: inline-block;
                height: 100%;
                width: 70px;
                color: #FBFCFD;
                font-size: 18px;
                font-weight: bolder;
                span{
                    display: inline-block;
                    height: 100%;
                    line-height: 80px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .spanBorder{
                    border-bottom: 3px solid mediumseagreen;
                }
            }
        }
    }
</style>
