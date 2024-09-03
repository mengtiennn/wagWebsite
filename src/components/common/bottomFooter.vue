<script setup>
import { ref, onMounted, watch, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routerData = reactive([
  { linkName: '关于ＷＡＧ', link: '/about' },
  { linkName: '服务项目', link: '/service' },
  { linkName: '成功案例', link: '/example' },
  { linkName: '营销博客', link: '/blog' },
  { linkName: '招聘资讯', link: '/info' },
  { linkName: '联系我们', link: '/contact' }
])
const info = reactive([
  '美国电话 ❘ +1 929-545-4470', '邮箱 ❘ contact@wag.marketing', '微信 ❘ wagmarketing', '小红书 | WAG品牌营销'
])
const emailContent = ref('')
</script>
<template>
  <div
    class="w-full bg-black tablet:bg-[#e7750a] mobile:bg-[#e7750a] desktop:pl-[106px] desktop:pr-[170px] flex justify-evenly laptop:justify-center tablet:justify-center laptop:pt-[10px] tablet:pt-[10px] laptop:pl-[10px] laptop:pr-[10px] tablet:pl-[10px] tablet:pr-[10px]">
    <div class="pt-[69px] pb-[38px] flex justify-center w-[40%] desktop:gap-[104px] mobile:w-full">
      <div class="flex flex-col justify-start laptop:items-center tablet:items-center">
        <img src="@/assets/img/logo2.svg" alt="logo" class="w-[126px] desktop:mb-[15px] tablet:hidden mobile:hidden">
        <img src="@/assets/mobile-footer.png" alt="logo" class="w-[181px] desktop:hidden laptop:hidden">
        <span class="mt-[7px] text-white desktop:hidden tablet:hidden mobile:hidden">WAG流量專家始于纽约，服务于全球各地</span>
        <span
          class="text-white laptop:mb-[22px] tablet:mb-[22px] desktop:hidden tablet:hidden mobile:hidden">超过500+华商!</span>
        <span v-for="(data, idx) in info" :key="idx + 'data'"
          class="text-white leading-loose my-1 mobile:text-black tablet:text-black mobile:font-[400] mobile:text-[14px]">{{
          data }}</span>
        <div class="flex gap-[9px] mt-[26px]">
          <img src="@/assets/icon/fb.svg" alt="fblogo" class="tablet:hidden mobile:hidden">
          <img src="@/assets/icon/ig.svg" alt="iglogo" class="tablet:hidden mobile:hidden">
          <img src="@/assets/mobile-fb.svg" alt="fblogo" class="desktop:hidden laptop:hidden">
          <img src="@/assets/mobile-ig.svg" alt="iglogo" class="desktop:hidden laptop:hidden">
        </div>
        <div
          class="text-text-gray mt-[20px] text-[13px] desktop:hidden text-center mobile:text-[#D6D6D6] mobile:font-[300]">
          @2023 WAG
          MARKETING INC. ALL RIGHTS
          RESERVED.</div>
      </div>
    </div>
    <div
      class="pt-[69px] pb-[38px] flex flex-col justify-center items-center w-[20%] border-x-[1px] border-white border-solid text-white gap-[24px] laptop:hidden tablet:hidden">
      <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
    </div>
    <div
      class="pt-[69px] pb-[38px] flex flex-col w-[40%] pl-[97px] justify-center text-white laptop:hidden tablet:hidden">
      <span class="font-bold text-[24px]">WAG流量专家</span>
      <span class="mt-[47px] text-[14px]">WAG流量專家始于纽约，</span>
      <span class="mt-[20px] text-[14px]">服务于全球各地超过500+商家</span>
      <div class="flex flex-col mt-[33px]">
        <span class="text-[15px] font-[600]">抢先获取独家优惠与最新资讯!</span>
        <div class="flex gap-[7px] mt-[12px]">
          <el-input v-model="emailContent" placeholder="Enter your email here*" clearable size="large" />
          <div
            class="px-[62px] py-[10px] bg-[#ffffff] text-black flex items-center justify-center h-[37px] text-[12px] w-[180px]">
            subscribe</div>
        </div>
      </div>
      <div class="text-text-gray mt-[47px] text-[13px]">@2024 WAG MARKETING INC. ALL RIGHTS RESERVED.</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  box-shadow: none;
  border: 2px solid white;
  background-color: transparent;
  height: 37px;
  font-size: 12px;
}
:deep(.el-input) {
  width: 220px;
  height: 37px;
}
</style>
