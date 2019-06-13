<template>
    <div class="main-components-carousel">
        <el-carousel height="500px">
            <el-carousel-item v-for="(carouselData, index) in carouselDatas" :key="index">
                <img :src="carouselData.imgSrc" alt="index">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import oneJpg from '@/assets/newViewImage/0.jpg'
import twoJpg from '@/assets/newViewImage/1.jpg'
import threeJpg from '@/assets/newViewImage/2.jpg'
import fourJpg from '@/assets/newViewImage/3.jpg'
export default{
  name: 'mainComponentsCarousel',
  data () {
    return {
      carouselDatas: [
        {
          imgSrc: oneJpg
        },
        {
          imgSrc: twoJpg
        },
        {
          imgSrc: threeJpg
        },
        {
          imgSrc: fourJpg
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .main-components-carousel{
        .el-carousel{
            img{
                width: 100%;
                height: 700px;
            }
        }
    }
    @media all and (max-width: 768px){
        .main-components-carousel{
            display: none;
        }
    }
</style>
