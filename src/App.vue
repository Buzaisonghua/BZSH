<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  html,
  body,
  #app{
    width:100%;
    height:100%;
    min-width: 320px;
  }
  *{
    margin: 0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
</style>
