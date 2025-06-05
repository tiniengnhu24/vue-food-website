// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Views
import Home from '@/views/Home.vue'
import GioiThieu from '@/views/GioiThieu.vue'
import LienHe from '@/views/LienHe.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Products from '@/views/Products.vue'

// Cấu hình routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gioithieu', name: 'GioiThieu', component: GioiThieu },
  { path: '/lienhe', name: 'LienHe', component: LienHe },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/products', name: 'Products', component: Products }
]

// Tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
