<template>
    <div class="headerNavComponentsButton">
        <el-popover
                placement="top-start"
                title="提示"
                width="200"
                trigger="hover"
                content="点击回到BZSH主页面">
            <span slot="reference" class="button-icon" @click="linkToHome()">
                <span class="el-icon-loading"></span>
            </span>
        </el-popover>
    </div>
</template>

<script>
export default{
  name: 'HeaderNavComponentsButton',
  methods: {
    linkToHome () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .headerNavComponentsButton{
        height: 80px;
        .button-icon{
            font-size: 40px;
        }
    }
</style>
