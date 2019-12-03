<template>
    <div class="clearfix">
        <img class="logo" src="../assets/logo.jpg"/>
        <el-menu default-active="/" class="el-menu-nav" mode="horizontal" :router="true">
            <el-menu-item class="el-menu-item" index="/">
                首页
            </el-menu-item>

            <el-menu-item class="el-menu-item" index="about">
                个人中心
            </el-menu-item>

            <el-submenu index="">
                <template slot="title">我要申请</template>
                <el-menu-item index="test">城市最低生活保障金</el-menu-item>
                <el-menu-item index="3-2">残疾人保障金</el-menu-item>
                <el-menu-item index="3-3">大学生创业吸纳就业奖励</el-menu-item>
                <el-menu-item index="3-4">高龄津贴</el-menu-item>
                <el-menu-item index="3-5">分散孤儿价格临时补贴</el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "navigator"
    }
</script>

<style scoped lang="scss">
    .logo {
        float: left;
        height: 50px;
        width: auto;
        margin: 20px;
    }

    .el-menu-nav {
        font-size: 16px;
        float: left;
        margin-top: 10px;
        margin-left: 20px;
        font-size: large;
        border-bottom: 0px transparent !important;
    }
    .el-menu-item {
        font-size: 16px;}

    a {
        text-decoration: none;
    }
</style>