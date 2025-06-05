<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
      <h2 class="text-center mb-4">Đăng Ký</h2>
      <form @submit.prevent="register">
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
        <button type="submit" class="btn btn-danger w-100">Đăng ký</button>
      </form>
      <p class="mt-3 text-center">
        Đã có tài khoản?
        <router-link to="/login">Đăng nhập</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { supabase } from '../supabase'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const { error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      if (error) {
        alert(error.message)
      } else {
        alert('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.')
      }
    }
  }
}
</script>

<style scoped>
body {
  background: #f8f9fa;
}

input::placeholder {
  color: #999;
}

.card {
  border-radius: 1rem;
}

button {
  font-weight: bold;
}
</style>
