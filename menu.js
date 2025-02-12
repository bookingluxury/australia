// Xác định tên file hiện tại từ URL
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Nạp navbar từ navbar.html
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    const navItems = document.querySelectorAll(".nav-item");

    // Đánh dấu mục active dựa trên URL hiện tại
    navItems.forEach(item => {
      const link = item.getAttribute("href");

      if (link === currentPage) {
        item.classList.add("active");
      }

      // Thêm sự kiện click để cập nhật trạng thái active
      item.addEventListener("click", function () {
        navItems.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");

        // Lưu trạng thái active vào localStorage
        localStorage.setItem("activeNavItem", link);
      });
    });

    // Kiểm tra trạng thái active từ localStorage khi reload trang
    const savedActiveItem = localStorage.getItem("activeNavItem");
    if (savedActiveItem) {
      navItems.forEach(item => {
        if (item.getAttribute("href") === savedActiveItem) {
          item.classList.add("active");
        }
      });
    }
  });
