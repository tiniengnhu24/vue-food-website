<template>
  <div class="top-banner py-3 px-4">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <!-- Bên trái -->
      <div class="text-start banner-left">
        <div><strong>ỦY BAN NHÂN DÂN QUẬN 10</strong></div>
        <div><strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong></div>
        <div><strong>TRƯỜNG CAO ĐẲNG KINH TẾ HCE</strong></div>
        <div class="mt-2"><em>Đồ Án Thiết Kế Web Nâng Cao</em></div>
      </div>

      <!-- Giữa -->
      <div class="text-center w-50 banner-center">
        <div class="project-title">
          <h1>ĐỒ ÁN ẨM THỰC BA MIỀN</h1>
        </div>
      </div>

      <!-- Bên phải -->
      <div class="text-end banner-right">
        <div><strong>GIẢNG VIÊN HƯỚNG DẪN</strong></div>
        <div><em>Phạm Đằng Phương</em></div>
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
}

.project-title h1 {
  font-size: 28px;
  font-weight: bold;
  color: #c00;
}

.banner-left,
.banner-right {
  font-size: 14px;
  line-height: 1.5;
}

.banner-center h1 {
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .banner-center {
    width: 100% !important;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .d-flex {
    flex-direction: column;
    align-items: center !important;
    text-align: center !important;
  }

  .banner-left,
  .banner-right {
    text-align: center !important;
  }
}
</style>
