<template>
    <div class="mainPage">
    <div class="left">
    　<p><b>产品简介：</b></p> 
　　<p>中信普惠快贷是经我行审批通过，借款人可通过互联网在线受理、在线签约，并即时发放可通过专属银行卡刷卡或提现支用的个人信用贷款。</p> 
　<br>
<p><b>产品特色：</b> </p>
    <p> 随用随借：实时申请、实时审批、实时放款，从申请到贷款到账，全流程24小时内完成。 
　　<p>申请手续简便：无需往返银行网点、无需提供纸质资料，在线填写基本信息并回答是非题即可完成申请。 </p>
    <p>短信通知：“及时语”短信温馨提醒，避免因工作繁忙遗忘还款而造成罚息损失和信用损害。</p>
　  <p> 无手续费：随借随用随还，全程不收任何手续费。 </p>
    <p>**利息超低：贷款利息低。</p>
<br>
<p><b>申请贷款条件：</b></p>
<p>年满18周岁（含）具有完全民事行为能力，且贷款到期日不超过70周岁（含）的具有中华人民共和国国籍的自然人。</p>
<p>港澳台居民应在大陆连续居住满1年，且家庭主要生活在大陆。 </p>
<p>有合法、稳定经济收入，整体信用状况和资产实力较好，有按期偿还贷款本息的能力。 </p>
<p>是我行便民普惠服务平台的用户，并获得我行审批并生效的个人消费授信额度。</p> 
<p>我行规定的其他条件。 </p>　 
　<br>　
<p><b>须提供资料**：</b></p>
<p>有效身份证明和住址证明、婚姻状况证明、个人收入证明。</p> 
<p>《个人消贷易贷款申请/终止/变更申请审批表》（线上提供）。</p> 
<p>《个人消贷易额度及支用借款合同》（线上提供）。 </p>
<p>银行要求提供的其他材料。 </p>
　　<br> 
　　<p><b>贷款期限：</b> </p>
　　<p> 最长不超过1年。 </p>
　　 <br>
　　<p><b>申办流程：</b> </p>
　　 <p>提出申请——签署授权申明——银行审批——贷款发放——客户还款 </p>
　　 <br>
　　<p>友情提示： </p>
　　<p> 本页面资料仅供参考，详情请垂询当地中信银行或拨打95558。 </p>
    </div>

    <div class="right">
    <el-button type="text" @click="dialogVisible = true" class='applyQuick'>点击申请</el-button>

    <el-dialog
  title=""
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>此功能暂未开通，敬请期待</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import ElForm from "element-ui/packages/form/src/form";

  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };


</script>

<style lang="scss" scoped>
.applyQuick{

    background-color:red;
    color:white;
    font-size:20px;
    font-weight:600;
    width:110px;
        margin-left:600px;
        margin-bottom:20px


}
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
