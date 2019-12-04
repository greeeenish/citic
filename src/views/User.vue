<template>
    <div class="user">
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="baseinfo">
                <baseInfo></baseInfo>
            </el-tab-pane>

            <el-tab-pane label="历史申请" name="history">
                <el-table
                        :data="historyData"
                        height="250"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="apply_time"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="user_name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="id_card"
                            label="身份证号">
                    </el-table-column>
                    <el-table-column
                            prop="type_name"
                            label="申请项目">
                    </el-table-column>
                    <el-table-column
                            prop="apply_number"
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
                        height="250"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="apply_time"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="user_name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="id_card"
                            label="身份证号">
                    </el-table-column>
                    <el-table-column
                            prop="type_name"
                            label="申请项目">
                    </el-table-column>
                    <el-table-column
                            prop="apply_number"
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
                                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                                    type="text"
                                    size="small">
                                撤销
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import baseInfo from "@/components/BaseInfo.vue";

    export default {
        data() {
            return {
                activeName: 'baseinfo',
                historyData: [],
                processData: []
            }
        },
        components: {baseInfo},
        name: "user",
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            getHistoryData() {
                this.$axios.post('').then((res) => {
                    this.historyData = res.historyData;
                }).catch(function (error) {
                    console.log(error);
                })
            },
            getProcessData() {
                this.$axios.post('').then((res) => {
                    this.processData = res.processData;
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }


</script>

<style>
    .user {
        height: calc(100% - 290px);
        width: 90%;
        text-align: center;
        margin: auto;
    }
</style>
