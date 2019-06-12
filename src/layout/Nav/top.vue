<template>
    <div class="top">
        <TopComponentSvg />
        <div class="right-menu">
            <TopComponentDropdown />
        </div>
    </div>
</template>

<script>
import TopComponentSvg from './topComponents/topComponentSvg'
import TopComponentDropdown from './topComponents/topComponentDropdown'

export default {
  components: {
    TopComponentSvg,
    TopComponentDropdown
  }
}
</script>

<style lang="scss">
    .top{
        width: 100%;
        height: 100%;
        .right-menu {
            display: inline-block;
            float: right;
            padding: 0px 10px;
        }
    }
</style>
