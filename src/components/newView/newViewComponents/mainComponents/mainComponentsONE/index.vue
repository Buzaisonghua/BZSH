<template>
    <div class="main-components-one">
<!--        <MainComponentsCarousel />-->
        <MainComponentsBox />
    </div>
</template>

<script>
import MainComponentsCarousel from './mainComponentsCarousel'
import MainComponentsBox from './mainComponentsBox'
export default{
  name: 'mainComponentsONE',
  components: {
    MainComponentsCarousel,
    MainComponentsBox
  }
}
</script>
