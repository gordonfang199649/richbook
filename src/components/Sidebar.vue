<template>
  <el-aside
    class="app-sidebar"
    width="200px"
  >
    <el-menu>
      <el-menu-item index="1">
        <template v-slot:title="{title}"><i class="el-icon-notebook-1"></i>{{title}}月記帳本</template>
      </el-menu-item>
      <el-menu-item index="2">
        <template v-slot:title="{title}"><i class="el-icon-money"></i>{{title}}帳戶管理</template>
      </el-menu-item>
      <el-menu-item index="3">
        <template v-slot:title="{title}"><i class="el-icon-pie-chart"></i>{{title}}圖表分析</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {}
</script>

<style>
</style>