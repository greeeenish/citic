<template>
    <div class="container clearfix">
        <div class="title-container"><div class="box-title">政务<br>公告</div></div>
        <div class="table-container">
            <el-table
                    class="table"
                    :data="tableData"
                    :show-header="false"
                    :row-style="{height:'20px'}"
                    :cell-style="{padding:'4px 0',border:'0px'}">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="120px">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",
        data() {
            return {
                tableData: [{
                    date: '2019-02-12',
                    title: '2019年第一季度高龄津贴申领人名单公告'
                }, {
                    date: '2019-02-12',
                    title: '2019年第一季度高龄津贴发放情况公示'
                }, {
                    date: '2016-05-01',
                    title: '2018年全年城市最低生活保障金发放情况'
                }, {
                    date: '2018-12-28',
                    title: '2018年全年大学生创业就业奖励发放情况公示'
                }, {
                    date: '2018-12-28',
                    title: '2018年全年大学生创业就业奖励发放'
                }]
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-bottom: 20px;
    }

    .title-container {
        float: left;
        margin-left: 1%;
    }

    .box-title {
        background-color: #E8313E;
        color: #fff;
        font-size: 20px;

        text-align: center;
        display:inline-block;
        vertical-align:middle;

        width: 50px;
        height: 100px;
        padding: 50px 20px 0 20px;
    }

    .table-container {
        width: calc(99% - 92px);
        float: left;
    }

    .table {
        margin-left: 1%;
    }

    .el-table::before {
        height: 0;
    }

</style>