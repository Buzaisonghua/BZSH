<template>
    <div class="home">
       <button @click="set()">set</button>
       <button @click="get()">get</button>
       <button @click="remove1()">remove</button>
    </div>
</template>
<script>
import { getCookies, removeCookies, setCookies } from '../../utils/cookie'

export default {
  methods: {
    set () {
      console.log(setCookies('isNav', ''))
    },
    get () {
      console.log(getCookies('isNav'))
      console.log(Boolean(getCookies('isNav')))
    },
    remove1 () {
      removeCookies('isNav')
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
