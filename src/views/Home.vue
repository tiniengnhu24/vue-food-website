//views/Home.vue
<template>
  <div>
    <!-- Tiêu đề trang trọng -->
<div class="top-banner py-2 px-3 text-center">
  <div class="d-flex justify-content-between align-items-start">
    <div class="text-start">
      <div><strong>ỦY BAN NHÂN DÂN QUẬN 10</strong></div>
      <div><em>SỞ GIÁO DỤC VÀ ĐÀO TẠO</em></div>
    </div>

    <div class="text-center w-50">
      <div class="project-title"><strong>ĐỒ ÁN ẨM THỰC BA MIỀN</strong></div>
    </div>

    <div class="text-end">
      <div><strong>TRƯỜNG CAO ĐẲNG KINH TẾ HCE</strong></div>
      <div><em>GVHD: Phạm Đằng Phương</em></div>
    </div>
  </div>
</div>

    <!-- Header -->
    <div id="header"></div>

    <!-- Tiêu đề chính -->
    <div class="background-section text-white text-center py-5 animate__animated animate__fadeInDown">
      <h1>BLOG ẨM THỰC BA MIỀN</h1>
    </div>

    <!-- Nội dung chính -->
    <div class="main-content container py-5">
      <div class="row">
        <!-- Cột trái -->
        <div class="col-md-6 animate__animated animate__fadeInLeft">
          <h2>"Gìn Giữ Hương Vị Việt"</h2>
          <p>
            Mục tiêu của Blog Ẩm Thực Ba Miền là lan tỏa văn hóa ẩm thực đặc sắc của Việt Nam từ Bắc đến Nam.
            Chúng tôi mong muốn mang đến cho bạn đọc những câu chuyện, món ăn, và trải nghiệm ẩm thực dân dã, gần gũi,
            giúp mỗi người thêm yêu quý và tự hào về nền ẩm thực phong phú của quê hương.
          </p>
        </div>

        <!-- Cột phải -->
        <div class="col-md-6 animate__animated animate__fadeInRight">
          <h2>Hành Trình Ẩm Thực</h2>
          <p>
            Blog chia sẻ các món ăn nổi bật theo từng vùng miền như Phở Bắc, Bún Bò Huế, Cơm Tấm Sài Gòn...
            Bên cạnh đó là hướng dẫn nấu ăn, phân tích hương vị, nguồn gốc và bí quyết chế biến.
            Mỗi bài viết được chọn lọc kỹ càng để truyền tải đầy đủ bản sắc và tinh túy của từng món ăn truyền thống.
          </p>
        </div>
      </div>
    </div>

    <!-- Phần bài viết nổi bật -->
    <div class="featured-posts container py-5">
      <h2 class="text-center animate__animated animate__pulse animate__infinite">Bài Viết Nổi Bật</h2>
      <div class="row">
        <!-- Phở Bắc -->
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm border-light d-flex flex-column animate__animated animate__fadeInUp">
            <img
              src="@/assets/images/pho.jpg"
              class="card-img-top img-fluid zoom-effect animate__animated animate__jello"
              alt="Phở Bắc"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">Phở Bắc - Hương Vị Miền Bắc</h5>
                <p class="card-text">Phở Bắc là món ăn đặc trưng, nổi tiếng của miền Bắc với hương vị thanh tao...</p>
              </div>
              
            </div>
          </div>
        </div>

        <!-- Bún Bò Huế -->
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm border-light d-flex flex-column animate__animated animate__fadeInUp animate__delay-1s">
            <img
              src="@/assets/images/bunbo.jpg"
              class="card-img-top img-fluid zoom-effect animate__animated animate__pulse"
              alt="Bún Bò Huế"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">Bún Bò Huế - Món Ăn Nổi Tiếng Miền Trung</h5>
                <p class="card-text">Bún Bò Huế nổi bật với vị cay nồng và nước dùng đậm đà...</p>
              </div>
              
            </div>
          </div>
        </div>

        <!-- Cơm Tấm -->
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm border-light d-flex flex-column animate__animated animate__fadeInUp animate__delay-2s">
            <img
              src="@/assets/images/comtam.jpg"
              class="card-img-top img-fluid zoom-effect animate__animated animate__rubberBand"
              alt="Cơm Tấm Sài Gòn"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">Cơm Tấm Sài Gòn - Hương Vị Miền Nam</h5>
                <p class="card-text">Cơm Tấm Sài Gòn là món ăn phổ biến của người dân miền Nam...</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.background-section {
  background-image: url('@/assets/images/blog-background.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
}

.zoom-effect {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect:hover {
  transform: scale(1.1);
}

.card {
  display: flex;
  flex-direction: column;
}

.card-body {
  flex-grow: 1;
}
</style>
  