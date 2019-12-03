<template>
    <div class="footer">
        <div class="index-columns">
            <div class="index-column">
                <h3>联系我们</h3>
                <ul>
                    <li><a>营业网点</a></li>
                    <li><a>信用卡中心</a></li>
                    <li><a>客户中心:95558</a></li>
                </ul>
            </div>
            <div class="index-column">
                <h3>帮助中心</h3>
                <ul>
                    <li><a>在线服务</a></li>
                    <li><a>常见问题</a></li>
                </ul>
            </div>
            <div class="index-column">
                <h3>关于中信</h3>
                <ul>
                    <li><a>投资者关系</a></li>
                    <li><a>中信新闻</a></li>
                    <li><a>人才招聘</a></li>
                </ul>
            </div>
        </div>

        <el-divider class="divider"></el-divider>

        <div class="copyright">Copyright ©2019 中信银行</div>
    </div>
</template>

<script>
    export default {
        name: "footbar"
    }
</script>

<style scoped>
    .footer {
        background-color: #67767f;
        height: 200px;
    }

    .index-columns {
        text-align: center;
    }

    .index-column {
        display: inline-block;
        vertical-align: top;
        width: 20%;
        text-align: center;
    }
    .index-column ul {
        padding: 0;
    }
    .index-column li {
        list-style-type: none;
        font-size: 14px;
        cursor: pointer;
        color: #e0e8ee;
        text-decoration: none;
    }
    .index-column h3 {
        font-weight: bold;
        font-size: 14px;
        color: #fff;
    }
    .index-column a {
        font-size: 14px;
        cursor: pointer;
        color: #e0e8ee;
        text-decoration: none;
    }

    .divider {
        background-color: #8c9daa;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    .copyright {
        text-align: center;
        color: #8c9daa;
        font-size: 12px;
        margin-bottom: 15px;
    }
</style>