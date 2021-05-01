<template>
  <el-dialog
    title="新增紀錄"
    v-model="dialogFormVisible"
    @close="handleClose"
  >
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      label-width="80px"
    >
      <el-form-item
        label="金額"
        prop='dollar'
      >
        <el-input
          v-model.number="form.dollar"
          placeholder="請輸入金額"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="類別"
        prop='type'
      >
        <el-select
          v-model="form.type"
          placeholder="請選擇類別"
        >
          <el-option
            label="早餐"
            value="breakfast"
          ></el-option>
          <el-option
            label="午餐"
            value="lunch"
          ></el-option>
          <el-option
            label="晚餐"
            value="dinner"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="帳戶"
        prop='account'
      >
        <el-select
          v-model="form.account"
          placeholder="請選擇帳戶"
        >
          <el-option
            label="現金"
            value="cash"
          ></el-option>
          <el-option
            label="信用卡"
            value="credit-card"
          ></el-option>
          <el-option
            label="電子支付"
            value="pay"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="項目"
        prop='title'
      >
        <el-input
          v-model="form.title"
          placeholder="請輸入項目內容"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>

    <el-button @click="handleClose">取 消</el-button>
    <el-button
      type="primary"
      @click="handleSubmit"
    >儲存</el-button>
  </el-dialog>
</template>

<script>
  import { defineComponent, watch, ref, reactive, unref } from 'vue'

  export default defineComponent({
    props: {
      showDialog: {
        type: Boolean,
        default: false,
        required: true,
      },
      selectedDate: {
        type: String,
        default: '',
        required: true,
      },
    },
    emits: ['update:showDialog'],
    setup(props, { emit }) {
      const dialogFormVisible = ref(false)
      const formRef = ref(null)
      const form = reactive({
        dollar: 0,
        type: '',
        title: '',
        account: '',
        date: '',
      })
      const rules = {
        dollar: [
          { required: true, message: '請輸入金額', trigger: 'blur' },
          { pattern: /^[\d]*$/, message: '金額必須是數字', trigger: 'blur' },
        ],
        type: [{ required: true, message: '請選擇類別', trigger: 'blur' }],
        account: [{ required: true, message: '請選擇帳戶', trigger: 'blur' }],
        date: [{ required: true, message: '請選擇日期', trigger: 'blur' }],
      }

      watch(
        () => props.showDialog,
        (newValue) => {
          if (newValue) {
            dialogFormVisible.value = true
            form.dollar = 0
            form.type = ''
            form.title = ''
            form.account = ''
            form.date = props.selectedDate

            console.log('watch')
            console.log(form)
          }
        }
      )

      const handleSubmit = async () => {
        const formReference = unref(formRef)
        console.log('form')
        console.log(formReference)

        if (!formReference) return
        try {
          await formReference.validate()
          const { dollar, type, title, account, date } = form
          console.log(dollar, type, title, account, date)
          handleClose()
        } catch (err) {
          console.log(err)
          console.log('請重新填寫')
        }
      }

      const handleClose = () => {
        const form = unref(formRef)
        form.resetFields()
        dialogFormVisible.value = false
        emit('update:showDialog', false)
      }

      return { form, dialogFormVisible, rules, formRef, handleSubmit, handleClose }
    },
  })
</script>

<style>
</style>