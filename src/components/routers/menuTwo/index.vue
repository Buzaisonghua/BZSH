<template>
    <div class="menuTwo">
        <div class="box">
            <span>menu-2</span>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
    .menuTwo{
        padding: 20px;
        .box{
            width: 100%;
            height: 300px;
            background: rgba(200,180,160,.5);
            box-sizing: border-box;
            span {
                display: inline-block;
                margin-top: 30px;
                margin-left: 30px;
            }
        }
    }
</style>
