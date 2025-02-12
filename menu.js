// Lấy tên trang hiện tại (VD: index.html, review.html)
const currentPage = window.location.pathname.split("/").pop();

// Nạp nội dung từ navbar.html
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Xác định tất cả các nav-item
    const navItems = document.querySelectorAll(".nav-item");

    // Kiểm tra từng nav-item để cập nhật trạng thái active
    navItems.forEach(item => {
      const link = item.getAttribute("href");

      // So sánh đường dẫn hiện tại với href của từng nav-item
      if (currentPage === "" && link === "index.html") {
        item.classList.add("active"); // Trường hợp đặc biệt cho trang chủ
      } else if (link === currentPage) {
        item.classList.add("active"); // Gán active cho trang phù hợp
      } else {
        item.classList.remove("active"); // Bỏ active ở các mục không phù hợp
      }

      // Thêm sự kiện click để cập nhật trạng thái active khi chuyển trang
      item.addEventListener("click", () => {
        navItems.forEach(nav => nav.classList.remove("active")); // Xóa active cũ
        item.classList.add("active"); // Gán active mới
      });
    });
  });
