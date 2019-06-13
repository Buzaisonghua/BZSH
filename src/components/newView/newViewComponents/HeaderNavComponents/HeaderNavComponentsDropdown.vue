<template>
    <div class="header-nav-components-dropdown">
        <el-dropdown>
            <span class="el-dropdown-link">
                信息列表
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <router-link :to="{name: 'newViewONE'}">
                    <el-dropdown-item>
                        处理中心
                    </el-dropdown-item>
                </router-link>
                <router-link :to="{name: 'newViewTWO'}">
                    <el-dropdown-item>
                        退货中心
                    </el-dropdown-item>
                </router-link>
                <router-link :to="{name: 'newViewTHREE'}">
                    <el-dropdown-item>
                        消息中心
                    </el-dropdown-item>
                </router-link>
                <router-link :to="{name: 'newViewFOUR'}">
                    <el-dropdown-item>
                        订单管理
                    </el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<style>
    .header-nav-components-dropdown{
        margin-left: 20px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
