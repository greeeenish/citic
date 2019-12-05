<template>
    <!--<ul class="info-list">-->
            <!--<li>姓名：<span>{{data.user_name}}</span></li>-->
            <!--<li>身份证号：<span>{{data.user_id}}</span></li>-->
            <!--<li>性别：<span>{{data.user_sex}}</span></li>-->
            <!--<li>民族：<span>{{data.nation}}</span></li>-->
            <!--<li>联系电话：<span>{{data.user_phone}}</span></li>-->
            <!--<li>户口所在地：<span>{{data.user_add}}</span></li>-->
            <!--<li>居住地址：<span>{{data.user_add}}</span></li>-->
            <!--<li>银行卡号：<span>{{data.id_card}}</span></li>-->
    <!--</ul>-->
    <div style="width: 60%">
        <el-form :model="userinfo" ref="userinfo" label-width="150px" class="form">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名:" prop="user_name" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_name">{{userinfo.user_name}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_name">{{userinfo.user_name}}</el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年龄:" prop="user_age" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_age">{{userinfo.user_age}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_age">{{userinfo.user_age}}</el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="性别" class="inlineItem">
                        <el-radio-group v-model="userinfo.user_sex">
                            <el-radio label="1">男</el-radio>
                            <el-radio label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="民族:" prop="nation" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.nation">{{userinfo.nation}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.nation">{{userinfo.nation}}</el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="电话:" prop="user_phone" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_phone">{{userinfo.user_phone}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_phone">{{userinfo.user_phone}}</el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="密码:" prop="passwd" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.passwd">{{userinfo.passwd}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.passwd">{{userinfo.passwd}}</el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="身份证:" prop="id_card" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.id_card">{{userinfo.id_card}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.id_card">{{userinfo.id_card}}</el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行卡号:" prop="user_bank" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_bank">{{userinfo.user_bank}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_bank">{{userinfo.user_bank}}</el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-form-item label="住址:" prop="user_add">
                    <div v-if="!isEdit">{{userinfo.user_add}}</div>
                    <el-input v-if="isEdit" v-model="userinfo.user_add"></el-input>
                </el-form-item>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="户口所在地:" prop="user_residence" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_residence">{{userinfo.user_residence}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_residence">{{userinfo.user_residence}}</el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="工作单位:" prop="user_company" class="inlineItem">
                        <div v-if="!isEdit" v-model="userinfo.user_bank">{{userinfo.user_bank}}</div>
                        <el-input v-if="isEdit" v-model="userinfo.user_bank">{{userinfo.user_bank}}</el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>

            </el-row>

            <el-row>
                <el-col :span="6">
                    <el-form-item label="是否低保:" prop="is_subsistence" class="inlineItem">
                        <el-switch v-model="userinfo.is_subsistence" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="6"></el-col>-->
                <el-col :span="6">
                    <el-form-item label="是否残疾人:" prop="is_disable" class="inlineItem">
                        <el-switch v-model="userinfo.is_disable" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="6"></el-col>-->
                <el-col :span="6">
                    <el-form-item label="是否应届大学生:" prop="is_college" class="inlineItem">
                        <el-switch v-model="userinfo.is_college" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="6"></el-col>-->
                <el-col :span="6">
                    <el-form-item label="是否孤寡人员:" prop="is_elder" class="inlineItem">
                        <el-switch v-model="userinfo.is_elder" active-value="1" inactive-value="0"></el-switch>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="6"></el-col>-->
            </el-row>

            <span>
                <el-button @click="isEdit = true">编 辑</el-button>
                <el-button type="primary" @click="submitForm('regForm')">保 存</el-button>
            </span>

        </el-form>
    </div>
</template>

<script>
    import ElInput from "element-ui/packages/input/src/input";

    export default {
        components: {ElInput},
        name: "baseInfo",
        data(){
            return {
                userinfo:{
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
                },
                isEdit: false
            }
        },
        methods: {
            getData(){
                this.axios.get('api/getPersonInfo/'+sessionStorage.getItem('user_id')).then((response)=>{
                    this.userinfo=response.data;
                    console.log(response)
                }).catch((response)=>{
                    console.log(response);
                })
            }
        },
        mounted(){
            this.isEdit = false
            if(sessionStorage.getItem('isLogin')){
                this.getData()
            }

        }

    }
</script>

<style scoped>
    .info-list {
        clear: both;
    }

    .info-list li {
        line-height: 37px;
        padding-left: 10px;
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
    }

    .info-list > li > span {
        display: inline-block;
        padding-left: 5px;
    }

    .form {
        /*display: flex;*/
    }
    .inlineItem {
        /*display: inline-block;*/
    }
</style>