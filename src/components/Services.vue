<template>
    <div class="container clearfix">
        <div class="title-container"><div class="box-title">最新<br>服务</div></div>
        <div class="box-container clearfix">
            <el-card class="box-card">
                <div class="text item">
                    城市最低生活保障金
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="text item">
                    残疾人保障金
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="text item">
                    大学生创业吸纳就业奖励
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="text item">
                    高龄津贴
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="text item">
                    分散孤儿价格临时补贴
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "services"
    }
</script>

<style scoped lang="scss">
    .container {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .title-container {
        float: left;
        margin-left: 1%;
    }
    .box-container {
        width: calc(99% - 92px);
        float: left;
    }

    .box-title {
        background-color: #E8313E;
        color: #fff;
        font-size: 20px;

        text-align: center;
        display:inline-block;
        vertical-align:middle;

        width: 50px;
        height: 90px;
        padding: 30px 20px 0 20px;
    }
    .box-card {
        width: calc(18% - 2px);
        height: 100px;
        float: left;
        margin: 1%;
        cursor: pointer;

        .text {
            text-align: center;
            line-height: 60px;
        }
    }
</style>