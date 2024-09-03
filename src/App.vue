<script setup>
import { RouterView } from 'vue-router'
import navHeader from '@/components/common/navHeader.vue'
import bottomFooter from '@/components/common/bottomFooter.vue'
// import { onMounted } from 'vue'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// onMounted(async () => {
//   AOS.init()
// })
</script>

<template>
  <navHeader/>
  <RouterView />
  <bottomFooter/>
</template>
<style scoped>

</style>
