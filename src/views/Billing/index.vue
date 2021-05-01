<template>
  <el-calendar>
    <template #dateCell="{data}">
      <p
        :class="data.isSelected ? 'is-selected' : ''"
        @click="datePick(data)"
      >
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
  <!-- 
    v-model:showDialog="showDialog" 雙向綁定
    :selectedDate="selectedDate" 單向綁定
    @close="handleClose" 關閉視窗後執行handleClose
   -->
  <Billing-Dialog
    v-model:showDialog="showDialog"
    :selectedDate="selectedDate"
    @close="handleClose"
  ></Billing-Dialog>
  <Billing-List></Billing-List>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import BillingDialog from '../../container/Billing/BillingDialog.vue'
  import BillingList from '../../container/Billing/BillingList.vue'

  export default defineComponent({
    name: 'Billing',
    components: {
      BillingDialog,
      BillingList,
    },
    setup() {
      // showDialog 父元件-控制是否顯示對話視窗
      const showDialog = ref(false)
      // selectedDate 使用者在月曆上所點的日期
      const selectedDate = ref('')

      /**
       * 點選日期後做的動作 - 控制視窗設為true, 日期設為點選日期
       * data el-calendar data
       */
      const datePick = (data: any) => {
        showDialog.value = true
        selectedDate.value = data.day
        console.log(data)
      }

      /**
       * 處理關閉視窗的動作- 控制視窗設為false
       *
       */
      const handleClose = () => {
        console.log('father component: window closed')
        showDialog.value = false
      }
      return { showDialog, datePick, selectedDate, handleClose }
    },
  })
</script>

<style>
</style>