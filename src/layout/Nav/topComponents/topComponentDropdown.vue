<template>
    <div class="topComponentsDropdown">
        <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        users<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><Logout /></el-dropdown-item>
                        <el-dropdown-item>实例1</el-dropdown-item>
                        <el-dropdown-item>实例2</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
    </div>
</template>

<script>
import Logout from '@/components/logout'
export default {
  components: {
    Logout
  }
}
</script>

<style lang="scss">
    .topComponentsDropdown {
        display: inline-block;
        line-height: 50px;
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
        .demonstration {
            display: block;
            color: #8492a6;
            font-size: 14px;
            margin-bottom: 20px;
        }
    }
</style>
