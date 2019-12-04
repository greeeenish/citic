<template>
    <div class="clearfix">
        <img class="logo" src="../assets/logo.jpg"/>
        <el-menu default-active="/" class="el-menu-nav" mode="horizontal" :router="true">
            <el-menu-item class="el-menu-item" index="/">
                首页
            </el-menu-item>

            <el-menu-item class="el-menu-item" index="user">
                个人中心
            </el-menu-item>

            <el-submenu index="">
                <template slot="title">我要申请</template>
                <el-menu-item index="lowestLifeGuarantee">城市最低生活保障金</el-menu-item>
                <el-menu-item index="disableFederation">残疾人保障金</el-menu-item>
                <el-menu-item index="employmentIncentive">大学生创业吸纳就业奖励</el-menu-item>
                <el-menu-item index="ageAllowance">高龄津贴</el-menu-item>
                <el-menu-item index="orphanAllowance">分散孤儿价格临时补贴</el-menu-item>
            </el-submenu>

        </el-menu>
        <div class="login">
            <i class="el-icon-user"></i>
            <span @click="login">登陆</span>/
            <span @click="register">注册</span>
        </div>

        <!--登陆-->
        <el-dialog
            :visible.sync="loginVisible"
            width="30%">
            <div class="applyHead">
                <img class="applyLogo" src="../assets/logo.jpg"/>
                <span class="applyTileText"><span class="firstText"> | 政务一卡通 </span>| 登陆</span>
            </div>

            <el-input class="input" v-model="identify" placeholder="身份证号"></el-input>
            <el-input style="margin-top: 20px" placeholder="密码" v-model="password" show-password></el-input>

            <el-radio-group v-model="userMode" style="margin-top: 20px">
                <el-radio :label="1">用户</el-radio>
                <el-radio :label="2">政务人员</el-radio>
                <el-radio :label="3">银行人员</el-radio>
            </el-radio-group>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doLogin()">确 定</el-button>
            </span>
        </el-dialog>

        <!--注册-->
        <el-dialog
                :visible.sync="registerVisible"
                width="60%">
            <div class="applyHead">
                <img class="applyLogo" src="../assets/logo.jpg"/>
                <span class="applyTileText"><span class="firstText"> | 政务一卡通 </span>| 注册</span>
            </div>

            <el-form :model="regForm" ref="regForm" label-width="150px" class="form">
                <el-form-item label="姓名" prop="user_name" class="inlineItem">
                    <el-input v-model="regForm.user_name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="user_age" class="inlineItem">
                    <el-input v-model="regForm.user_age"></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio-group v-model="regForm.user_sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="民族" prop="nation" class="inlineItem">
                    <el-input v-model="regForm.nation"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="user_phone" class="inlineItem">
                    <el-input v-model="regForm.user_phone"></el-input>
                </el-form-item>

                <el-form-item label="身份证" prop="id_card" class="inlineItem">
                    <el-input v-model="regForm.id_card"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号" prop="user_bank" class="inlineItem">
                    <el-input v-model="regForm.user_bank"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="passwd" class="inlineItem">
                    <el-input v-model="regForm.passwd"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passwd" class="inlineItem">
                    <el-input v-model="regForm.passwd"></el-input>
                </el-form-item>

                <el-form-item label="住址" prop="user_add">
                    <!--<el-input v-model="regForm.user_add"></el-input>-->
                    <el-col :span="4">
                        <el-form-item prop="user_add1">
                            <el-input placeholder="省/直辖市" v-model="regForm.user_add" style="width: 100%;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="1">-</el-col>
                    <el-col :span="4">
                        <el-form-item prop="user_add2">
                            <el-input placeholder="市" v-model="regForm.user_add" style="width: 100%;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="1">-</el-col>
                    <el-col :span="4">
                        <el-form-item prop="user_add2">
                            <el-input placeholder="区" v-model="regForm.user_add" style="width: 100%;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="1">-</el-col>
                    <el-col :span="4">
                        <el-form-item prop="user_add2">
                            <el-input placeholder="街道" v-model="regForm.user_add" style="width: 100%;"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item label="户口所在地" prop="user_residence" class="inlineItem">
                    <el-input v-model="regForm.user_residence"></el-input>
                </el-form-item>
                <el-form-item label="工作单位" prop="user_company" class="inlineItem">
                    <el-input v-model="regForm.user_bank"></el-input>
                </el-form-item>

                <div>
                    <el-form-item label="是否低保" prop="is_subsistence" class="inlineItem">
                        <el-switch v-model="regForm.is_subsistence" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否残疾人" prop="is_disable" class="inlineItem">
                        <el-switch v-model="regForm.is_disable" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </div>

                <div>
                    <el-form-item label="是否应届大学生" prop="is_college" class="inlineItem">
                        <el-switch v-model="regForm.is_college" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否孤寡人员" prop="is_elder" class="inlineItem">
                        <el-switch v-model="regForm.is_elder" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </div>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('regForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "navigator",
        data(){
          return {
              loginVisible: false,
              registerVisible: false,
              identify:'',
              password:'',
              userMode: 1,

              regForm: {
                  user_name: '',
                  user_age: '',
                  user_phone: '',
                  id_card: '',
                  user_card: '',
                  user_add: '',
                  user_residence: '',
                  user_bank: '',
                  user_sex: '',
                  user_company: '',
                  is_subsistence: '',
                  is_disable: '',
                  is_college: '',
                  is_elder: '',
                  nation: '',
                  login_name: '',
                  passwd: ''
              }
          }
        },
        methods: {
            login() {
                this.loginVisible = true
            },
            register() {
                this.registerVisible = true
            },
            submitForm(formName) {
                // console.log()
                this.axios.post('api/register',this.$refs[formName].model).then((response)=>{
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.registerVisible = false
                }).catch((response)=>{
                    this.$message.error('注册失败')
                })
            },
            doLogin() {
                this.axios.post('api/login',{
                    id_card: this.identify,
                    passwd: this.password
                }).then((response)=>{
                    if(response.data.meta.success){
                        this.$message({
                            message: '登陆成功',
                            type: 'success'
                        })
                        this.loginVisible = false
                        //todo:保存登陆状态
                    }else {
                        this.$message.error('登陆失败！'+ response.data.meta.message)
                    }

                }).catch((response)=>{
                    console.log(response)
                })
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

    .input {
        margin: 30px 0 0 0
    }
    .applyLogo{
        width:120px;
        vertical-align: middle;

    }

    .form {
        margin-top: 30px;
        padding-bottom: 0;

        .inlineItem {
            display: inline-block;
            width: 380px;
        }
    }

</style>