<script setup>
import { useRouter } from 'vue-router'
const emit = defineEmits(['updateStatus'])
const router = useRouter()
const routerData = reactive([
  { linkName: '关于ＷＡＧ', link: '/about' },
  { linkName: '服务项目', link: '/service' },
  { linkName: '成功案例', link: '/example' },
  { linkName: '营销博客', link: '/blog' },
  { linkName: '招聘资讯', link: '/info' },
  { linkName: '联系我们', link: '/contact' }
])
const emailContent = ref('')
const close = () => {
  emit('updateStatus')
}
</script>
<template>
  <div class="bg-white w-3/12 h-[300px] fixed left-[10px] bottom-[10px] rounded-lg shadow-md flex flex-col items-center justify-center laptop:w-1/2 tablet:w-1/2" @click="close()">
    <img src="@/assets/img/close.svg" class="absolute right-[12px] top-[12px] cursor-pointer">
    <span class="text-black text-2xl font-bold mb-[12px] laptop:text-xl tablet:text-xl px-[12px]">Get FREE Website In A Second</span>
    <el-input class="mt-2" v-model="emailContent" placeholder="Email" clearable size="large"/>
    <div class="rounded-[10px] w-[90%] h-[41px] bg-main-yellow flex items-center justify-center text-white font-normal mt-[24px] cursor-pointer">
      <span @click="close()">I want a website</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-input) {
  width: 90%;
}
:deep(.el-input__wrapper) {
  box-shadow: none;
  border: 2px solid black;
}
</style>
