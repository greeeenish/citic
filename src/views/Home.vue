<template>
  <div>
    <img alt="首页图片" src="../assets/pic.jpg">

    <div class="box-container clearfix">
      <el-card class="box-card">
        <div class="text item">
          城市最低生活保障金
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          残疾人保障金
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          大学生创业吸纳就业奖励
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          高龄津贴
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          分散孤儿价格临时补贴
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>

<style lang="scss">
  img {
    width: 100%;
    max-height: 100%;

  }
  .box-container {
    width: 100%;
  }

  .box-card {
    width: calc(18% - 2px);
    height: 100px;
    float: left;
    margin: 1%;

    .text {

    }
  }
</style>
