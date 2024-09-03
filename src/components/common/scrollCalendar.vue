<script setup>
import { ref, onMounted, reactive } from 'vue'
import dayjs from 'dayjs'
const props = defineProps({
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: false
  },
  disabledDates: {
    type: Array,
    required: false
  },
  pickedDate: {
    type: String,
    required: false,
  },
  propIndex: {
    type: Number,
    required: false
  }
})
const attrs = ref([
  {
    highlight: true,
    dates: props.pickedDate ? new Date(dayjs(props.pickedDate)) : new Date(),
  }
])
const emit = defineEmits(['closeCalendar', 'getDateData'])
const weeks = ref(['一', '二', '三', '四', '五', '六', '日'])
const calendars = reactive([])
const dayClicked = (d) => {
  if(!d.isDisabled){
    emit('getDateData', d.date, props.propIndex)
  }
}
const close = () => {
  emit('closeCalendar', false)
}
const getDur = (startTime, endTime) => {
  let currentDate = dayjs(startTime)
  let stopDate = dayjs(endTime)
  while (currentDate <= stopDate) {
    calendars.push({ startY: dayjs(currentDate).format('YYYY'), startM: dayjs(currentDate).format('M') })
    currentDate = dayjs(currentDate).add(1, 'months')
  }
  console.log('calendars', calendars)
}
onMounted(() => {
  getDur(props.startDate, props.endDate)
})
</script>
<template>
  <div class="scrollCalendar">
    <div class="calendarBox">
      <div class="weekContent">
        <div class="weekAction">
          <span class="blank"></span>
          <span class="title">可申請日期</span>
          <span class="close" @click="close">關閉</span>
        </div>
        <div class="weekTitle">
          <div v-for="(week, idx) in weeks" :key="idx">
            <span>{{ week }}</span>
          </div>
        </div>
      </div>
      <div class="itemCalendar" v-for="(c, index) in calendars" :key="index">
        <div class="title">{{ c.startY }} 年 {{ c.startM }} 月</div>
        <VCalendar :first-day-of-week="2" :attributes="attrs" :initial-page="{ month: c.startM, year: c.startY }" :disabled-dates="disabledDates" @dayclick="dayClicked" expanded transparent title-position="left" borderless />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.scrollCalendar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 48px;
  z-index: 1;
  .calendarBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 48px);
    background-color: white;
    border-radius: 16px 16px 0 0;
    overflow-y: scroll;
    position: relative;

    .weekContent {
      position: sticky;
      top: 0;
      left: 0;
      background-color: #ffffff;
      border-bottom: 1px solid lightgray;
      font-size: 14px;
      color: #333333;
      z-index: 100;
      .weekAction {
        padding: 16px 32px;
        display: flex;
        justify-content: space-between;
        .blank {
          width: 28px;
        }
        .title {
          color: #333333;
          font-weight: bold;
        }
        .close {
          color: #2DB5C6;
        }
      }
      .weekTitle {
        display: flex;
        justify-content: space-evenly;
        padding: 18px 8px 8px;
      }
    }

    .itemCalendar {
      padding: 18px;

      .title {
        font-size: 18px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 8px;
      }

      :deep(.vc-header) {
        display: none;
      }

      :deep(.vc-weeks) {
        .vc-weekdays {
          display: none;
        }
      }
    }
  }
}</style>