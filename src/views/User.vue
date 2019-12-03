<template>
  <div class="user">
    <el-tabs :-model="first">
      <el-tab-pane label="基本信息" name="first">
        <baseInfo></baseInfo>
      </el-tab-pane>

      <el-tab-pane label="历史申请" name="second">

      </el-tab-pane>

      <el-tab-pane label="正在办理" name="third">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import baseInfo from "@/components/BaseInfo.vue";

    export default {
        components: {baseInfo},
        name: "user"
    }
</script>

<style>
  .user {
    height: calc(100% - 290px);
  }
</style>
