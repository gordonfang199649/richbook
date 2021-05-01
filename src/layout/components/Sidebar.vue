<template>
  <el-aside
    class="app-sidebar"
    width="200px"
  >
    <el-menu
      v-for="menuItem in menuList"
      :key="menuItem.name"
    >
      <el-menu-item :index="menuItem.name">
        <i :class="['app-sidebar__icon', `${menuItem.meta.icon}`]"></i>
        <span>{{ menuItem.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>

</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'SideBar',
    setup() {
      const router = useRouter()
      const menuList = router.options.routes[0].children
      return { menuList }
    },
  })
</script>

<style>
</style>