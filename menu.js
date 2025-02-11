// Xác định đường dẫn hiện tại của trang
const currentPage = window.location.pathname.split("/").pop();

// Gọi navbar.html và chèn vào placeholder
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Xử lý active class cho mục tương ứng
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
      const link = item.getAttribute("href");

      // So sánh đường dẫn hiện tại với đường dẫn của từng nav-item
      if (link === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
