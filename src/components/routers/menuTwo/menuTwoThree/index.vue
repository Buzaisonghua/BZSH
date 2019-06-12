<template>
    <div class="menuTwoTree">
        <span>menu-2-3</span>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    .menuTwoTree{
        width: 70%;
        height: 200px;
        background: rgba(160,140,120,.5);
        margin-left: 60px;
        margin-top: 30px;
        span{
            margin-top: 30px;
            margin-left: 30px;
        }
    }
</style>
