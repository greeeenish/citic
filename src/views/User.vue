<template>
    <div class="user">
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="baseinfo">
                <baseInfo></baseInfo>
            </el-tab-pane>

            <el-tab-pane label="历史申请" name="history">
                <el-table
                        :data="historyData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="apply_time"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="add2"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="add1"
                            label="身份证号">
                    </el-table-column>
                    <el-table-column
                            prop="type_name"
                            label="申请项目">
                    </el-table-column>
                    <el-table-column
                            prop="add4"
                            label="申请金额">
                    </el-table-column>
                    <el-table-column
                            prop="apply_status"
                            label="申请状态">
                    </el-table-column>
                </el-table>
            </el-tab-pane>

            <el-tab-pane label="正在办理" name="doing">
                <el-table
                        :data="processData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="apply_time"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="add2"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="add1"
                            label="身份证号">
                    </el-table-column>
                    <el-table-column
                            prop="type_name"
                            label="申请项目">
                    </el-table-column>
                    <el-table-column
                            prop="add4"
                            label="申请金额">
                    </el-table-column>
                    <el-table-column
                            prop="apply_status"
                            label="申请状态">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    v-if="deleteVisible"
                                    @click.native.prevent="deleteRow(scope.$index, processData)"
                                    type="text"
                                    size="small">
                                撤销
                            </el-button>
                            <el-button
                                    v-if="approvalVisible"
                                    @click="showApprovalFormVisible(scope.$index, processData)"
                                    type="text"
                                    size="small">
                                审批
                            </el-button>

                            <el-button
                                    v-if="appropriationVisible"
                                    @click.native.prevent="appropriation(scope.$index, processData)"
                                    type="text"
                                    size="small">
                                拨款
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="审批" :visible.sync="approvalFormVisible">
            <el-form :model="approvalForm">
                <el-form-item label="">
                    <el-radio-group v-model="approvalForm.result">
                        <el-radio label="1" border>通过</el-radio>
                        <el-radio label="0" border>不通过</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="approvalFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="approval('approvalForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import baseInfo from "@/components/BaseInfo.vue";

    export default {
        data() {
            return {
                activeName: 'baseinfo',
                historyData: [],
                processData: [],
                userVisible: false,
                deleteVisible: false,
                appropriationVisible: false,
                approvalVisible: false,
                approvalFormVisible: false,
                approvalForm: {
                    result: "",
                }

            }
        },
        components: {baseInfo},
        name: "user",
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            showApprovalFormVisible(index, rows) {
                this.approvalFormVisible = true;
            },
            getHistoryData() {
                this.axios.post('api/applyHistory',{
                    id_card: sessionStorage.getItem('id_card'),
                    user_name: sessionStorage.getItem('user_name'),
                }).then((res) => {
                    console.log(res)

                    this.historyData = res.data.data;
                    for (let item in res.data.data){
                        switch (res.data.data[item].type_id){
                            case 1:
                                this.historyData[item].type_name = '城市最低生活保障金'
                                break
                            case 2:
                                this.historyData[item].type_name = '残疾人保障金'
                                break
                            case 3:
                                this.historyData[item].type_name = '大学生创业吸纳就业奖励'
                                break
                            case 4:
                                this.historyData[item].type_name = '高龄津贴'
                                break
                            case 5:
                                this.historyData[item].type_name = '分散孤儿价格临时补贴'
                                break
                        }
                    }

                }).catch(function (error) {
                    console.log(error);
                })
            },
            getProcessData() {
                this.axios.post('api/businessApplying',{
                    id_card: sessionStorage.getItem('id_card'),
                    user_name: sessionStorage.getItem('user_name'),
                }).then((res) => {
                    if (res.data.data.user_type == 1) { //用户
                        this.deleteVisible = true,
                        this.appropriationVisible = false,
                        this.approvalVisible = false
                        // 请求

                        this.axios.post('api/showData',{
                            id_card: sessionStorage.getItem('id_card'),
                            user_name: sessionStorage.getItem('user_name'),
                        }).then((res) => {
                            this.processData = res.data.data;
                            for (let item in res.data.data){
                                switch (res.data.data[item].type_id){
                                    case 1:
                                        this.processData[item].type_name = '城市最低生活保障金'
                                        break
                                    case 2:
                                        this.processData[item].type_name = '残疾人保障金'
                                        break
                                    case 3:
                                        this.processData[item].type_name = '大学生创业吸纳就业奖励'
                                        break
                                    case 4:
                                        this.processData[item].type_name = '高龄津贴'
                                        break
                                    case 5:
                                        this.processData[item].type_name = '分散孤儿价格临时补贴'
                                        break
                                }
                            }
                        })

                    } else if (res.data.data.user_type == 2) { //政务
                        this.deleteVisible = false,
                            this.appropriationVisible = false,
                            this.approvalVisible = true
                    } else {      //银行
                        this.deleteVisible = false,
                            this.appropriationVisible = true,
                            this.approvalVisible = false
                    }

                }).catch(function (error) {
                    console.log(error);
                })
            },
            approval(formName) { //审批
                this.axios.post('', this.$refs[formName].model).then((response) => {
                    this.$message({
                        message: '审批成功',
                        type: 'success'
                    });
                    this.approvalFormVisible = false
                }).catch((response) => {
                    this.$message.error('审批失败')
                })
            },
            appropriation() {   //拨款
                this.axios.post('').then((res) => {
                    this.appropriationData = res.appropriationsData;
                    if (res.appropriationData.type_id == 1) { //成功

                    } else if (res.appropriationData.user_type == 0) { //失败

                    }
                }).catch(function (error) {
                    console.log(error);
                })

            },
            getData() {
                if (!sessionStorage.getItem('isLogin')) {
                    this.activeName = ''
                    this.$message({
                        message: '请先登陆',
                        type: 'warning'
                    })
                } else {
                    this.userVisible = true
                    this.getHistoryData()
                    this.getProcessData()
                }
            }
        },
        mounted() {
            this.getData()
        }
    }


</script>

<style>
    .user {
        min-height: calc(100% - 290px);
        width: 90%;
        text-align: center;
        margin: auto;
    }
</style>
