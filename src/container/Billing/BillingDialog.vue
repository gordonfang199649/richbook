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
     <!-- 
       el-form-item  prop 屬性一定打，否則驗證不會生效
      -->
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
      // showDialog 子元件-控制是否顯示對話視窗
      const dialogFormVisible = ref(false)
      const formRef = ref(null)
      // form 表單資料
      const form = reactive({
        dollar: 0,
        type: '',
        title: '',
        account: '',
        date: '',
      })
      //表單驗證規則
      const rules = {
        dollar: [
          { required: true, message: '請輸入金額', trigger: 'blur' },
          { pattern: /^[\d]*$/, message: '金額必須是數字', trigger: 'blur' },
        ],
        type: [{ required: true, message: '請選擇類別', trigger: 'blur' }],
        account: [{ required: true, message: '請選擇帳戶', trigger: 'blur' }],
        date: [{ required: true, message: '請選擇日期', trigger: 'blur' }],
      }

      /**
       * 監控屬性props.showDialog
       * 一旦有異動，並刷新表單內的資料
       */
      watch(
        () => props.showDialog,
        (newValue) => {
          if (newValue) {
            console.log('newValue')
            console.log(newValue)
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

      /**
       * 處理表單送出後的動作
       *
       */
      const handleSubmit = async () => {
        const formReference = unref(formRef)
        console.log('form')
        console.log(formReference)

        if (!formReference) return
        try {
          //表單驗證是非同步(回傳Promise)，使用async搭配await
          await formReference.validate()
          const { dollar, type, title, account, date } = form
          console.log(dollar, type, title, account, date)
          //驗證通過後即關閉視窗
          handleClose()
        } catch (err) {
          //驗證失敗對話視窗會顯示錯誤的欄位，並不關閉視窗
          console.log(err)
          console.log('請重新填寫')
        }
      }

      /**
       * 處理關閉視窗的動作- 控制視窗設為false
       *
       */
      const handleClose = () => {
        const form = unref(formRef)
        //復原表單初始狀態，驗證失敗的提示訊息會清除
        form.resetFields()
        //設定表單顯示關閉
        dialogFormVisible.value = false
        //回傳給父元件
        emit('update:showDialog', false)
      }

      return { form, dialogFormVisible, rules, formRef, handleSubmit, handleClose }
    },
  })
</script>

<style>
</style>