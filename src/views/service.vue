<template>
  <div class="wrapper">
    <div class="flex bg-[#E7750C] items-center justify-center py-[58px] gap-[16px]">
      <div class="flex flex-col w-[600px] gap-[20px]">
        <img src="../assets/titles.png" alt="" class="w-[180px] object-contain">
        <span
          class="font-bold">WAG流量专家致力于提供高效的跨渠道在线流量转化服务。我们精通数字传媒工具，能够帮助您的品牌在网络世界中脱颖而出。每个项目配备专业团队，提供综合策划、为您量身定制最佳解决方案，全面推广您的品牌，确保您的品牌在竞争激烈的市场中取得卓越成果。</span>
        <div class="grid grid-cols-3 gap-[20px]">
          <div v-for="text in bannerList" class="rounded-[40px] flex  items-center gap-[8px]">
            <img src="../assets/ring.svg" alt="">
            <span class="whitespace-nowrap">{{ text }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-[500px] min-m-[500px] justify-center items-center">
        <img v-for="p in 6" :src="getAssetsImg(`${p}.png`)" alt="" class="object-contain">
      </div>
    </div>
    <div class="content bg-[#EFEDE4]">
      <div v-for="(item, index) in dataList" :key="index" class="contentItem">
        <img :src="getAssetsImgService(item.img)" alt="" v-if="index % 2 !== 0" class="object-contain">
        <div class="textItem">
          <div class="textTitle">{{ item.title }}</div>
          <div class="text">{{ item.context }}</div>
          <button class="button bg-[#000000]">了解更多</button>
        </div>
        <img :src="getAssetsImgService(item.img)" alt="" v-if="index % 2 === 0" class="object-contain">
      </div>
    </div>
    <div class="form">
      <img src="../assets/img/service/img.png" alt="" class="formImg">
      <el-form :model="tableForm" ref="ruleFormRef" :rules="rules" require-asterisk-position="right">
        <div class="title">想提高您的网路声量吗？</div>
        <div class="text">
          <span class="text-center">随着越来越多中小型企业希望融入网络营销，很多人困惑于如何着手。除了各种社交媒体平台，拥有一个高效的网站是您网络营销的核心资产。</span>
          <hr>
          <span class="text-center">让我们为您提供一次免费基础咨询，为您指明下一步的方向。我们的专业团队将为您量身定制最适合的网络营销策略，助您实现业务的持续增长。</span>
        </div>
        <el-form-item prop="name">
          <el-input clearable v-model="tableForm.name" size="default" placeholder="姓名" />
        </el-form-item>
        <div class="chooseList">
          <el-form-item prop="phone">
            <el-input clearable v-model="tableForm.phone" size="default" placeholder="联络电话" />
          </el-form-item>
          <el-form-item prop="email">
            <el-input clearable v-model="tableForm.email" size="default" placeholder="电子邮件" />
          </el-form-item>
        </div>
        <el-form-item>
          <div>感兴趣产品</div>
          <el-checkbox-group prop="product" v-model="tableForm.product" size="large">
            <el-checkbox v-for="(item, index) in checkboxList" :key="index" :label="item" />
          </el-checkbox-group>
        </el-form-item>
        <div :class="{'disabeld': disabled}" class="submitBtn" @click="submitForm(ruleFormRef)">提交</div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
// import emailjs from '@emailjs/browser'
// import { ElMessage } from 'element-plus'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import { getAssetsFile } from '@/utils/commonUse'
  // import emailjs from 'emailjs-com';
  // import { ElMessage } from 'element-plus'
  import { getAssetsImgService, getAssetsImg } from '@/utils/commonUse'

  const ruleFormRef = ref()
  const dataList = reactive([
    { title: '社群平台运营管理', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: 'img1.png'},
    { title: '广告投放', context: '广告投放团队拥有丰富的经验和技能，能够为您量身定制广告策略。大量后台数据支持，精准分析用户需求和市场趋势，确保广告投放效果最大化。针对跨海所需平台，我们有针对性地优化广告内容和投放策略，提升海外市场的覆盖和影响力。每月提供详尽的数据分析报告，帮助您全面了解广告效果，并进行及时调整和优化。。', img: 'img2.png'},
    { title: '网页设计开发', context: '网站搭建是打造您品牌线上形象的第一步，团队具备丰富经验，能为您量身定制现代化、易用性强的网站。同时，注重SEO（搜索引擎优化），通过优化网站结构、内容和关键词，提升在搜索引擎中的排名，让更多潜在客户找到您的网站，实现品牌曝光和业务增长。', img: 'img3.png'},
    { title: '电子邮件 & 短信营销', context: '电子邮件营销通过低成本、精准定向、内容定制和数据分析优化，帮助您建立稳固的客户关系并提升销售效果。而短信营销则具有高开放率、实时性强、互动性好的特点，能够快速触达用户并促成交易。结合两者，您可以全面提升营销效果，实现与客户更紧密的互动与合作。', img: 'img4.png'},
    { title: 'PR公关媒体服务', context: '服务包括媒体关系管理、活动策划执行、危机公关处理等方面，为您量身打造有效的传播策略和解决方案。无论是推出新产品、宣传活动、品牌建设还是危机应对，我们都能为您提供专业支持，助您取得更大的成功。', img: 'img5.png'},
    { title: '活动策划与地推', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: 'img6.png'},
  // {title: '小红书 & TIKTOK运营', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img7.png'},
  ])
  const checkboxList = ref([
    '在地商家推广计划', '电子邮件 & 短信营销', '社群平台运营', '付费广告投放', '网站设计开发维护', '小红书＆Tiktok运营', '媒体公关服务'
  ])
  const tableForm = reactive({
    name: '',
    phone: '',
    email: '',
    product: []
  })
  const rules = reactive<FormRules<typeof tableForm>>({
    name: [{ required: true, message: '請輸入姓名', trigger: 'blur' }],
    phone: [{ required: true, message: '請輸入联络电话', trigger: 'blur' }],
    email: [{ required: true, message: '請輸入电子邮件', trigger: 'blur' }],
    product: [{ required: true, message: '請選擇產品', trigger: 'blur' }],
  })
  const successMes = () => {
    ElMessage({
    message: '已成功送出！',
    type: 'success',
  })
  }
  const bannerList = ref([
    '社群运营管理', '广告投放', 'PR公关媒体服务', '网页设计开发', '电子邮件 & 短信营销', '活动策划与地推'
  ])
  const disabled = ref(false)
  const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if(disabled.value) return
    if (valid) {
      disabled.value = true
      const mailData = {
        userName: tableForm.name,
        userPhone: tableForm.phone,
        userEmail: tableForm.email,
        userProject: tableForm.product
      }
      // chen
      emailjs.send('service_qrg7ckr', 'template_fa6yf29', mailData, 'sXJoNaqcJEghZSWsk').then((res) => {
        tableForm.name = ''
        tableForm.phone = ''
        tableForm.email = ''
        tableForm.product = []
        successMes()
        disabled.value = false
      })
      // kuo
      // emailjs.send('service_vdw8tir', 'template_vo4gb5s', mailData, '4mSPjBe9SlHmH21_8').then((res) => {
      //   // successMes()
      // })
      console.log('tableForm', tableForm)
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>  

<style scoped lang="scss">
.wrapper{
  min-height: calc(100vh - 390px);
  padding-top: 85px;
  .bannerBox {
    border: 1px solid black;
    padding: 5px 28px;
  }
  .banner{
    height: 324px;
    background-color: #E7750C;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      width: 60%;
      text-align: center;
    }
  }
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
      margin-top: 50px;
      font-weight: bold;
      font-size: 24px;
    }
    .contentItem{
      display: flex;
      gap: 50px;
      width: 100%;
      // margin: 70px 0;
      padding: 87px 287px;
      border-bottom: 1px solid black;
      .textItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        .textTitle{
          font-size: 20px;
          font-weight: bold;
          &::after{
            margin-top: 20px;
            width: 50%;
            height: 1px;
            content: '';
            background-color: #333;
            display: block;
          }
        }
        .text{
          line-height: 40px;
        }
        .button{
          width: 100px;
          border-radius: 20px;
          color: #fff;
          padding: 5px 10px;
        }
      }
    }
  }
  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    background-color: black;
    position: relative;
    padding-left: 450px;
    border-bottom: 1px solid white;
    img{
      left: 10%;
      width: 35%;
      height: 450px;
      justify-self: flex-end;
      position: absolute;
      object-fit: contain;
    }
    :deep(.el-form){
      width: 70%;
      height: 100%;
      background-color: #E7750C;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title{
        font-size: 20px;
        font-weight: bold;
      }
      .text{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
      }
      .el-form-item{
        width: 80%;
        border-radius: 100px;
        display: flex;
        --el-border-radius-base: 100px;
        --el-fill-color-blank: #efeeff;
        --el-border-color: #888888;
        --el-color-primary: #B15601;
        .el-checkbox__label {
          color: #333;
        }
        .el-checkbox__inner{
          background-color: transparent;
          border-color: #333;
        }
      }
      .chooseList{
        display: flex;
        gap: 10px;
        width: 80%;
      }
      .submitBtn{
        background-color: white;
        color: #333333;
        padding: 5px 25px;
        border-radius: 20px;
        cursor: pointer;
        &.disabeld{
          background-color: grey;
          color: #fff;
        }
      }
    }
  }
}
:deep(.el-form-item__content) {
  .el-input {
    .el-input__wrapper {
      box-shadow: none;
      border: 1px solid black;
      background-color: transparent;
      color: #D3D3D3
    }
  }
}
</style>