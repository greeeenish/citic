<template>
    <ul class="info-list">
            <li>姓名：<span>{{data.user_name}}</span></li>
            <li>身份证号：<span>{{data.user_id}}</span></li>
            <li>性别：<span>{{data.user_sex}}</span></li>
            <li>民族：<span>{{data.nation}}</span></li>
            <li>联系电话：<span>{{data.user_phone}}</span></li>
            <li>户口所在地：<span>{{data.user_add}}</span></li>
            <li>居住地址：<span>{{data.user_add}}</span></li>
            <li>银行卡号：<span>{{data.id_card}}</span></li>
    </ul>
</template>

<script>
    export default {
        name: "baseInfo",
        data(){
            return {
                data:{}
            }
        },
        methods: {
            getData(){
                this.axios.get('api/getData').then((response)=>{
                    this.data=response.data;
                }).catch((response)=>{
                    console.log(response);
                })
            }
        },
        mounted(){
            this.getData()
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
</style>