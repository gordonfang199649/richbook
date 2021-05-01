<template>
  <el-header
    class="app-header"
    height="60px"
  >
    <el-dropdown>
      <span class="el-dropdown-link">
        <i
          class="el-icon-setting"
          style="margin-right: 15px"
        ></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>設定</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>Dez</span>
  </el-header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

</style>