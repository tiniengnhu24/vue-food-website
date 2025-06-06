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

<script>
import AppNavbar from './components/Navbar.vue';
import TopBanner from './components/TopBanner.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    TopBanner
  },
  computed: {
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/register';
    }
  }
};
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
