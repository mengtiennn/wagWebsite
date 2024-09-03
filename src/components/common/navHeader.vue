<script setup>
import { ref, onMounted, watch, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routerData = reactive([
  { linkName: '关于ＷＡＧ', link: '/' },
  { linkName: '服务项目', link: '/service' },
  { linkName: '成功案例', link: '/example' },
  { linkName: '营销博客', link: '/blog' },
  { linkName: '招聘资讯', link: '/info' },
  { linkName: '联系我们', link: '/contact' }
])
const showHamburger = ref(false)
</script>
<template>
  <div class="flex bg-black pt-[22px] pl-[90px] pr-[90px] pb-[22px] justify-center items-center laptop:justify-center tablet:justify-center laptop:pt-[10px] laptop:pb-[10px] tablet:pt-[10px] tablet:pb-[10px] fixed top-0 left-0 z-50 w-full">
    <div class="flex justify-between items-center w-full desktop:max-w-[1000px] tablet:justify-center">
      <div class="flex items-center gap-[8rem]">
        <div class="flex items-end cursor-pointer" @click="router.push('/')">
          <img class="w-[81px] h-[34px]" src="@/assets/img/logo2.svg" alt="logo">
          <span class="ml-2 font-[600] text-[15px] text-white">流量专家</span>
        </div>
        <div class="flex gap-[32px] text-white laptop:hidden tablet:hidden text-[15px]">
          <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
        </div>
      </div>
      <div class="w-[95px] h-[37px] px border-white border-[1px] border-solid bg-white flex items-center justify-center text-white font-normal laptop:hidden tablet:hidden">
        <span class="text-black text-[15px] font-[400] w-[61px]">免费咨询</span>
      </div>
    </div>
    <img src="@/assets/img/menu.svg" class="absolute top-[16px] right-4 cursor-pointer desktop:hidden mac:hidden tablet:hidden" @click="showHamburger = true">
    <img src="@/assets/img/menuWhite.svg" class="absolute top-[16px] right-4 cursor-pointer desktop:hidden mac:hidden" @click="showHamburger = true">
  </div>
  <Transition name="slide-fade">
    <div class="w-full h-full fixed top-0 left-0 bg-white z-50 flex items-center pt-[75px] flex-col" v-if="showHamburger">
      <img src="@/assets/img/close.svg" class="fixed top-[16px] right-4 cursor-pointer desktop:hidden" @click="showHamburger = false">
      <div class="flex gap-[24px] text-text-black flex-col items-center">
        <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
      </div>
      <div class="rounded-[40px] w-[111px] h-[41px] bg-main-yellow flex items-center justify-center text-white font-normal mt-[24px]">
        <span>专业谘询</span>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
