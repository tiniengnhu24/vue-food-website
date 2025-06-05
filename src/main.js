// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // import router từ file router/index.js

// CSS thư viện
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Tạo app
const app = createApp(App)

// Sử dụng router
app.use(router)

// Mount app
app.mount('#app')
