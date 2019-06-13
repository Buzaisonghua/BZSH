<template>
    <div class="header-nav">
        <div class="header-box">
            <div class="header-box-nav">
                <HeaderNavComponentsNav />
                <HeaderNavComponentsDropdown />
            </div>
            <div class="header-box-button">
                <HeaderNavComponentsButton />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNavComponentsNav from './HeaderNavComponents/HeaderNavComponentsNav'
import HeaderNavComponentsButton from './HeaderNavComponents/HeaderNavComponentsButton'
import HeaderNavComponentsDropdown from './HeaderNavComponents/HeaderNavComponentsDropdown'
export default{
  name: 'HeaderNav',
  components: {
    HeaderNavComponentsNav,
    HeaderNavComponentsButton,
    HeaderNavComponentsDropdown
  }
}
</script>

<style lang="scss" scoped>
    .header-box{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-box-nav{
            height: 80px;
            line-height: 80px;
        }
        .header-box-button{
            height: 80px;
            line-height: 80px;
            padding-right: 20px;
        }
    }
    @media all and(max-width: 768px){
        .header-nav-components-nav{
            display: none;
        }
        .header-nav-components-dropdown{
            display: block;
        }
    }
    @media all and(min-width: 768px){
        .header-nav-components-dropdown{
            display: none;
        }
    }
</style>
