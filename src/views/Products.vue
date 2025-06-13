<template>
  <div class="container mt-4">
    <h2 class="mb-4">Danh sách món ăn</h2>

    <!-- Nếu chưa đăng nhập -->
    <div v-if="!user" class="alert alert-warning">
      Vui lòng <router-link to="/login">đăng nhập</router-link> để xem hoặc quản lý món ăn.
    </div>

    <!-- Bộ lọc -->
    <div class="mb-3">
      <label for="regionFilter" class="form-label">Lọc theo miền</label>
      <select v-model="selectedRegion" class="form-select" id="regionFilter">
        <option value="">Tất cả</option>
        <option value="Bắc">Miền Bắc</option>
        <option value="Trung">Miền Trung</option>
        <option value="Nam">Miền Nam</option>
      </select>
    </div>

    <!-- Form thêm món ăn (chỉ admin) -->
    <div v-if="isAdmin" class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">Thêm món ăn mới</h5>
        <input type="text" v-model="newProduct.name" class="form-control mb-2" placeholder="Tên món ăn" />
        <textarea v-model="newProduct.description" class="form-control mb-2" placeholder="Cách làm..."></textarea>
        <select v-model="newProduct.region" class="form-select mb-2">
          <option disabled value="">Chọn miền</option>
          <option>Bắc</option>
          <option>Trung</option>
          <option>Nam</option>
        </select>
        <input type="file" @change="handleFileChange" class="form-control mb-2" />
        <div v-if="previewUrl" class="mb-2">
          <p>Ảnh xem trước:</p>
          <img :src="previewUrl" class="preview-img" />
        </div>
        <button class="btn btn-danger" @click="addProduct">Thêm</button>
      </div>
    </div>

    <!-- Danh sách món ăn -->
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in filteredProducts" :key="product.id">
        <div class="card h-100">
          <img :src="product.image_url" class="card-img-top" alt="Hình ảnh món ăn" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <!-- Nếu đang sửa -->
            <div v-if="editId === product.id && isAdmin">
              <input v-model="editProduct.name" class="form-control mb-2" />
              <textarea v-model="editProduct.description" class="form-control mb-2"></textarea>
              <select v-model="editProduct.region" class="form-select mb-2">
                <option>Bắc</option>
                <option>Trung</option>
                <option>Nam</option>
              </select>
              <input type="file" @change="handleEditFileChange" class="form-control mb-2" />
              <div v-if="editPreviewUrl" class="mb-2">
                <p>Ảnh xem trước:</p>
                <img :src="editPreviewUrl" class="preview-img" />
              </div>
              <button class="btn btn-success btn-sm me-2" @click="saveEdit(product.id)">Lưu</button>
              <button class="btn btn-secondary btn-sm" @click="cancelEdit">Hủy</button>
            </div>

            <!-- Hiển thị bình thường -->
            <div v-else>
              <h5 class="card-title">{{ product.name }}</h5>
              <span class="badge bg-warning text-dark mb-2">Miền {{ product.region }}</span>
              <button class="btn btn-sm btn-outline-secondary mb-2 me-2" @click="toggleExpand(product.id)">
                {{ expandedIds.has(product.id) ? 'Ẩn cách làm' : 'Xem cách làm' }}
              </button>

              <!-- Chỉ admin mới thấy nút sửa/xóa -->
              <template v-if="isAdmin">
                <button class="btn btn-sm btn-primary me-2" @click="startEdit(product)">Sửa</button>
                <button class="btn btn-sm btn-danger" @click="deleteProduct(product.id)">Xóa</button>
              </template>

              <transition name="fade">
                <p v-if="expandedIds.has(product.id)">{{ product.description }}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const products = ref([])
const selectedRegion = ref('')
const user = ref(null)
const isAdmin = ref(false)

const newProduct = ref({ name: '', description: '', region: '', imageFile: null })
const previewUrl = ref(null)

const editId = ref(null)
const editProduct = ref({ name: '', description: '', region: '', imageFile: null, image_url: '' })
const editPreviewUrl = ref(null)

const expandedIds = ref(new Set())

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser

  if (currentUser?.email === 'babylovevn159@gmail.com') {
    isAdmin.value = true
  }

  fetchProducts()
})

const fetchProducts = async () => {
  const { data, error } = await supabase.from('products').select('*')
  if (!error) {
    products.value = data
  }
}

const filteredProducts = computed(() => {
  if (!selectedRegion.value) return products.value
  return products.value.filter(p => p.region === selectedRegion.value)
})

const handleFileChange = (e) => {
  newProduct.value.imageFile = e.target.files[0]
  previewUrl.value = URL.createObjectURL(newProduct.value.imageFile)
}

const handleEditFileChange = (e) => {
  editProduct.value.imageFile = e.target.files[0]
  editPreviewUrl.value = URL.createObjectURL(editProduct.value.imageFile)
}

const addProduct = async () => {
  if (!isAdmin.value) return alert('Bạn không có quyền thêm món ăn.')

  if (!newProduct.value.imageFile) return alert('Chưa chọn hình ảnh.')

  const file = newProduct.value.imageFile
  const fileName = `${Date.now()}_${file.name}`

  const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, file)
  if (uploadError) return alert('Upload ảnh thất bại.')

  const { data: { publicUrl } } = supabase.storage.from('product-images').getPublicUrl(fileName)

  const { error } = await supabase.from('products').insert([{
    name: newProduct.value.name,
    description: newProduct.value.description,
    region: newProduct.value.region,
    image_url: publicUrl
  }])

  if (!error) {
    fetchProducts()
    newProduct.value = { name: '', description: '', region: '', imageFile: null }
    previewUrl.value = null
  } else {
    alert('Thêm thất bại.')
  }
}

const startEdit = (product) => {
  if (!isAdmin.value) return
  editId.value = product.id
  editProduct.value = { ...product, imageFile: null }
  editPreviewUrl.value = product.image_url
}

const cancelEdit = () => {
  editId.value = null
  editProduct.value = { name: '', description: '', region: '', imageFile: null, image_url: '' }
  editPreviewUrl.value = null
}

const saveEdit = async (id) => {
  if (!isAdmin.value) return

  let imageUrl = editProduct.value.image_url

  if (editProduct.value.imageFile) {
    const file = editProduct.value.imageFile
    const fileName = `${Date.now()}_${file.name}`
    const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, file)
    if (uploadError) return alert('Upload ảnh thất bại.')

    const { data: { publicUrl } } = supabase.storage.from('product-images').getPublicUrl(fileName)
    imageUrl = publicUrl
  }

  const { error } = await supabase.from('products')
    .update({
      name: editProduct.value.name,
      description: editProduct.value.description,
      region: editProduct.value.region,
      image_url: imageUrl,
    })
    .eq('id', id)

  if (!error) {
    fetchProducts()
    cancelEdit()
  } else {
    alert('Cập nhật thất bại.')
  }
}

const deleteProduct = async (id) => {
  if (!isAdmin.value) return
  if (confirm('Xác nhận xóa món ăn?')) {
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (!error) fetchProducts()
    else alert('Xóa thất bại.')
  }
}

const toggleExpand = (id) => {
  if (expandedIds.value.has(id)) expandedIds.value.delete(id)
  else expandedIds.value.add(id)
  expandedIds.value = new Set(expandedIds.value)
}
</script>

<style scoped>
.preview-img {
  max-height: 100px;
  width: auto;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
