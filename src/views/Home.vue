<template>
  <div class="content">
    <!--<img alt="首页图片" src="../assets/pic.jpg">-->
    <el-carousel trigger="click" height="375px">
      <el-carousel-item v-for="item in 2" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <services></services>
    <news></news>
  </div>
</template>

<script>
// @ is an alias to /src
import services from '@/components/Services.vue'
import news from '@/components/News.vue'

export default {
  name: 'home',
  components: {
      services,
      news
  }
}
</script>

<style lang="scss">
  .content {
    flex: 1;
  }

  img {
    width: 100%;
    max-height: 100%;

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n+1) {
    background: url("../assets/pic.jpg");
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n) {
      background: url("../assets/pic.png");
      background-size: cover;
  }

</style>
