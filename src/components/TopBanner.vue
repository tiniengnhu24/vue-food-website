<template>
  <div class="top-banner py-3 px-4">
    <div class="banner-content d-flex justify-content-between align-items-center flex-wrap">
      <!-- Bên trái -->
      <div class="banner-left text-start">
        <div><strong>ỦY BAN NHÂN DÂN THÀNH PHỐ HỒ CHÍ MINH</strong></div>
        <div><strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong></div>
        <div><strong>TRƯỜNG CAO ĐẲNG KINH TẾ THÀNH PHỐ HỒ CHÍ MINH</strong></div>
        <div class="mt-2"><em>Đồ Án Thiết Kế Web Nâng Cao</em></div>
      </div>

      <!-- Giữa -->
      <div class="banner-center text-center">
        <h1>ĐỒ ÁN ẨM THỰC BA MIỀN</h1>
      </div>

      <!-- Bên phải -->
      <div class="banner-right text-end">
        <div><strong>GIẢNG VIÊN HƯỚNG DẪN</strong></div>
        <div><em>Th.S Phạm Đằng Phương</em></div>
        <div class="mt-2"><strong>SINH VIÊN THỰC HIỆN</strong></div>
        <div><em>Cao Thị Ngọc Như<br>Phan Nguyễn Anh Phương<br>Nguyễn Thị Bảo Trâm</em></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-banner {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.banner-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.banner-left,
.banner-right {
  flex: 1 1 200px; /* đảm bảo min width để không bị co */
  font-size: 14px;
  line-height: 1.5;
  margin: 5px;
}

.banner-center {
  flex: 2 1 300px; /* phần giữa rộng hơn */
  text-align: center;
}

.banner-center h1 {
  font-size: 28px;
  font-weight: bold;
  color: #c00;
  margin: 0;
}

@media (max-width: 768px) {
  .banner-content {
    flex-direction: column;
    text-align: center;
  }

  .banner-left,
  .banner-center,
  .banner-right {
    flex: 1 1 100%;
    text-align: center !important;
    margin: 10px 0;
  }
}
</style>
