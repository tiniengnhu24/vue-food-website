<template>
  <div id="app" class="container">
    <!-- Top Banner hiển thị trên cùng -->
    <TopBanner />

    <!-- Thanh chức năng (Navbar) -->
    <AppNavbar />

    <!-- Nội dung trang -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppNavbar from './components/Navbar.vue'
import TopBanner from './components/TopBanner.vue'

// 💡 Import fetchUser từ useAuth để kiểm tra trạng thái đăng nhập
import { onMounted } from 'vue'
import { fetchUser } from '@/composables/useAuth'

onMounted(() => {
  fetchUser() // ✅ Gọi khi ứng dụng load
})
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #c00;
  margin: 0;
  padding: 0;
}
</style>
