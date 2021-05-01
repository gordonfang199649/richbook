<template>
  <el-container class="app-layout">
    <Sidebar></Sidebar>
    <el-container>
      <el-main class="app-main">
        <Header></Header>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  import Header from './components/Header.vue'
  import Sidebar from './components/Sidebar.vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      Header,
      Sidebar,
    },
  })
</script>

<style>
</style>