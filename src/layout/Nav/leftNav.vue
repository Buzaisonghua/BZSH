<template>
    <div class="leftNav">
<!--        <h2 v-if="!isNav">BZSH</h2>-->
        <el-menu
                class="el-menu-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#60AF77"
                default-active="activeMenu"
                :collapse="isNav"
                mode="vertical"
        >
            <router-link :to="{name:'Home'}">
                <el-menu-item index="1">
                    <i class="el-icon-setting"></i>
                    <span>Home</span>
                </el-menu-item>
            </router-link>
            <router-link :to="{name:'Echart'}">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>Echart</span>
                </el-menu-item>
            </router-link>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Routers</span>
                </template>
                <router-link :to="{name:'MenuOne'}">
                    <el-menu-item index="3-1">Menu-1</el-menu-item>
                </router-link>
                <el-submenu index="3-2">
                    <span slot="title">Menu-2</span>
                    <router-link :to="{name:'MenuTwoOne'}">
                        <el-menu-item index="3-2-1">Menu-2-1</el-menu-item>
                    </router-link>
                    <router-link :to="{name:'MenuTwoTwo'}">
                        <el-menu-item index="3-2-2">
                            Menu-2-2
                        </el-menu-item>
                    </router-link>
                    <el-submenu index="3-2-3">
                        <span slot="title">Menu-2-3</span>
                        <router-link :to="{name:'MenuTwoThreeOne'}">
                            <el-menu-item index="3-2-3-1">Menu-2-3-1</el-menu-item>
                        </router-link>
                        <router-link :to="{name:'MenuTwoThreeTwo'}">
                            <el-menu-item index="3-2-3-2">Menu-2-3-2</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <router-link :to="{name:'Html5'}">
                <el-menu-item index="4">
                    <i class="el-icon-medal-1"></i>
                    <span>Html5</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<style lang="scss">
    .leftNav {
        h2 {
            background: rgba(96, 175, 119, .8);
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
        }

        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 100%;
        }

        .el-menu {
            border-right: none;
        }
    }
</style>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState({
      isNav: 'isNav'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>
