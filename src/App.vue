//App.vue
<template>
  <div id="app" class="container">
    <AppNavbar />

    <!-- Kiểm tra xem người dùng có ở trang đăng nhập hoặc đăng ký không -->
    <FoodCategories v-if="!isAuthPage" />
    
    <router-view></router-view> 
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
   
  },
  computed: {
    // Kiểm tra nếu đường dẫn là '/login' hoặc '/register'
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/register';
    }
  }
};
</script>

<style>
/* Tùy chỉnh thêm nếu cần */
body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #c00;
  margin: 0;
  padding: 0;
}
</style>
