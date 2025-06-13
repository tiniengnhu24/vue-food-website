<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <!-- Brand -->
      <router-link class="navbar-brand" to="/">Ẩm Thực Việt Nam</router-link>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <!-- Trang Chủ -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="homeDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click.prevent="$router.push('/')"
            >
              Trang Chủ
            </a>
            <ul class="dropdown-menu" aria-labelledby="homeDropdown">
              <li><router-link class="dropdown-item" to="/gioithieu">Giới Thiệu</router-link></li>
              <li><router-link class="dropdown-item" to="/lienhe">Liên Hệ</router-link></li>
            </ul>
          </li>

          <!-- Sản phẩm -->
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Sản phẩm</router-link>
          </li>

          <!-- Đăng nhập / Đăng ký -->
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/register">Đăng ký</router-link>
          </li>

          <!-- Nếu đã đăng nhập -->
          <li class="nav-item dropdown" v-if="user">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chào, {{ user.email }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a class="dropdown-item" href="#" @click.prevent="logout">Đăng xuất</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'

// 👉 Lấy user từ useAuth thay vì tự tạo ref riêng
import { user } from '@/composables/useAuth'

const router = useRouter()

const logout = async () => {
  await supabase.auth.signOut()
  user.value = null
  router.push('/')
}
</script>

<style scoped>
.navbar .badge {
  font-size: 0.75rem;
  padding: 4px 6px;
}
</style>
