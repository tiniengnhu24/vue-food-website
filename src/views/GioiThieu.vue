<template>
  <div class="container my-5">
    <!-- Banner hình ảnh -->
    <div class="position-relative mb-5">
      <img
        :src="bgBanner"
        class="w-100 rounded-4 shadow img-fluid"
        style="height: 300px; object-fit: cover;"
        alt="Ẩm thực Việt Nam"
      />
      <div
        class="position-absolute top-50 start-50 translate-middle text-white text-center"
        style="text-shadow: 0 0 8px rgba(0,0,0,0.8);"
      >
        <h1 class="display-5 fw-bold">Khám phá ẩm thực Việt</h1>
        <p class="lead">Hương vị ba miền - Gắn kết yêu thương</p>
      </div>
    </div>

    <!-- Nội dung giới thiệu -->
    <div class="bg-light p-4 p-md-5 rounded-4 shadow fade-in">
      <h2 class="text-danger mb-4">Giới Thiệu</h2>
      <p class="fs-5 text-muted">
        Chào mừng bạn đến với <strong>Blog Ẩm Thực Việt Nam</strong> – nơi lưu giữ tinh hoa văn hóa ẩm thực ba miền Bắc, Trung, Nam.
      </p>
      <p class="fs-5 text-muted">
        Tại đây, bạn sẽ được khám phá những công thức nấu ăn truyền thống, những câu chuyện đằng sau từng món ăn, và bí quyết để tạo nên hương vị chuẩn Việt ngay tại gian bếp nhà bạn.
      </p>
      <p class="fs-5 text-muted">
        Chúng tôi tin rằng: <em>ẩm thực là chiếc cầu nối tâm hồn – nơi gia đình sum họp, nơi ký ức trỗi dậy và tình yêu thương được lan tỏa qua từng bữa ăn.</em>
      </p>
      <p class="fs-5 text-muted">
        Hãy cùng chúng tôi gìn giữ và chia sẻ hương vị Việt đến với mọi người!
      </p>
    </div>
  </div>
</template>

<script setup>
import bgBanner from '@/assets/images/background2.jpg'
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
