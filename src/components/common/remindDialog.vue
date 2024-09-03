<template>
  <div class="dialog">
    <el-dialog v-model="showDialog" width="70%" :show-close="false" align-center :close-on-click-modal="false" center @close="close">
      <template #header>
        <img src="../../assets/icon_warning.svg" alt="">
        <div>請稍後再試</div>
        <!-- <slot name="header" /> -->
      </template>
      <!-- <slot name="content" /> -->
      <template #default>
        <div>{{ apiStatusText }}({{ apiStatusCode }}<span v-if="errorRecord">-{{ errorRecord }}</span>)</div>
      </template>
      <template #footer class="footer">
        <div v-if="loginUrl" class="backIcon">
          <a :href="loginUrl"><el-button class="scanBtn">重新登入</el-button></a>
        </div>
        <div v-else class="backIcon">
          <a href="viewclose://"><el-button class="scanBtn">返回首頁</el-button></a>
        </div>
        <!-- <div class="dialog-footer">
          <div>
            <div @click="leftClick">{{ props.leftTitle }}</div>
          </div>
          <div>
            <div @click="rightClick" class="comfirmTitle">{{ props.rightTitle }}</div>
          </div>
        </div> -->
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { useApiStore } from "../../stores/api";
const store = useApiStore();
import { computed, ref, onMounted } from 'vue'
const apiStatusText = computed(() => store.apiStatusText);
const apiStatusCode = computed(() => store.apiStatusCode);
const errorRecord = computed(() => store.errorRecord);
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  leftClick: {
    type: Function
  },
  leftTitle: {
    type: String,
    default: ''
  },
  rightClick: {
    type: Function
  },
  rightTitle: {
    type: String,
    default: ''
  },
})
const emit = defineEmits(['update'])
const loginUrl = computed(() => sessionStorage.getItem('loginUrl'))
onMounted(() => {
  showDialog.value = props.show
})
const showDialog = ref(false)
const leftClick = () => {
  props.leftClick()
}
const rightClick = () => {
  props.rightClick()
}
const close = () => {
  showDialog.value = false
  emit('update', showDialog.value)
}
</script>
<style lang="scss" scoped>
.dialog{
  :deep(.el-dialog){
    .el-dialog__header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      img{
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
      div{
        color: #EAC500;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .el-dialog__body{
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
    }
    .el-dialog__footer{
      .backIcon{
        a{
            width: 100%;
            height: 56px;
            .scanBtn{
              padding: 16px;
              width: 100%;
              height: 100%;
              background-color: #2DB5C6;
              border-radius: 10px;
              color: #fff;
              font-size: 16px;
            }
          }
      }
    }
  }
  // .dialog-footer {
  //   display: flex;
  //   justify-content: space-evenly;
  //   div{
  //     width: 100%;
  //   }
  //   .comfirmTitle{
  //     color: #2eb6c7;
  //   }
  // }
}
</style>