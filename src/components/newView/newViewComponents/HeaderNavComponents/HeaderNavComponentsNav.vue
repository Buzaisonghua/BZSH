<template>
    <div class="header-nav-components-nav">
        <el-menu default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link :to="{name: 'newViewONE'}">
                    <span>处理中心</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{name: 'newViewTWO'}">
                    <span>退货中心</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="3" >
                <router-link :to="{name: 'newViewTHREE'}">
                    <span>消息中心</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link :to="{name: 'newViewFOUR'}">
                    <span>订单管理</span>
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
    .header-nav-components-nav{
        height: 80px;
        .el-menu{
            border: none;
            .el-menu-item{
                height: 80px;
                line-height: 80px;
                span{
                    display: inline-block;
                    height:80px;
                }
            }
        }
    }
</style>
