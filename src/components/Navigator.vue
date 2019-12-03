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
        <div class="login">
            <i class="el-icon-user"></i>
            <span @click="login">登陆</span>/
            <span>注册</span>
        </div>

        <!--登陆-->
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <el-input v-model="identify" placeholder="身份证号"></el-input>
            <el-input placeholder="密码" v-model="password" show-password></el-input>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "navigator",
        data(){
          return {
              dialogVisible: false,
              identify:'',
              password:''
          }
        },
        methods: {
            login(){
                this.dialogVisible = true
            }
        }
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
        border-bottom: 0px transparent !important;
    }
    .el-menu-item {
        font-size: 16px;}

    a {
        text-decoration: none;
    }

    .login {
        float: right;
        margin-right: 10px;
        margin-top: 30px;

        span {
            cursor: pointer;
        }
    }
</style>