<template>
  <div id="app">
    <!-- Top Banner full-width -->
    <TopBanner />

    <!-- Nội dung bên trong container -->
    <div class="container py-3">
      <!-- Thanh chức năng (Navbar) -->
      <AppNavbar />

      <!-- Nội dung trang -->
      <router-view></router-view>
    </div>
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
  color: #333;
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
