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
                        <span class="applyTileText"><span class="firstText"> | 政务一卡通 </span>| 城市最低生活保障金申请</span>
                    </div>
                    <el-form :model="form">

                        <el-input v-model="form.name" autocomplete="off" type='hidden'></el-input>

                        <el-form-item class="content">
                            <span class="labalTips">资料上传 :</span>

                            <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :show-file-list=true>
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>

                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="dialogFormVisible = false">提交申请</el-button>
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                    </div>
                </el-dialog>

                <!--保存-->


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
                        <el-step title="步骤1" description="在中信银行政务一卡通服务大厅注册"></el-step>
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

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {},
                formLabelWidth: '120px',
                activeIndex: '1'
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
        width: auto;
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
