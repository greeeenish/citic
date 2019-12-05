<template>
    <div class="mainPage">
        <div class="currentLocation">当前位置：首页 > 最新服务 > 分散孤儿价格临时补贴</div>
        <br>
        <div class="clearfix">
            <div class="line">
                分散孤儿价格临时补贴
            </div>
            <div class="applyBtn">
                <!-- Form -->
                <el-button type="text" @click="dialogFormVisible = true" class="tipsTitle1">在线申请入口</el-button>

                <el-dialog title="" :visible.sync="dialogFormVisible">
                    <div class="applyHead">
                        <img class="applyLogo" src="../assets/logo.jpg"/>
                        <span class="applyTileText"><span class="firstText"> | 政务一卡通 </span>| 分散孤儿价格临时补贴申请</span>
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
                        <el-button type="primary" @click="submit">提交申请</el-button>
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                    </div>
                </el-dialog>

            </div>
        </div>
        <div class="applyProcess">
            <el-tag class="tipsTitle">申请流程</el-tag>
            <div>
                <img alt="申请流程" src="../assets/ageAllowance.png" class='ageAllowanceImg'>
            </div>

        </div>
        <div class="downloadFiles">
            <el-tag class="tipsTitle">材料下载</el-tag>
            <div class="filesList">
                <a id="linkUrl1" href="" class="linkType" title="下载">分散孤儿价格临时补贴申请材料清单</a>
                <a id="linkUrl2" href="" class="linkType" title="下载">分散孤儿价格临时补贴申请表</a>
            </div>
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
                formLabelWidth: '120px'
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
            submit() {
                // console.log(this.$route.name)
                this.$axios.post('', {
                    id_card: sessionStorage.getItem('id_card'),
                    user_name: sessionStorage.getItem('user_name'),
                    type_id: this.$route.name,
                }).then((response) => {
                    if (response.data.meta.success) {
                        this.$message({
                            message: '申请成功',
                            type: 'success'
                        })
                        // this.loginVisible = false

                    } else {
                        this.$message.error('申请失败！' + response.data.meta.message)
                    }

                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }


</script>

<style lang="scss" scoped>
    .mainPage {
        margin-left: 50px;
    }

    .currentLocation {
        font-size: 12px;
    }

    .line{
        font-size:20px;
        border-left: 10px solid #E8313e;
        padding-left: 20px;
        height: 30px;
        width: auto;
        float: left;
    }

    .applyBtn{
        width: 90px;
        float: right;
        margin-right: 400px;
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
        font-size: 16px;
        width: 110%;
        height: 110%;
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
        margin: 20px;
        width: 60%;
        height: 60%
    }
</style>
