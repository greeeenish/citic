<template>
    <div class="container clearfix">
        <div class="title-container"><div class="box-title">最新<br>服务</div></div>
        <div class="box-container clearfix">
            <figure class="box-card c4-izmir c4-border-center" @click="navigateTo('lowestLifeGuarantee')">
                <img src="../assets/p1.jpg" alt="Sample Image">
                <figcaption>
                    城市最低生活保障金
                </figcaption>
            </figure>

            <figure class="box-card c4-izmir c4-border-center" @click="navigateTo('disableFederation')">
                <img src="../assets/p2.jpg" alt="Sample Image">
                <figcaption>
                    残疾人保障金
                </figcaption>
            </figure>

            <figure class="box-card c4-izmir c4-border-center" @click="navigateTo('employmentIncentive')">
                <img src="../assets/p3.jpg" alt="Sample Image">
                <figcaption>
                    大学生创业就业奖励
                </figcaption>
            </figure>

            <figure class="box-card c4-izmir c4-border-center" @click="navigateTo('ageAllowance')">
                <img src="../assets/p4.jpg" alt="Sample Image">
                <figcaption>
                    高龄津贴
                </figcaption>
            </figure>

            <figure class="box-card c4-izmir c4-border-center" @click="navigateTo('orphanAllowance')">
                <img src="../assets/p5.jpg" alt="Sample Image">
                <figcaption>
                    分散孤儿价格临时补贴
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: "services",
        methods: {
            navigateTo(path) {
                this.$router.push('/' + path)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/izmir.min.css';
    .c4-izmir{
        --primary-color: #E8313E
    }
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