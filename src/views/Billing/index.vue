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
      const showDialog = ref(false)
      const selectedDate = ref('')
      const datePick = (data: any) => {
        showDialog.value = true
        selectedDate.value = data.day
        console.log(data)
      }

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