<template>
    <div class="mainPage">
        <!--<div class="currentLocation">当前位置：首页 > 最新服务 > 城市最低生活保障金</div>-->
        <!--<br>-->
        <div class="clearfix">
            <div class="line">城市最低生活保障金</div>
            <div class="applyBtn">
                <!-- Form -->
                <el-button type="text" @click="dialogFormVisible = true" class="tipsTitle1">在线申请入口</el-button>

                <!--提交申请-->
                <el-dialog title="" :visible.sync="dialogFormVisible">
                    <div class="applyHead">
                        <img class="applyLogo" src="../assets/logo.jpg"/>
                        <span class="applyTileText"><span class="firstText"> | 便民普惠服务平台 </span>| 城市最低生活保障金申请</span>
                    </div>
                    <el-form :model="form">

                        <el-input v-model="form.name" autocomplete="off" type='hidden'></el-input>

                        <el-form-item class="content">
                            <span class="labalTips">资料上传 :</span>

                            <el-upload
                                    class="upload-demo"
                                    action=""
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :show-file-list=true>
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>

                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="submit">提交申请</el-button>
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                    </div>
                </el-dialog>

                <!--保存-->
                <el-dialog width="60%" style="margin-right: 50px" title="" :visible.sync="saveVisible">
                    <div class="applyHead">
                        <img class="applyLogo" src="../assets/logo.jpg"/>
                        <span class="applyTileText"><span class="firstText"> | 便民普惠服务平台 </span>| 城市最低生活保障金申请</span>
                    </div>

                    <!--申请信息-->
                    <el-form :model="applyinfo" ref="applyinfo" label-width="150px" class="form">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="申请项目:" prop="type_name" class="inlineItem">
                                    <div v-model="applyinfo.type_name">{{applyinfo.type_name}}</div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="申请金额:" prop="apply_number" class="inlineItem">
                                    <div v-model="applyinfo.apply_number">{{applyinfo.apply_number}}</div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>

                    <!--个人信息-->
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
                    </el-form>

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="isEdit = true">编 辑</el-button>
                        <el-button type="primary" @click="submitForm('userinfo')">保 存</el-button>
                    </div>
                </el-dialog>

            </div>
        </div>

        <div style="margin-top: 30px">
            <el-col :span="4">
                <el-menu
                        default-active="1"
                        @select="handleSelect"
                        class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">申请流程</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-download"></i>
                        <span slot="title">材料下载</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="20">
                <div class="applyProcess" v-if="this.activeIndex==1">
                    <el-steps :active="5" align-center>
                        <el-step title="步骤1" description="在中信银行便民普惠服务平台服务大厅注册"></el-step>
                        <el-step title="步骤2" description="准备申请文件"></el-step>
                        <el-step title="步骤3" description="线上申请"></el-step>
                        <el-step title="步骤4" description="等待机构审核结果(通过/不通过)"></el-step>
                        <el-step title="步骤5" description="等待银行放款/重新申请"></el-step>
                    </el-steps>
                    <div>
                        <img alt="申请流程" src="../assets/ageAllowance.png" class='ageAllowanceImg'>
                    </div>

                </div>
                <div class="downloadFiles" v-if="this.activeIndex==2">
                    <div class="filesList">
                        <a id="linkUrl1" href="" class="linkType" title="下载">城市最低生活保障金申请材料清单</a>
                        <a id="linkUrl2" href="" class="linkType" title="下载">城市最低生活保障金申请表</a>
                    </div>
                </div>
            </el-col>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    import ElForm from "element-ui/packages/form/src/form";

    export default {
        name: 'home',
        components: {ElForm},
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                saveVisible: false,
                form: {},
                formLabelWidth: '120px',
                activeIndex: '1',
                isEdit: false,
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
                applyinfo: {
                    apply_number:'',
                    type_name: '',
                }
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleSelect(key, path){
                this.activeIndex = key
            },
            submit() {
                this.axios.post('api/checkCollege', {
                    id_card: sessionStorage.getItem('id_card'),
                    user_name: sessionStorage.getItem('user_name'),
                    type_id: this.$route.name,
                }).then((response) => {
                    if (response.data.meta.success) {
                        // this.$message({
                        //     message: '申请成功',
                        //     type: 'success'
                        // })
                        console.log(response)
                        this.applyinfo = response.data.data.applyInfo
                        this.userinfo = response.data.data.userInfo
                        this.dialogFormVisible = false
                        this.saveVisible = true

                    } else {
                        this.$message.error('申请失败！' + response.data.meta.message)
                    }

                }).catch(function (error) {
                    console.log(error);
                })
            },
            submitForm(formName) {
                let obj = {
                    // id_card: sessionStorage.getItem('id_card'),
                    // user_name: sessionStorage.getItem('user_name'),
                    // type_id: this.$route.name,
                    // user: this.$refs[userinfo].model,
                    // apply:{
                        add1: this.$refs[userinfo].model.id_card,    //id_card
                        add2: this.$refs[userinfo].model.user_name, //username
                        type_id : this.$route.name,
                        add4: this.$refs[applyinfo].model.apply_number,
                        add5: this.$refs[userinfo].model.user_bank,

                    // }
                }
                this.axios.post('api/applySave', obj).then((response) => {
                    if(response.data.meta.success){
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                        this.saveVisible = false
                    } else {
                        this.$message.error('保存失败！' + response.data.meta.message)
                    }
                }).catch((response) => {
                    this.$message.error('保存失败')
                })
            }
        }
    }


</script>

<style lang="scss" scoped>
    .mainPage {
        margin-left: 50px;
        min-height: calc(100% - 290px);
    }

    .currentLocation {
        font-size: 12px;
    }

    .line {
        font-size: 20px;
        border-left: 10px solid #E8313e;
        padding-left: 20px;
        height: 30px;
        width: 220px;
        float: left;
    }

    .applyBtn {
        width: 90px;
        float: left;
        margin-left: 60px;
    }

    .tipsTitle {

        /*color:white;*/
        /*background-color:#E8313e;*/
        font-size: 16px;
        color: #E8313e;
        background-color: white;
        font-weight: 600;
    }

    .tipsTitle1 {
        color: white;
        background-color: #E8313e;
        padding: 8px;
        /*font-size: 16px;*/
        /*width: 110%;*/
        /*height: 110%;*/
    }

    .applyLogo {
        width: 20%;
        height: 20%;
        vertical-align: middle;

    }

    .applyTileText {
        margin-top: -10px;
        font-size: 15px;
    }

    .firstText {
        font-size: 18px;
        font-weight: 600;
    }

    .labalTips {

        font-size: 15px;
        font-weight: 700;
    }

    .content {
        margin-top: 10px;
        margin-left: 20px;
    }

    /*.upload-demo{
        display:inline-block;
        display:-webkit-inline-box;
        margin-left:20px
    }*/
    .linkType {
        display: block

    }

    .filesList {
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .downloadFiles {
        margin-top: 20px
    }

    .ageAllowanceImg {
        margin: 40px 0 0 80px;
        width: 60%;
        height: 60%
    }
    .applyProcess {
        margin-left: 10px;
    }
    .downloadFiles {
        margin-left: 40px;
    }

</style>
