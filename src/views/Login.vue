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
    async login() {
      const { error } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
      if (error) {
        alert(error.message)
      } else {
        this.$router.push('/')
      }
    }
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
