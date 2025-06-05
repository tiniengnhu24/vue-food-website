<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
      <h2 class="text-center mb-4">Đăng Nhập</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Mật khẩu"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
      <p class="mt-3 text-center">
        Bạn chưa có tài khoản?
        <router-link to="/register">Đăng ký</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

// Biến reactive cho email và password
const email = ref('')
const password = ref('')

// Router để điều hướng sau khi đăng nhập
const router = useRouter()

// Hàm đăng nhập
const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    alert(error.message)
  } else {
    router.push('/')
  }
}
</script>


<style scoped>
body {
  background-color: #f0f2f5;
}

.card {
  border-radius: 1rem;
}

input::placeholder {
  color: #999;
}

button {
  font-weight: bold;
}
</style>
