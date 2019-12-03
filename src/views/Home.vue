<template>
  <div class="content">
    <img alt="首页图片" src="../assets/pic.jpg">
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

  }

  img {
    width: 100%;
    max-height: 100%;

  }

</style>
