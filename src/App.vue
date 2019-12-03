<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
    <footbar></footbar>
  </div>
</template>

<script>
import navigator from '@/components/Navigator.vue'
import footbar from '@/components/Footbar.vue'

export default {
    name: 'App',
    components: {
        navigator,
        footbar
    }
}
</script>

<style lang="scss">
  html{

  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  #app {
    height: 100%;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .el-menu--horizontal>.el-submenu .el-submenu__title {
    font-size: 16px;
  }
</style>
